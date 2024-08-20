import { data } from "../../data/data";
import MenuList from "./MenuList";
import { IData } from "../@types/data";

function Menu() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-4xl">Desserts</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((dataItem: IData, index: number) => (
          <MenuList key={index} data={dataItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
