import { Link } from "react-router-dom";
import Users from "../users/Users";

const Home = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto my-10">
        <h1 className="text-4xl font-bold text-center mb-6">Users</h1>
        <div className="flex justify-center mb-4">
          <Link to="/create" className="py-2.5 px-8 bg-emerald-400 text-white rounded-[5px]">
            Create User
          </Link>
        </div>
        <Users />
      </div>


    </>
  );
};

export default Home;
