import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerHeaderProps
} from '@react-navigation/drawer'
import KEYS from 'app/constants/home-drawer-keys-navigation'
import DefinitionStack from './definition-stack'

import {
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Platform
} from 'react-native'
import { styles } from 'theme/drawer-theme'
import { HomeDrawerParamList } from 'typescript/navigator'
import { Logo } from 'app/components/Logo'

import strings from 'app/constants/strings'

const Drawer = createDrawerNavigator<HomeDrawerParamList>()

export const MenuLateral = () => {
  const { width } = useWindowDimensions()

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: width >= 768 ? 'permanent' : 'front',
          headerTitle: strings.APP_NAME
        }}
        drawerContent={props => <MenuInterno {...props} />}>
        <Drawer.Screen
          name={KEYS.DEFINITION_STACK}
          component={DefinitionStack}
        />
        <Drawer.Screen name={KEYS.RECORD_STACK} component={DefinitionStack} />
        <Drawer.Screen name={KEYS.REPORT_STACK} component={DefinitionStack} />
      </Drawer.Navigator>
    </View>
  )
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Logo />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate(KEYS.DEFINITION_STACK)}>
          <Text style={styles.menuTexto}>{strings.DEFINITION}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate(KEYS.RECORD_STACK)}>
          <Text style={styles.menuTexto}>{strings.RECORD}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate(KEYS.REPORT_STACK)}>
          <Text style={styles.menuTexto}>{strings.REPORT}</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
