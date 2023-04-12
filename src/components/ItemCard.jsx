export default function ItemCard({
  item_id,
  item_name,
  description,
  img_url,
  price,
  category_name,
}) {
  return (
    <div>
      {`${item_name}`}
      <img src={img_url} alt="" />
    </div>
  );
}
