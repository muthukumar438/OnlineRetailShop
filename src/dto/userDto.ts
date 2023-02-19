import { IsEmail, IsString } from 'class-validator'

export class CreateDtoUser {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}