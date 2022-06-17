import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Galaxylogo } from "../../assets/galaxyStyle.svg";
import '../Navigation/Navigation.styles.scss'

const Navigiation = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <Galaxylogo  className="logo"/>
        </Link>

        <div className="links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/signIn">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigiation;
