export type IProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export type ICategory = {
  id: string;
  name: string;
};

export type IUser = {
  id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
