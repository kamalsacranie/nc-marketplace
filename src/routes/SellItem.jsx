import { useEffect, useState } from "react";
import * as api from "../api";
import ItemCard from "../components/ItemCard";

export const FormInput = ({
  name,
  label,
  type,
  placeholder,
  value,
  setterCallback,
}) => {
  return (
    <div style={{ backgroundColor: "#219ebc" }}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setterCallback(e.target.value);
        }}
      />
    </div>
  );
};

export default function SellItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [itemCategory, setItemCategory] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.getCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    api
      .postItem({
        item_name: name,
        img_url: imageURL,
        price,
        description,
        category_name: itemCategory,
      })
      .then(({data: {item: {item_id}}}) => (item_id));
    // redirect to newly created item
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleForm}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <FormInput
            name="name"
            label="Name"
            type="text"
            placeholder="Item name"
            setterCallback={setName}
            value={name}
          />
          <FormInput
            name="description"
            label="Item description"
            type="text"
            placeholder="Description"
            setterCallback={setDescription}
            value={description}
          />
          <FormInput
            name="url"
            label="Item display image"
            type="url"
            placeholder="https://..."
            setterCallback={setImageURL}
            value={imageURL}
          />
          <FormInput
            name="price"
            label="Item price in pence"
            type="number"
            placeholder="Price"
            setterCallback={setPrice}
            value={price}
          />
          <select
            name="category"
            value={itemCategory}
            onChange={(e) => {
              setItemCategory(e.target.value);
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
          <button type="submit" value="">
            Create item
          </button>
        </form>
        <ItemCard
          item_name={name}
          description={description}
          img_url={imageURL}
          price={price}
          category_name={itemCategory}
        />
      </div>

      <style jsx="true"></style>
    </>
  );
}
