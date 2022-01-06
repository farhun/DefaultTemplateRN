// modules
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView, StatusBar, Animated } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
/* Screen */
import Keranjang from '../Containers/Product/Keranjang'


import { useTheme } from '@/Theme'
const Stack = createStackNavigator()

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


// @refresh reset
const ProductNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <AppearanceProvider>
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: forSlide }}>
          <Stack.Screen name="Keranjang" component={Keranjang} />
        </Stack.Navigator>
      </SafeAreaView>
    </AppearanceProvider>
  )
}

export default ProductNavigator;
