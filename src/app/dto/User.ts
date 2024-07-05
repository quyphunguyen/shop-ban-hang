import {UserDTO} from "./UserDTO";

export class User implements UserDTO{
  id: string;
  imgSrc: string;
  userName: string;
  userPassword: string;

}
