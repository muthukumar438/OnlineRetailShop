export class exceptions extends Error {
    public statusCode: number;
    public errorMessage: string;
  
    constructor(statusCode: number, errorMessage: string) {
      super(errorMessage);
      this.statusCode = statusCode;
      this.errorMessage = errorMessage;
    }
}