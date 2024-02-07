import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  // default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const paresData = JSON.parse(data);
      setAuth({
        ...auth,
        user: paresData.user,
        token: paresData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
// costom hook
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
