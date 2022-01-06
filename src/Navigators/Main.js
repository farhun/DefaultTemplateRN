// -------------------------------------------- WITHOUT BOTTOM NAVIGATOR -----------------------------------------------------------

// import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Colors } from '../Theme/Variables';
// // import AppEmitter from '../Utils/AppEmitter';
// // import BottomNavigator from '../Components/BottomNavigator'
// import Icon from 'react-native-vector-icons/Feather';
// import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
// import FastImage from 'react-native-fast-image';

// // // Utama
// import Beranda from '../Containers/Utama/Beranda';
// import Produk from '../Containers/Utama/Produk';
// import Jasa from '../Containers/Utama/Jasa';
// import Akun from '../Containers/Utama/Akun';

// const Tab = createBottomTabNavigator();

// const TabBarIcon = props => {
//   return (
//     <Icon
//       name={props.name}
//       size={props.size ? props.size : 20}
//       color={props.tintColor}
//     />
//   )
// }
// const TabBarIcon2 = props => {
//   return (
//     <Icon2
//       name={props.name}
//       size={props.size ? props.size : 20}
//       color={props.tintColor}
//     />
//   )
// }

// // @refresh reset
// const MainNavigator = () => {

//   let scrollTopBeranda = 0

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarInactiveTintColor: '#7d7d7d',
//         tabBarActiveTintColor: Colors.primary,
//         tabBarActiveBackgroundColor: '#fff',
//         tabBarInactiveBackgroundColor: '#fff',
//         tabBarLabelPosition: 'below-icon',
//         tabBarStyle: { height: 60, paddingBottom: 3 },
//       }}
//     >
//       <Tab.Screen
//         name="Beranda"
//         component={Beranda}
//         options={{
//           tabBarLabel: ({ focused, color }) => {
//             if (focused == true) {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Bold', fontSize: 12, includeFontPadding: true, color: Colors.primary, paddingTop: 0 }}>Home</Text>
//               )
//             } else {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Medium', fontSize: 12, includeFontPadding: true, color: '#7d7d7d', paddingTop: 0 }}>Home</Text>
//               )
//             }
//           },
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIcon
//               focused={focused}
//               tintColor={color}
//               name="home"
//             />
//           ),
//         }} 
//       />

//       <Tab.Screen
//         name="Produk"
//         component={Produk}
//         options={{
//           tabBarLabel: ({ focused, color }) => {
//             if (focused == true) {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Bold', fontSize: 12, includeFontPadding: true, color: Colors.primary, paddingTop: 0 }}>Produk</Text>
//               )
//             } else {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Medium', fontSize: 12, includeFontPadding: true, color: '#7d7d7d', paddingTop: 0 }}>Produk</Text>
//               )
//             }
//           },
//           tabBarIcon: ({ focused, color, size }) => (
//             <TabBarIcon
//               focused={focused}
//               tintColor={color}
//               name="search"
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Jasa"
//         component={Jasa}
//         options={{
//           tabBarLabel: ({ focused, color }) => {
//             if (focused == true) {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Bold', fontSize: 12, includeFontPadding: true, color: Colors.primary, paddingTop: 0 }}>Jasa</Text>
//               )
//             } else {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Medium', fontSize: 12, includeFontPadding: true, color: '#7d7d7d', paddingTop: 0 }}>Jasa</Text>
//               )
//             }
//           },
//           tabBarIcon: ({ focused, color, size }) => (
//             <TabBarIcon2
//               focused={focused}
//               tintColor={color}
//               name="storefront-outline"
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Akun"
//         component={Akun}
//         options={{
//           tabBarLabel: ({ focused, color }) => {
//             if (focused == true) {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Bold', fontSize: 12, includeFontPadding: true, color: Colors.primary, paddingTop: 0 }}>Akun</Text>
//               )
//             } else {
//               return (
//                 <Text style={{ paddingLeft: 0, fontFamily: 'Poppins-Medium', fontSize: 12, includeFontPadding: true, color: '#7d7d7d', paddingTop: 0 }}>Akun</Text>
//               )
//             }
//           },
//           tabBarIcon: ({ focused, color }) => (
//             <TabBarIcon
//               focused={focused}
//               tintColor={color}
//               name="user"
//             />
//           ),
//         }} />
//     </Tab.Navigator>
//   )
// }

// export default MainNavigator

// -------------------------------------------- WITH BOTTOM NAVIGATOR -----------------------------------------------------------



// -------------------------------------------- WITHOUT BOTTOM NAVIGATOR -----------------------------------------------------------

// modules
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView, StatusBar, Animated } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
/* Screen */
import Beranda from '../Containers/Utama/Beranda'


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
const MainNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <AppearanceProvider>
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: forSlide }}>
          <Stack.Screen name="Beranda" component={Beranda} />
        </Stack.Navigator>
      </SafeAreaView>
    </AppearanceProvider>
  )
}

export default MainNavigator;


// -------------------------------------------- WITHOUT BOTTOM NAVIGATOR -----------------------------------------------------------