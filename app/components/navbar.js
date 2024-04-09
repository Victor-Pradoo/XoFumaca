"use client";

import "./navbar.css";

import Link from "next/link";
import { BsAwardFill, BsClockFill, BsInfoLg } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div id="navbar-main">
      <Link
        href="/info"
        className={"navbar-button" + (pathname == "/info" ? " active" : "")}
      >
        <BsInfoLg className="navbar-button-icon" />
        <span className="navbar-button-label">Info</span>
      </Link>
      <Link
        href="/tracker"
        className={"navbar-button" + (pathname == "/tracker" ? " active" : "")}
      >
        <BsClockFill className="navbar-button-icon" />
        <span className="navbar-button-label">Tracker</span>
      </Link>
      <Link
        href="/metas"
        className={"navbar-button" + (pathname == "/metas" ? " active" : "")}
      >
        <BsAwardFill className="navbar-button-icon" />
        <span className="navbar-button-label">Metas</span>
      </Link>
    </div>
  );
}
