import { FaSearch } from "react-icons/fa";

export const InputSearch = () => {
  return (
    <div className="p-2 border border-zinc-600 rounded-lg text-white">
      <form className="flex flex-row justify-between items-center">
        <button type="submit">
          <FaSearch className="cursor-pointer" />
        </button>
        <input
          className="w-full ml-2 border-0 bg-transparent outline-0"
          type="text"
        />
      </form>
    </div>
  );
};
