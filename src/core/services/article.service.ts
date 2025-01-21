import { ApiResponse } from "../models/api-response.model";
import { ArticleFilters } from "../models/article-filters.model";
import { Article } from "../models/article.model";
import { Page } from "../models/page.model";
import BaseService from "./base.service";

class ArticleService extends BaseService {
  private static instance: ArticleService | null = null;
  private readonly endpoint = "/articles";

  private constructor() {
    super();
  }

  public static getInstance(): ArticleService {
    if (!ArticleService.instance) {
      ArticleService.instance = new ArticleService();
    }
    return ArticleService.instance;
  }

  public getArticles = (
    filters: ArticleFilters
  ): Promise<ApiResponse<Page<Article[]>>> => {
    return this.get(this.endpoint, filters);
  };

  public getArticle = (id: string): Promise<ApiResponse<Article>> => {
    return this.get(`${this.endpoint}/${id}`);
  };
}

export const articleService = ArticleService.getInstance();
