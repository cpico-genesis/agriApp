import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks/store'

export const useAuth = () => {
  const { status } = useAppSelector(state => state.auth)

  useEffect(() => {
    console.log(status)
  }, [status])

  return { status }
}
