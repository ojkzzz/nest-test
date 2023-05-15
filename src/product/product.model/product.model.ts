export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  adventages: string;
  disadvantages: string;
  categories: string[];
  tags: string;
  characteristics: Record<string, string>;
}
