import { useUser } from "@/lib/firebase/useUser";
import Select from "@/components/select/select";

export default function Profile() {
  const { user, logout } = useUser();
  if (!user) return <div>loading...</div>;
  return (
    <>
      <div className="flex flex-row h-full">
        <div className="h-screen grid grid-rows-3 place-items-center border-gray-400 border-r drop-shadow-md shadow-gray shadow-2xl">
          <div className="p-10">
            <h1 className="text-5xl font-bold text-center align-middle ">
              Profile
            </h1>
            <div className="flex align-middle place-items-center mt-10">
              <img
                src={user.profilePic}
                className="rounded-full w-8 h-8 mr-2"
              />
              <h1 className="text-2xl font-bold  ">{user.name}</h1>
            </div>
          </div>

          <p className="text-sm text-gray-500">Content.</p>
          <p>Footer</p>
        </div>

        <div className="h-screen grid grid-rows-3 place-items-center w-full">
          <div className="text-6xl font-bold mb-20">Notebooks</div>
          <div className="flex mb-96 ">
            <label className="block mr-2">
              <span className="text-gray-700">Name</span>
              <input
                type="search"
                placeholder="Search"
                className="rounded-lg block"
              />
            </label>
            <label className="block mr-2">
              <span className="text-gray-700 ">Sort</span>
              <select className="block w-full rounded-lg">
                <option>Date created</option>
                <option>Date modified</option>
                <option>Alphabetically</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Sort order</span>
              <select className="block w-full rounded-lg  ">
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </label>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-20 h-10 mt-6 ml-20">
              New
            </button>
          </div>
        </div>
        <div>03</div>
      </div>
    </>
  );
}
