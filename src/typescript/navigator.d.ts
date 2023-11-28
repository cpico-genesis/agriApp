export type AuthStackParamList = {
  LOGIN: undefined
}

export type HomeStackParamList = {
  DRAWER_MAIN: undefined
}

export type MainTabParamList = {
  HOME_STACK: undefined
  AUTH_STACK: undefined
  SETTINGS_STACK: undefined
}

export type ConfigStackParamList = {
  INDEX: undefined
  URL_CONFIG: undefined
  QR_SCAN: {
    onScan: (state: string) => void
  }
}

export type HomeDrawerParamList = {
  DEFINITION_STACK: undefined
  RECORD_STACK: undefined
  REPORT_STACK: undefined
}

export type DefinitionStackParamList = {
  ACTIVITY_DEFINITION_STACK: undefined
  PLANTATION_DEFINITION_STACK: undefined
  MODULES_DEFINITION_STACK: undefined
  EXPENSES_OR_ITEMS_DEFINITION_STACK: undefined
  GROUP_DEFINITION_STACK: undefined
  PRODUCT_DEFINITION_STACK: undefined
  DESTINATION_DEFINITION_STACK: undefined
  EMPLOYEE_DEFINITION_STACK: undefined
  MACHINE_DEFINITION_STACK: undefined
}
