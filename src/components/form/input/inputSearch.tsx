import { FaSearch } from 'react-icons/fa';

export const InputSearch = () => {
  return (
    <div className="bg-zinc-200 rounded-full p-3">
      <form className="flex flex-row justify-between items-center">
        <input
          className="text-sm bg-zinc-200 mx-2 focus:outline-none"
          type="text"
        />
        <button type="submit">
          <FaSearch className="cursor-pointer" />
        </button>
      </form>
    </div>
  );
};
