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

export interface IPersonalInfo {
  id?: number;
  name: string;
  last_name: string;
  second_last_name: string;
  gender: string;
  gender_other: string;
  date_of_birth: string;
  city_of_birth: string;
  state_of_birth: string;
  country_of_birth: string;
  user_id: number;
}

export interface IAddress {
  street: string;
  in_between_street_a: string;
  in_between_street_b: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  proof_of_address: string;
  user_id: number;
}
