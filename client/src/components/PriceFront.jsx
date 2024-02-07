import React, { useState } from "react";
import { Radio } from "antd";
import { Prices } from "./Prices";
const PriceFront = () => {
  const [radio, setRadio] = useState([]);
  return (
    <div className="max-w-[1140px] mx-auto items-center ">
      <div className="">
        {JSON.stringify(radio, null, 4)}
        <h1 className="text-center cursor-pointer text-[20px] font-bold">
          Find Your Products By Price{" "}
        </h1>
        <div className="cursor-pointer ml-2 py-2">
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default PriceFront;
