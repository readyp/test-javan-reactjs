interface ItemInterface {
  id: number;
  name: string;
  image: string;
  tag: string[];
  color: string;
  size: "s" | "m" | "l" | "xl";
  price: number;
  count: number;
}

export default ItemInterface;
