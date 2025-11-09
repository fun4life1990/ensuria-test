export class BaseLogicException extends Error {
  public status: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'BaseLogicException';
    this.status = status || 400;
  }
}
