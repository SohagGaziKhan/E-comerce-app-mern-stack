import React, { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
const AllUserRight = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = user.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(user.length / recordsPerPage);
  const numbers = [...Array(numberOfPages).keys()].slice(1);
  const params = useParams();
  // get all user and admin
  const getAllUser = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/admin/get-all-users"
      );
      setUser(data?.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/admin/delete-user/${params._id}`
      );
      if (data?.success) {
        alert(`${data?.message} `);
      } else {
        alert(data?.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Change page
  const changePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="ml-4 rounded-xl">
        <h1 className="text-center text-[20px] text-[green] font-bold py-8 underline underline-offset-8">
          All User
        </h1>
        <table className="bg-black w-[750px] border ">
          <tr className="bg-[gray] border text-center ">
            <th className="w-[50px] text-center">S/N</th>
            <th className="w-[150px]">Name</th>
            {/* <th className="w-[150px]">Date</th> */}
            <th className="w-[150px]">Email</th>
            <th className="w-[150px]">role</th>
            <th className="w-[200px]">Action</th>
          </tr>
          {records?.map((a, i) => (
            <tr className="bg-[lightgray] border">
              <td className="w-[150px] text-center">{(i = i + 1)}</td>
              <td className="w-[150px] text-center">{a.name}</td>
              <td className="w-[150px] text-center">{a.email}</td>
              <td className="w-[150px] text-center">{a.role}</td>
              <td className="w-[150px] text-center">
                <button className="cursor-pointer ">
                  <FaArrowAltCircleDown
                    size={28}
                    className="ml-2 mr-2 text-[black]"
                  />
                </button>
                <button>
                  <MdDelete
                    size={30}
                    className=" mt-1 text-[red] "
                    onClick={deleteUser}
                  />
                </button>
              </td>
            </tr>
          ))}
        </table>
        <nav>
          <ul className="pagination flex py-20 items-center justify-center gap-5">
            <li className=" bg-[green] py-1.5 px-3 rounded-lg border text-white hover:text-black hover:bg-[white]">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Prev
              </button>
            </li>
            {numbers.map((number) => (
              <li
                key={number}
                className={`${
                  currentPage === number
                    ? "text-[green] border py-1 px-2 rounded-lg"
                    : ""
                }`}
              >
                <button onClick={() => changePage(number)}>{number}</button>
              </li>
            ))}
            <li className=" bg-[green] py-1.5 px-3 rounded-lg border text-white hover:text-black hover:bg-[white]">
              <button
                onClick={nextPage}
                disabled={currentPage === numberOfPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllUserRight;
