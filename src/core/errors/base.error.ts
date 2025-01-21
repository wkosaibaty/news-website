export class BaseError extends Error {
  title: string;
  code?: string | number;

  constructor(title: string, message: string, code?: string | number) {
    super(message);
    this.title = title;
    this.code = code;
  }
}
