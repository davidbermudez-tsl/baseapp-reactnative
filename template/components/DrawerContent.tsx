import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import {Icon, Text} from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {getCurrentRoute} from '../navigation/RootNavigation'

const links = [
  {
    icon: 'home',
    label: 'Home',
    pathname: 'Home',
  },
  {
    icon: 'cog',
    label: 'Settings',
    pathname: 'Settings',
  },
  {
    icon: 'logout-variant',
    label: 'Logout',
    pathname: 'Logout',
  },
]

function DrawerContent(props: DrawerContentComponentProps) {
  const currentRoute = getCurrentRoute()
  return (
    <DrawerContentScrollView {...props}>
      {links.map((link) => (
        <DrawerItem
          to={link.pathname}
          onPress={() => props.navigation.navigate(link.pathname)}
          icon={({color}) => (
            <Icon as={<MaterialCommunityIcons name={link.icon} />} color={color} />
          )}
          label={({color}) => <Text color={color}>{link.label}</Text>}
          key={link.pathname}
          focused={currentRoute.name === link.pathname}
        />
      ))}
    </DrawerContentScrollView>
  )
}

export default DrawerContent
