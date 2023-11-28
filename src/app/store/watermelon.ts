import { Platform } from 'react-native'
import schema from 'app/models/schema'
import migrations from 'app/models/migrations'

import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: Platform.OS === 'ios',
  dbName: 'genesis_agricola',
  onSetUpError(error) {
    console.log(error)
  }
})

export const database = new Database({
  adapter,
  modelClasses: []
})
