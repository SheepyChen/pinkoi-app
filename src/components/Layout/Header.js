import { Fragment } from "react";
import NavSearch from "./NavSearch";
import Nav from "./Nav";
import NavCate from "./NavCate";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <div className="header-wrap">
          <div className="header-top">
            <div className="header-left">
              <a className="logo" href="/"></a>
              <div className="header-search">
                <NavSearch />
              </div>
            </div>
            <div className="header-right">
              <Nav onShowCart={props.onShowCart} />
            </div>
          </div>
          <NavCate />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
