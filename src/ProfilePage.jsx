import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <h1>Profile page!</h1>
      <p>So, how are you?</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
