export declare class exceptions extends Error {
    statusCode: number;
    errorMessage: string;
    constructor(statusCode: number, errorMessage: string);
}
