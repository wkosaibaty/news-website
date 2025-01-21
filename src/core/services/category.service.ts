import { ApiResponse } from "../models/api-response.model";
import { Category } from "../models/category.model";
import BaseService from "./base.service";

class CategoryService extends BaseService {
  private static instance: CategoryService | null = null;
  private readonly endpoint = "/categories";

  private constructor() {
    super();
  }

  public static getInstance(): CategoryService {
    if (!CategoryService.instance) {
      CategoryService.instance = new CategoryService();
    }
    return CategoryService.instance;
  }

  public getCategories = (): Promise<ApiResponse<Category[]>> => {
    return this.get(this.endpoint);
  };
}

export const categoryService = CategoryService.getInstance();
