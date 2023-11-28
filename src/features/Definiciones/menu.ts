import strings from 'app/constants/strings'
const activityIcon = require('../../assets/icons/activityIcon.png')
const plantationIcon = require('../../assets/icons/plantationIcon.png')
const moduleIcon = require('../../assets/icons/moduleIcon.png')
const expenseIcon = require('../../assets/icons/expenseIcon.png')
const groupIcon = require('../../assets/icons/groupIcon.png')
const productIcon = require('../../assets/icons/productIcon.png')
const destinationIcon = require('../../assets/icons/destinationIcon.png')
const empleadosIcon = require('../../assets/icons/empleadosIcon.png')
const excavadora = require('../../assets/icons/excavadora.png')

export const Menu = [
  { name: strings.ACTIVITIES, icon: activityIcon },
  { name: strings.PLANTATION, icon: plantationIcon },
  { name: strings.MODULES, icon: moduleIcon },
  { name: strings.GASTOS_RUBROS, icon: expenseIcon },
  { name: strings.GROUP, icon: groupIcon },
  { name: strings.PRODUCTS, icon: productIcon },
  { name: strings.DESTINATIONS, icon: destinationIcon },
  { name: strings.EMPLOYEES, icon: empleadosIcon },
  { name: strings.MACHINIES, icon: excavadora }
]
