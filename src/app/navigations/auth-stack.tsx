import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'features/Auth/screens/login-screen'
import { AuthStackParamList } from 'typescript/navigator'

const AuthStack = createStackNavigator<AuthStackParamList>()

export default function AuthStackContainer() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <AuthStack.Screen name="LOGIN" component={LoginScreen} />
    </AuthStack.Navigator>
  )
}
