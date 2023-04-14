import {Link} from "react-router-dom"
import UserAvatar from "./UserAvatar";
export default function NavBar() {
  return (
    <>
      <header>
        <h1 id="logo">Random Crap:</h1>

        <div className="menu-items">
          <Link to="/">Marketplace</Link>
          <Link to="/sell-item">Sell Item</Link>

          <UserAvatar />
        </div>
      </header>

      <style jsx="true">
        {`
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin: 0 10vw 10vh 10vw;
            padding: 0 5vw 0 5vw;
            height: 75px;
            background-color: #219ebc;
            border-radius: 0 0 10px 10px;
            font-size: 2rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .menu-items {
            display: flex;
            justify-content: space-around;
            gap: 10px;
          }
          #logo {
            font-size: 1.5em;
            font-family: "Comic Papyrus";
          }
        `}
      </style>
    </>
  );
}
