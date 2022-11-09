import {StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BottomTabs from './components/BottomTabs'
import DrawerContent from './components/DrawerContent'
import Home from './screens/Home'
import Login from './screens/Login'
import {useAppSelector} from './redux/hooks'
import {DrawerParamList, RootStackParamList, TabParamList} from './navigation/types'
import Logout from './screens/Logout'
import Settings from './screens/Settings'
import User from './screens/User'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<DrawerParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

const Router = () => {
  const {isLoggedIn} = useAppSelector(({auth}) => ({...auth}))

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name={'Home'}>
            {() => (
              <Drawer.Navigator
                backBehavior={'history'}
                screenOptions={{
                  swipeEnabled: true,
                  drawerStyle: styles.drawer,
                  drawerType: 'front',
                  headerShown: false,
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
              >
                <Drawer.Screen name={'Dashboard'}>
                  {() => (
                    <Tab.Navigator
                      tabBar={(props) => <BottomTabs {...props} />}
                      backBehavior={'history'}
                      screenOptions={{headerShown: false}}
                    >
                      <Tab.Screen name={'Home'} component={Home} />
                      <Tab.Screen name={'User'} component={User} />
                      <Tab.Screen name={'Settings'} component={Settings} />
                    </Tab.Navigator>
                  )}
                </Drawer.Screen>
              </Drawer.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name={'Logout'} component={Logout} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  drawer: {
    width: 304,
    borderTopRightRadius: 48,
    borderBottomRightRadius: 48,
    overflow: 'hidden',
  },
})
export default Router
