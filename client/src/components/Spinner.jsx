import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
const Spinner = ({ path = "login" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => --prev);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1 className="text-center">redirecting to you in {count} second</h1>
      <span>Loading ...</span>
    </div>
  );
};

export default Spinner;
