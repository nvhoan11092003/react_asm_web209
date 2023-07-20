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
  processingInstructions: {
    type: string;
  };

  // hướng dẫn bảo quản
  storageInstructions: {
    type: string;
  };

  description: string;
  categoryId: string;
};

export type ICategory = {
  _id?: string;
  name: string;
};

export type IUser = {
  id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
