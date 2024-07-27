export interface IData {
  id: number;
  image: {
    thumbnail?: string;
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  name: string;
  category: string;
  price: number;
}

export interface IMenuListProps {
  data: IData;
}
