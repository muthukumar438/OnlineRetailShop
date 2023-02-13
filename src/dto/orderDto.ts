import { IsAlphanumeric, IsNumber, IsBoolean } from "class-validator"

export class CreateDtoOrder {
    @IsAlphanumeric()
    public orderId : string
    
    @IsAlphanumeric()
    public productId : string
    
    @IsAlphanumeric()
    public productName : string
    
    @IsNumber()
    public orderQuantity : Number
    
    @IsNumber()
    public productPrice : Number
    
    @IsBoolean()
    public orderStatus : Boolean = true
}