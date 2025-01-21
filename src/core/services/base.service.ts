import Cookies from "js-cookie";
import { stringifyQueryParams } from "../utils/api.utils";
import { ServerError } from "../errors/server.error";

export default class BaseService {
  private baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL + "/api";
  }

  protected get<T>(
    endpoint: string,
    queryParams?: Record<string, any>,
    options?: RequestInit
  ): Promise<T> {
    const queryString = queryParams ? stringifyQueryParams(queryParams) : "";
    return this.request<T>(`${endpoint}${queryString}`, {
      method: "GET",
      ...options,
    });
  }

  protected post<T>(
    endpoint: string,
    body: any,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  }

  protected put<T>(
    endpoint: string,
    body: any,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    });
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const token = Cookies.get("token");

    const headers: Record<string, any> = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options?.headers || {}),
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers,
    });

    this.handleErrors(response);
    return await response.json();
  }

  private async handleErrors(response: Response) {
    if (response.ok) {
      return;
    }

    const responseError = await response.json();
    switch (response.status) {
      case 401: {
        Cookies.remove("token");
        window.location.href = "/";
        break;
      }
      default:
        throw new ServerError(responseError?.error, response?.status);
    }
  }
}
