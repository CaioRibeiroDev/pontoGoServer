export class AppError {
  public readonly message: string
  public readonly statusCode: number
  public readonly errorCode:number

  constructor (message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}
