import { createStackNavigator } from '@react-navigation/stack'

import KEY_STACK from 'app/constants/definitions-keys-navigation'
import { DefinitionStackParamList } from 'typescript/navigator'
import DefinicionesScreen from 'features/Definiciones'

const DefinitionStack = createStackNavigator<DefinitionStackParamList>()

export default function DefinitionStackContainer() {
  return (
    <DefinitionStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <DefinitionStack.Screen
        name={KEY_STACK.ACTIVITY_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.PLANTATION_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.MODULES_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.EXPENSES_OR_ITEMS_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.GROUP_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.PRODUCT_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.DESTINATION_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.EMPLOYEE_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
      <DefinitionStack.Screen
        name={KEY_STACK.MACHINE_DEFINITION_STACK}
        component={DefinicionesScreen}
      />
    </DefinitionStack.Navigator>
  )
}
