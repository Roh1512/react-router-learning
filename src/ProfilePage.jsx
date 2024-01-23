import { Link } from "react-router-dom"; //To render a child component alongside the parent
import { useParams } from "react-router-dom"; //To use dynmic segments
/* import { Outlet } from "react-router-dom"; //For nested routes */
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinch";
import Popeye from "./Popeye";
const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Profile page!</h1>
      <p>So, how are you?</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/profile/spinach">Spinach</Link>
          </li>
          <li>
            <Link to="/profile/popeye">Popeye</Link>
          </li>
        </ul>
      </nav>

      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}

      {/* <Outlet /> */}
      {/* Nested Routes --> Outlet component gets replaced with the corresponding child component when their paths are visited. */}
    </div>
  );
};

export default Profile;
