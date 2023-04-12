import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function ItemsScreen() {
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
    <div>
      {items.map((item) => (
        <ItemCard key={item.item_id} {...item} />
      ))}
    </div>
  );
}
