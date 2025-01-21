import { ApiResponse } from "../models/api-response.model";
import { Preference } from "../models/preference.model";
import BaseService from "./base.service";

class PreferenceService extends BaseService {
  private static instance: PreferenceService | null = null;
  private readonly endpoint = "/preferences";

  private constructor() {
    super();
  }

  public static getInstance(): PreferenceService {
    if (!PreferenceService.instance) {
      PreferenceService.instance = new PreferenceService();
    }
    return PreferenceService.instance;
  }

  public getPreference = (): Promise<ApiResponse<Preference>> => {
    return this.get(this.endpoint);
  };

  public savePreference = (preference: Preference): Promise<any> => {
    return this.post(this.endpoint, preference);
  };
}

export const preferenceService = PreferenceService.getInstance();
