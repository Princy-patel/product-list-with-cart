export interface IData {
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

export interface IMenuListProps{
    data: IData
}
