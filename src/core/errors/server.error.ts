import { BaseError } from "./base.error";

export class ServerError extends BaseError {
  constructor(message?: string, code = 500) {
    super(
      message ? message : "Something went wrong. Please try again later.",
      "Server Error",
      code
    );
  }
}
