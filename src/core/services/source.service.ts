import { ApiResponse } from "../models/api-response.model";
import { Source } from "../models/source.model";
import BaseService from "./base.service";

class SourceService extends BaseService {
  private static instance: SourceService | null = null;
  private readonly endpoint = "/sources";

  private constructor() {
    super();
  }

  public static getInstance(): SourceService {
    if (!SourceService.instance) {
      SourceService.instance = new SourceService();
    }
    return SourceService.instance;
  }

  public getSources = (): Promise<ApiResponse<Source[]>> => {
    return this.get(this.endpoint);
  };
}

export const sourceService = SourceService.getInstance();
