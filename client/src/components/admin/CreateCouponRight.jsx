import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const CreateCouponRight = () => {
  return (
    <div>
      <table className="bg-black w-[800px] border h-[30px]">
        <tr className="bg-[gray] border text-center ">
          <th className="w-[220px] text-center">S/N</th>
          <th className="w-[220px]">Name</th>
          <th className="w-[220px]">Discount</th>
          <th className="w-[220px]">New Date</th>
          <th className="w-[220px]">Expiny Date </th>
          <th className="w-[220px]">Action</th>
        </tr>
        <tr className="bg-[lightgray] border  ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Sohag</td>
          <td className="w-[220px] text-center">25% Off</td>
          <td className="w-[220px] text-center">12-01-2024</td>
          <td className="w-[220px] text-center">22-01-2024</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border  ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Sohag</td>
          <td className="w-[220px] text-center">25% Off</td>
          <td className="w-[220px] text-center">12-01-2024</td>
          <td className="w-[220px] text-center">22-01-2024</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border  ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Sohag</td>
          <td className="w-[220px] text-center">25% Off</td>
          <td className="w-[220px] text-center">12-01-2024</td>
          <td className="w-[220px] text-center">22-01-2024</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CreateCouponRight;
