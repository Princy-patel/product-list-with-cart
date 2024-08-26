import { data } from "../../data/data";
import MenuList from "./MenuList";
import { IDataWithQuantity } from "../@types/data";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

function Menu() {
  const [searchItem, setSearchItems] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<IDataWithQuantity[]>([]);

  const dataWithQuantity: IDataWithQuantity[] = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        quantity: 1,
      })),
    [data]
  );

  useEffect(() => {
    const findItem = dataWithQuantity.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredItems(findItem);
  }, [dataWithQuantity, searchItem]);

  const handleSearchItems = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchItems(e.target.value);
  };

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 w-[70%]">
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
            onChange={handleSearchItems}
          />
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.length === 0 ? (
          <p className="col-span-full text-center">No items found</p>
        ) : (
          filteredItems.map((dataItem: IDataWithQuantity, index: number) => (
            <MenuList key={index} data={dataItem} />
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;
