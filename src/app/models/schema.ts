import { appSchema } from '@nozbe/watermelondb'
import { tables } from './schemas'

export default appSchema({
  version: 1,
  tables
})
