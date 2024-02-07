import React from "react";
// import Cart from "./Cart";
import Main from "./Main";
// import Pagenation from "./Pagenation";
const Products = () => {
  return (
    <>
      <div>
        <div className=" max-w-[1140px] mx-auto gap-4">
          <div>
            <Main />
          </div>
        </div>
        <div>{/* <Pagenation /> */}</div>
      </div>
    </>
  );
};

export default Products;
