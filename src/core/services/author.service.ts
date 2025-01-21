import { ApiResponse } from "../models/api-response.model";
import { Author } from "../models/author.model";
import BaseService from "./base.service";

class AuthorService extends BaseService {
  private static instance: AuthorService | null = null;
  private readonly endpoint = "/authors";

  private constructor() {
    super();
  }

  public static getInstance(): AuthorService {
    if (!AuthorService.instance) {
      AuthorService.instance = new AuthorService();
    }
    return AuthorService.instance;
  }

  public getAuthors = (): Promise<ApiResponse<Author[]>> => {
    return this.get(this.endpoint);
  };
}

export const authorService = AuthorService.getInstance();
