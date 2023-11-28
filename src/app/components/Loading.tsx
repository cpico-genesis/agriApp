import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import colors from 'app/constants/colors'

export const LoadingComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ActivityIndicator size={50} color={colors.primary} />
    </View>
  )
}
