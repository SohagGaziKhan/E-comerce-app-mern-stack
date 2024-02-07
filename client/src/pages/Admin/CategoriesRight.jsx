import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import CategoryFrom from "../../components/admin/CategoryFrom";
import { Modal } from "antd";

const CategoriesRight = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // get all category fuction
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/category/gets-category"
      );
      if (data?.success) {
        setCategories(data?.categroy);
      }
    } catch (error) {
      console.log(error);
      alert(`${error?.message}`);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  // create category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/category/create-category",
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
      alert("somthing went wrong in input form");
    }
  };

  // update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:3030/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        alert(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Somtihing went wrong");
    }
  };

  // const update
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/category/delete-category/${id}`
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
        <div className="w-[800px] h-full border rounded-lg items-center shadow-2xl">
          <h1 className="text-center cursor-pointer text-[green] underline underline-offset-8 font-semibold text-[20px] py-4">
            Create Categories
          </h1>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold  cursor-pointer">
              Create Category :
            </span>
            <CategoryFrom
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div>

          <h1 className="text-center text-[green] underline underline-offset-8 py-8 cursor-pointer font-semibold text-[20px] ">
            All Categories
          </h1>
          <div>
            <table className="bg-black w-[800px] border h-[30px]">
              <tr className="bg-[gray] border text-center ">
                <th className="w-[220px]">S/N</th>
                <th className="w-[220px]">Name</th>
                <th className="w-[220px]">Action</th>
              </tr>
              {categories.map((c, i) => (
                <tr className="bg-[lightgray] border  " key={c._id}>
                  <td className="w-[220px] text-center ">{(i = i + 1)}</td>
                  <td className="w-[220px] text-center ">{c.name}</td>
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
          <td className="w-[220px] text-center font-bold">1.</td>
          <td className="w-[220px] text-center">Laptop</td>
          <td className="w-[220px] text-center ">
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
          <CategoryFrom
            value={updatedName}
            setValue={setUpdatedName}
            handleSubmit={handleUpdate}
          />
        </Modal>
      </div>
    </>
  );
};

export default CategoriesRight;
