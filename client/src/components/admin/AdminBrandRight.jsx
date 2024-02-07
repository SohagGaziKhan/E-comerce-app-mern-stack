import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const AdminBrandRight = () => {
  return (
    <div>
      <table className="bg-black w-[800px] border h-[30px]">
        <tr className="bg-[gray] border text-center ">
          <th className="w-[220px] text-center">S/N</th>
          <th className="w-[220px]">Name</th>
          <th className="w-[220px]">Action</th>
        </tr>
        <tr className="bg-[lightgray] border  ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Apple</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Samsung</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Lenovo</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Asus</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Dell</td>
          <td className="w-[220px] text-center ">
            <button className="cursor-pointer ">
              <HiPencilSquare size={30} className="mr-4 text-[green] " />
            </button>
            <button className="cursor-pointer ">
              <MdDelete size={30} className="ml-2 text-[red]" />
            </button>
          </td>
        </tr>
        <tr className="bg-[lightgray] border ">
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Apple</td>
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

export default AdminBrandRight;
