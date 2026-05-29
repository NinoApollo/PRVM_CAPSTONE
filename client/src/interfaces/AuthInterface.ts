export interface UserDetails {
  user: {
    user_id: number;
    first_name: string;
    middle_name?: string;
    last_name: string;
    suffix_name?: string;
    role: {
      role_id: number;
      role: string;
    };
    birth_date: string;
    age: string;
    username: string;
  };
  token?: string;
}

export interface LoginCredentialsErrorFields {
  username?: string[];
  password?: string[];
}
