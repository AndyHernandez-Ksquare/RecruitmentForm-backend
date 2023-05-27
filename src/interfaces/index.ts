export interface IUser {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export interface IPost {
  id?: number;
  text: string;
  userId?: number;
}

export interface IComment {
  id?: number;
  text: string;
  userId?: number;
  postId: number;
}
