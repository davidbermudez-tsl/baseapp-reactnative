import * as React from 'react'
import {TouchableOpacity, Platform} from 'react-native'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import {Center, HStack, Icon, Text} from 'native-base'

const routes = [
  {
    pathname: 'Home',
    title: 'Home',
    icon: <AntDesignIcons name="home" />,
  },
  {
    pathname: 'User',
    title: 'User',
    icon: <AntDesignIcons name="user" />,
  },
  {
    pathname: 'Settings',
    title: 'Settings',
    icon: <AntDesignIcons name="setting" />,
  },
]

const TabItem = ({color, route}) => {
  return (
    <Center>
      <Icon as={route.icon} color={color} size={22} />
      <Text color={color}>{route.title}</Text>
    </Center>
  )
}

const BottomTabs = ({state, navigation}: BottomTabBarProps) => {
  const currentRoute = state.routes[state.index]
  return (
    <HStack
      bgColor={'contrastThreshold'}
      justifyContent={'space-between'}
      alignItems="center"
      px={6}
      pt={3}
      pb={Platform.OS === 'android' ? 4 : 6}
    >
      {routes.map((route) => {
        const active = currentRoute.name === route.pathname
        return (
          <TouchableOpacity
            key={route.pathname}
            onPress={() => navigation.navigate(route.pathname)}
            delayPressIn={0}
            accessibilityRole="button"
            accessibilityState={{selected: active}}
          >
            <TabItem color={active ? '#308DCC' : '#A7A7A7'} route={route} />
          </TouchableOpacity>
        )
      })}
    </HStack>
  )
}

export default BottomTabs
