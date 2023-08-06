export type IProduct = {
  _id?: string;
  name: string;
  price: number;
  imgUrl: string[];
  // giá đã giảm
  originPrice: {
    type: number;
  };
  // hướng dẫn chế biến
  processingInstructions: string;
  // hướng dẫn bảo quản
  storageInstructions: string;
  description: string;
  categoryId: {
    _id: string;
    name: string;
  };
};

export type ICategory = {
  _id?: string;
  name: string;
};

export type IUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

export type ICart = {
  _id?: string;
  userId: string;
  carts: [
    {
      items: {
        productId: {
          type: string;
        };
        quantity: {
          type: Number;
        };
      };
    }
  ];
};
export interface IresponUser {
  accessToken: string;
  checkUser: {
    createdAt: string;
    email: string;
    role: string;
    updatedAt: string;
    username: string;
    _id: string;
    message: string
  }
};

export interface userlogin {
  accessToken: string,
  email: string,
  role: string,
  username: string,
  _id: string,
}

