import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../redux/features/create.slice";
import { useState } from "react";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    profession: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setFormData(user);
  };

  const handleSave = (id) => {
    if (!formData.firstName || !formData.lastName || !formData.age || !formData.profession || !formData.description) {
      alert("Barcha maydonlarni to'ldiring");
      return;
    }


    dispatch(updateUser({ id, ...formData }));
    setEditId(null);
  };

  return (
    <ul className="space-y-4">
      {users?.map((user) => (
        <li key={user.id} className="flex flex-col max-w-[448px] mx-auto dark:bg-gray-800 p-4 rounded text-white">
          {editId === user.id ? (
            <>
              <section className=" flex flex-col items-center justify-center">
                <div className="w-full p-8 space-y-8 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    Update users
                  </h1>
                  <form className="space-y-6 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary-600 focus:border-primary-600" placeholder="First Name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary-600 focus:border-primary-600" placeholder="Last Name" required />
                    </div>
                    <div>
                      <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                      <input type="number" name="age" value={formData.age} onChange={handleChange} className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary-600 focus:border-primary-600" placeholder="Age" required />
                    </div>
                    <div>
                      <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profession</label>
                      <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary-600 focus:border-primary-600" placeholder="Profession" required />
                    </div>
                    <div>
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <textarea name="description" value={formData.description} onChange={handleChange} className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-primary-600 focus:border-primary-600" placeholder="Description" required />
                    </div>
                  </form>
                </div>
              </section>
            </>
          ) : (
            <>
              <div>
                <p className="text-white text-[20px] font-semibold">Firtname: {user.firstName}</p>
                <p className="text-white text-[20px] font-semibold">Lastname: {user.lastName}</p>
                <p className="text-white text-[20px] font-semibold">Age: {user.age}</p>
                <p className="text-white text-[20px] font-semibold">Profession: {user.profession}</p>
                <p className="text-white text-[20px] font-semibold">Description: {user.description}</p>
              </div>
            </>
          )}
          <div className="space-x-2 mt-3">
            {editId === user.id ? (
              <button
                onClick={() => handleSave(user.id)}
                className="py-2.5 px-7 bg-blue-600 rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(user)}
                className="py-2.5 px-7 bg-blue-600 rounded"
              >
                Update
              </button>
            )}
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="py-2.5 px-7 bg-red-600 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
