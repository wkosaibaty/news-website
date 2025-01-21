import { ApiResponse } from "../models/api-response.model";
import { Article } from "../models/article.model";
import { Page } from "../models/page.model";
import BaseService from "./base.service";

class FeedService extends BaseService {
  private static instance: FeedService | null = null;
  private readonly endpoint = "/feed";

  private constructor() {
    super();
  }

  public static getInstance(): FeedService {
    if (!FeedService.instance) {
      FeedService.instance = new FeedService();
    }
    return FeedService.instance;
  }

  public getFeed = (): Promise<ApiResponse<Page<Article[]>>> => {
    return this.get(this.endpoint);
  };
}

export const feedService = FeedService.getInstance();
