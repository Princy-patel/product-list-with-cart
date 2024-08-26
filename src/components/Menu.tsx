import { data } from "../../data/data";
import MenuList from "./MenuList";
import { IDataWithQuantity } from "../@types/data";

function Menu() {
  const dataWithQuantity: IDataWithQuantity[] = data.map((item) => ({
    ...item,
    quantity: 1,
  }));

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center my-2">
        <h1 className="text-3xl font-bold sm:text-4xl">Desserts</h1>
        <form className="form relative">
          <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-gray-700"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Search..."
            required
            type="text"
          />

          <button className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-2 text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataWithQuantity.map((dataItem: IDataWithQuantity, index: number) => (
          <MenuList key={index} data={dataItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
