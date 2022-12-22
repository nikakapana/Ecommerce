import {Product} from "./product";
import {User} from "./user";




export interface Cart {
  id: number;
  total: number;
  quantity: number;
  item: any;
  user: User;
}
