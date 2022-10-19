import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Galaxylogo } from "../../assets/galaxyStyle.svg";
import '../Navigation/Navigation.styles.scss'
import { UserContext } from "../../components/context/user.context";
import { signOutUser } from "../../utils/firebase/Firebase.utils";

const Navigiation = () => {
  const {currentUser,setCurrentUser } = useContext(UserContext)
  const singOutHandler = async () =>{
 setCurrentUser(null);

  }
  // console.log(currentUser);
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
          {currentUser ? (<span className="nav-link" onClick={singOutHandler}>SIGN OUT</span>): (  <Link className="nav-link" to="/auth">
            Sign In
          </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigiation;
