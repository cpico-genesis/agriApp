import { tableSchema } from '@nozbe/watermelondb'

export default tableSchema({
  name: 'actividades',
  columns: [
    { name: 'codigo', type: 'number', isIndexed: true },
    { name: 'actividad', type: 'string' },
    { name: 'empresa', type: 'string' },
    { name: 'observacion', type: 'string', isOptional: true },
    { name: 'habilita', type: 'boolean' }
  ]
})
