export interface ProductDataType {
  id: string | number;
  image: string;
  title: string;
  description?: string;
  category: string;
  rating: {
    count: number;
    rate?: number;
  };
  price: number;
}[];
