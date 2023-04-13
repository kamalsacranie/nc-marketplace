import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/Items")
      .then(({ data: { items } }) => {
        setItems(items);
        setLoading(false);
      });
  }, []);

  

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="items-container">
        {items.map((item) => (
          <ItemCard key={item.item_id} {...item} />
        ))}
      </div>

      <style jsx>{`
        .items-container{
          display: grid;
          grid-template-columns: repeat(4, 1fr);   
          gap: 20px;
          width: 90vw;
          margin: auto;
        }
      `}</style>
    </>
  );
}
