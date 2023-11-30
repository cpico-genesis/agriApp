import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks/store";
import { getToken } from "services/asyncStorageService";
import { login, setStatus } from "app/store/auth/slice";

export const useAuth = () => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const getAuthStatus = async () => {
    const auth = await getToken();
    if (auth) dispatch(login(auth));
    dispatch(setStatus("not-authenticated"));
  };

  useEffect(() => {
    getAuthStatus();
  }, []);

  return { status };
};
