import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Auth {
  correo: string
  contrasena: string
  empresa: string
  status: 'checking' | 'authenticated' | 'not-authenticated'
  step: number
}

const initialState = {
  correo: '',
  contrasena: '',
  empresa: '',
  status: 'checking',
  step: 0
} as Auth

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCorreo: (state, action: PayloadAction<string>) => {
      state.correo = action.payload
    },
    setContrasena: (state, action: PayloadAction<string>) => {
      state.contrasena = action.payload
    },
    setEmpresa: (state, action: PayloadAction<string>) => {
      state.empresa = action.payload
    },
    login: (state, action: PayloadAction<Auth>) => {
      state.correo = action.payload.correo
      state.contrasena = action.payload.contrasena
      state.empresa = action.payload.empresa
      state.status = 'authenticated'
    },
    setStatus: (
      state,
      action: PayloadAction<'checking' | 'authenticated' | 'not-authenticated'>
    ) => {
      console.log({ action })
      state.status = action.payload
    },
    verifyCorreo: state => {
      state.step = 1
    },
    verifyContrasena: state => {
      state.step = 2
    }
  }
})

export default authSlice.reducer

export const {
  setCorreo,
  setContrasena,
  setEmpresa,
  login,
  verifyCorreo,
  verifyContrasena,
  setStatus
} = authSlice.actions
