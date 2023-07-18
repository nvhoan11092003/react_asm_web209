export type IProduct = {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    categoryId: string;
}

export type ICategory = {
    _id: string,
    name: string
}

export type IUser = {
    _id: string;
    username: string;
    email: string,
    password: string;
    confirmPassword: string;
}