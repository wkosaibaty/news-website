import { ApiResponse } from "../models/api-response.model";
import { User } from "../models/user.model";
import BaseService from "./base.service";

class UserService extends BaseService {
  private static instance: UserService | null = null;
  private readonly endpoint = "/user";

  private constructor() {
    super();
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public getUser = (): Promise<ApiResponse<User>> => {
    return this.get(this.endpoint);
  };
}

export const userService = UserService.getInstance();
