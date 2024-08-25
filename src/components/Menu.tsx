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
      <h1 className="text-3xl font-bold mb-4 sm:text-4xl">Desserts</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataWithQuantity.map((dataItem: IDataWithQuantity, index: number) => (
          <MenuList key={index} data={dataItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
