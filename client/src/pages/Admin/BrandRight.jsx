import React, { useEffect, useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import AdminBrandFrom from "../../components/admin/AdminBrandFrom";
import axios from "axios";
import { Modal } from "antd";

const BrandRight = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // get all category fuction
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/brand/gets-brand"
      );
      if (data?.success) {
        setCategories(data?.brand);
      }
    } catch (error) {
      console.log(error);
      alert(`${error?.message}`);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  // create Brand
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/brand/create-brand",
        { name }
      );
      if (data?.success) {
        alert(`${name} is Created`);
        getAllCategory();
      } else {
        alert.error(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something Went Worng In Create Brand");
    }
  };

  // update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:3030/api/v1/brand/update-brand/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        alert(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        alert(data?.message);
      }
    } catch (error) {
      alert("Somtihing went wrong");
    }
  };

  // const update
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/brand/delete-brand/${id}`
      );
      if (data.success) {
        alert(`category is deleted`);
        getAllCategory();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Somtihing went wrong");
    }
  };
  return (
    <>
      <div className="max-w-[1140px] mx-auto py-20 justify-center items-center">
        <div className="w-[800px] h-full rounded-lg border items-center shadow-2xl">
          <h1 className="text-center cursor-pointer text-[green] underline underline-offset-8 font-semibold text-[20px] py-4">
            Create Brands
          </h1>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Create Brand :
            </span>
            {/* <input
              type="text"
              placeholder="Enter Brand Name"
              required
              className="input  w-[350px] border rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            /> */}

            <AdminBrandFrom
              handleSubmits={handleSubmit}
              values={name}
              setValues={setName}
            />
          </div>

          <h1 className="text-center cursor-pointer text-[green]   font-semibold text-[20px] py-8 underline underline-offset-8">
            All Brands
          </h1>
          <div>
            <table className="bg-black w-[800px] border h-[30px]">
              <tr className="bg-[gray] border text-center ">
                <th className="w-[220px]">S/N</th>
                <th className="w-[220px]">Name</th>
                <th className="w-[220px]">Action</th>
              </tr>
              {categories.map((c, i) => (
                <tr className="bg-[lightgray] border  ">
                  <td className="w-[220px] text-center " key={c._id}>
                    {(i = i + 1)}
                  </td>
                  <td className="w-[220px] text-center " key={c._id}>
                    {c.name}
                  </td>
                  <td className="w-[220px] text-center  ">
                    <button className="cursor-pointer ">
                      <HiPencilSquare
                        size={30}
                        className="mr-4 text-[green] "
                        onClick={() => {
                          setVisible(true);
                          setUpdatedName(c.name);
                          setSelected(c);
                        }}
                      />
                    </button>
                    <button className="cursor-pointer ">
                      <MdDelete
                        size={30}
                        className="ml-2 text-[red]"
                        onClick={() => {
                          handleDelete(c._id);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr className="bg-[lightgray] border  ">
                <td className="w-[220px] text-center ">apple</td>
                <td className="w-[220px] text-center  ">
                  <button className="cursor-pointer ">
                    <HiPencilSquare size={30} className="mr-4 text-[green] " />
                  </button>
                  <button className="cursor-pointer ">
                    <MdDelete size={30} className="ml-2 text-[red]" />
                  </button>
                </td>
              </tr> */}
            </table>
          </div>
        </div>
        <Modal
          onCancel={() => setVisible(false)}
          footer={null}
          visible={visible}
        >
          <AdminBrandFrom
            handleSubmits={handleUpdate}
            values={updatedName}
            setValues={setUpdatedName}
          />
        </Modal>
      </div>
    </>
  );
};

export default BrandRight;
