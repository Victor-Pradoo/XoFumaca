import "./header.css";
import { BsThreeDotsVertical, BsFillShareFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Header(props) {

  
  return (
    <div id="header-main">
      <h3 className="header-title">{props.title}</h3>
      <div className="header-buttons-div">
        {props.cadastro && <Link href="/conta" style={{ width: "auto", height: "100%"}}><CgProfile className="header-button share" /></Link>}
        <BsFillShareFill className="header-button share" />
        <Link href="/login" style={{ width: "auto", height: "100%" }}>
          <BsThreeDotsVertical className="header-button" />
        </Link>
      </div>
    </div>
  );
}
