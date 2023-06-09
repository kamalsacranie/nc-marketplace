import { useState, useEffect } from "react";

import * as api from "../api.js";

export default function CategoriesRefinement({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [currentlySelected, setCurrentlySelected] = useState("");

  useEffect(() => {
    api.getCategories().then((data) => {
      console.log("Fetched", data);
      setCategories(data);
    });
  }, []);
  return (
    <>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          value={currentlySelected}
          onChange={(event) => {
            // console.log(event.target.value)
            setCurrentlySelected(event.target.value);
          }}
        >
          <option value="">-----</option>
          {categories.map(({ category_name }) => {
            return (
              <option key={category_name} value={category_name}>
                {category_name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSelectedCategory(currentlySelected);
        }}
      >
        Refine
      </button>

      <style jsx="true">{`
        label {
          display: block;
        }
      `}</style>
    </>
  );
}
