import { createStackNavigator } from '@react-navigation/stack'

import { HomeStackParamList } from 'typescript/navigator'
import KEY_STACK from 'app/constants/home-keys-navigation'
import { MenuLateral } from 'app/navigations/home-drawer'

const HomeStack = createStackNavigator<HomeStackParamList>()

export default function AuthStackContainer() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        },
        headerShown: false
      }}>
      <HomeStack.Screen name={KEY_STACK.DRAWER_MAIN} component={MenuLateral} />
    </HomeStack.Navigator>
  )
}
