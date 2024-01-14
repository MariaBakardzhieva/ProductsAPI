export interface StoreItem {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string;
}

export interface CartItem extends StoreItem {
  [x: string]: any;
  quantity: number;
}

export interface Action {
  type: string;
  payload: CartItem[];
}

export interface Credentials {
  email: string;
  password?: string;
}

export interface SignUp extends Credentials {
  name: string;
  avatar: string;
}

export interface Update {
  name: string;
  email: string;
}
export interface FormItem {
  [x: string]: any;
}
