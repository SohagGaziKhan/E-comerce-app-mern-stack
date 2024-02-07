import React, { useEffect, useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminProductsRight = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(numberOfPages).keys()].slice(1);
  // const [id, setId] = useState("");

  // get all products
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/product/get-all-product"
      );
      setProducts(data?.product || []);
    } catch (error) {
      console.log(error);
      alert("Something Went Worng in All Products");
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  // delete product
  // const handleDelete = async (id) => {
  //   try {
  //     const confirmed = window.confirm(
  //       "Are you sure you want to delete this product?"
  //     );
  //     if (!confirmed) return;

  //     const { data } = await axios.delete(
  //       `http://localhost:3030/api/v1/product/delete-product/${id}`
  //     );

  //     alert(data?.message);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Something went wrong in deleting the product");
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/product/delete-product/${id}`
      );
      if (data?.success) {
        alert(`category is deleted`);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong in deleting the product");
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
        <h1 className="text-center text-[green] text-[20px] font-bold py-8 underline underline-offset-8">
          All Products
        </h1>
        <table className="bg-black w-[750px] border rounded-xl h-[30px]">
          <thead>
            <tr className="bg-[gray] border text-center ">
              <th className="w-[100px]">S/N</th>
              <th className="w-[100px]">Name</th>

              <th className="w-[80px]">Price</th>
              <th className="w-[80px]">Quantity</th>
              {/* <th className="w-[100px]">Value</th> */}
              <th className="w-[200px]">Action</th>
            </tr>
          </thead>

          {records?.map((item, i) => (
            <>
              <tbody key={item._id}>
                <tr className="bg-[lightgray] border cursor-pointer  ">
                  <td className="w-[100px] text-center">{(i = i + 1)}</td>
                  <td className="w-[100px] text-center">{item.name}</td>

                  {/* <td className="w-[100px] text-center">{item.category}</td> */}
                  {/* <td className="w-[100px] text-center">
                    {item.discountPrice}
                  </td> */}
                  <td className="w-[100px] text-center">
                    {item.productQuantity}
                  </td>
                  <td className="w-[100px] text-center">{item.regularPrice}</td>
                  <td className="w-[200px] text-center ">
                    <button className="cursor-pointer ">
                      <Link to={`/dashboard/admin/update-product/${item.slug}`}>
                        <HiPencilSquare
                          size={30}
                          className="mr-4 text-[green] "
                        />
                      </Link>{" "}
                    </button>
                    <button className="cursor-pointer ">
                      <MdDelete
                        size={30}
                        className="ml-2 text-[red]"
                        onClick={handleDelete}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
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

export default AdminProductsRight;
