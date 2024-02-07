import React from "react";
import { useAuth } from "../context/auth";

const ProfileContentRight = () => {
  const [auth] = useAuth();
  return (
    <div className="max-w-[1140px] mx-auto items-center justify-center">
      <div className="items-center justify-center mx-auto mt-4 ">
        <h1 className="text-center py-1 font-light text-2xl ">{`Hello ${auth?.user?.name}`}</h1>
        {/* <h1 className="text-center py-1 ">{auth?.user?.email}</h1>
        <h1 className="text-center py-1 ">{auth?.user?.phone}</h1>
        <h1 className="text-center py-1 ">{auth?.user?.address}</h1> */}
      </div>
    </div>
  );
};

export default ProfileContentRight;
