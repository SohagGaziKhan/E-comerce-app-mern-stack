import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router";
import axios from "axios";
import Spinner from "../Spinner";

const AdminRoutes = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheak = async () => {
      const res = await axios.get(
        "http://localhost:3030/api/v1/auth/admin-auth"
      );
      if (res.data?.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheak();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};

export default AdminRoutes;
