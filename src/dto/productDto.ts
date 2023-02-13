import { IsAlphanumeric, IsNumber, IsBoolean } from "class-validator"

export class CreateDtoProduct {
    @IsAlphanumeric()
    public productId : string
    
    @IsAlphanumeric()
    public productName : string
    
    @IsNumber()
    public quantityAvailable : Number
    
    @IsNumber()
    public productPrice : Number
    
    @IsBoolean()
    public productStatus : Boolean = true
}