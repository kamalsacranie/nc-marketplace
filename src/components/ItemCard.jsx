export default function ItemCard({
  item_name,
  description,
  img_url,
  price,
  category_name,
}) {
  return (
    <>
      <div className="item">
        <img src={img_url} />

        <span className="category">{category_name}</span>
        <div>
          <h2>{item_name}</h2>
          <div>
            <span>£{price}</span>
          </div>
          <span>{description}</span>
        </div>
      </div>
      <style jsx="true">
        {`
          .item {
            height: 50vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            padding: 5px;
            background-color: #aca5a5;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .item > img {
            height: 70%;
            align-self: center;
          }
          h2 {
            margin: 0;
          }
          .category {
          }
        `}
      </style>
    </>
  );
}
