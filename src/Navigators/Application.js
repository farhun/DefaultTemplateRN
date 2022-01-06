import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar, Animated, BackHandler } from 'react-native'
import { useTheme } from '@/Theme'
import ProductNavigator from './Product';
import FlashMessage from "react-native-flash-message"
import Toast from 'react-native-simple-toast';

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null

      /* ----- fix-back-handler ----- */
    let currentCount = 0;
    const backAction = () => {
        if (currentCount < 1) {
          currentCount += 1;
          Toast.show('Tekan sekali lagi untuk keluar.', 2000)
        } else {
          // exit the app here using BackHandler.exitApp();
          BackHandler.exitApp();
        }
        setTimeout(() => {
          currentCount = 0;
        }, 2000);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {

      /* ----- fix-back-handler ----- */
      backHandler.remove();
      setIsApplicationLoaded(false)
      MainNavigator = null
    }

    },
    [],
  )

  // make slide animation card like ios on android
  const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        : 0
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted
            ),
          },
        ],
      },
    };
  };


  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false, cardStyleInterpolator: forSlide }}>
          <Stack.Screen name="Startup" component={IndexStartupContainer} />
          {isApplicationLoaded && MainNavigator != null && (
            <>
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name="Product"
              component={ProductNavigator}
            />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}

      <FlashMessage
        position='bottom'
        floating={true}
        style={{ borderRadius: 5, marginBottom: 70 }}
        titleStyle={{ fontFamily: 'Montserrat-Medium', includeFontPadding: false, fontSize: 12 }}
      />

      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}

    </SafeAreaView>
  )
}

export default ApplicationNavigator
