import {IsEmail, IsNotEmpty, IsString } from "class-validator";

export class userLogIn{
    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    hash : string;
}


export class userSignUp{
    
    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsNotEmpty()
    @IsString()
    password : string
    
    @IsNotEmpty()
    @IsString()
    firstName : string
    
    @IsNotEmpty()
    @IsString()
    lastName : string
    

}