import React from "react";
import { useSearch } from "../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const InputSearch = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  //   handle submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { data } = await axios.get(
  //         `http://localhost:3030/api/v1/product/search/${values.keyword}`
  //       );
  //       setValues({ ...values, results: data });
  //       navigate("/search");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="SearchInput">
        <form onSubmit={handleSubmit} className="gap-2">
          <input
            className="outline-none border px-3 py-1 bg-[#cbeccb] transform rounded-lg"
            type="text"
            placeholder="Search your love one"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />

          <button
            type="submit"
            className="btnSubmit border py-1 ml-2 rounded-lg px-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
