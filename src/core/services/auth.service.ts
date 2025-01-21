import { ApiResponse } from "../models/api-response.model";
import { AuthResponse } from "../models/auth-response.model";
import { LoginRequest } from "../models/login-request.model";
import { SignupRequest } from "../models/signup-request.model";
import BaseService from "./base.service";

class AuthService extends BaseService {
  private static instance: AuthService | null = null;
  private readonly endpoint = "/auth";

  private constructor() {
    super();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public login = (
    request: LoginRequest
  ): Promise<ApiResponse<AuthResponse>> => {
    return this.post(`${this.endpoint}/login`, request);
  };

  public signup = (
    request: SignupRequest
  ): Promise<ApiResponse<AuthResponse>> => {
    return this.post(`${this.endpoint}/signup`, request);
  };
}

export const authService = AuthService.getInstance();
