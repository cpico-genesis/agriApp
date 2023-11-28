import { Keyboard } from 'react-native'

import {
  setCorreo,
  setContrasena,
  setEmpresa,
  verifyCorreo
} from 'app/store/auth/slice'
import { useAppDispatch, useAppSelector } from 'app/hooks/store'

interface LoginPayload {
  correo: string
  contrasena: string
}

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const { correo, contrasena, empresa } = useAppSelector(state => state.auth)

  const onChangeCorreo = (correo: string) => dispatch(setCorreo(correo))
  const onChangeContrasena = (contrasena: string) =>
    dispatch(setContrasena(contrasena))
  const onChangeEmpresa = (empresa: string) => dispatch(setEmpresa(empresa))

  const onLogin = (props: LoginPayload) => {
    Keyboard.dismiss()
    dispatch(setCorreo(props.correo))
  }

  const handleCorreo = () => {
    dispatch(verifyCorreo())
  }

  return {
    onChangeCorreo,
    onChangeContrasena,
    onChangeEmpresa,
    handleCorreo,
    correo,
    contrasena,
    empresa
  }
}

export default useLogin
