import React from 'react'
import { Image, View } from 'react-native'

export const DrawerAvatar = () => {
  return (
    <View
      style={{
        alignItems: 'center'
      }}>
      <Image
        source={require('assets/avatar-placeholder.gif')}
        style={{
          width: 120,
          height: 120,
          resizeMode: 'contain',
          alignSelf: 'center'
        }}
      />
    </View>
  )
}
