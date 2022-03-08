export interface IFood {
  id: string;
  available: boolean;
  price: string;
  image: string;
  name: string;
  description: string;
}

export type FoodData = Pick<IFood, "image" | "description" | "name" | "price">;
