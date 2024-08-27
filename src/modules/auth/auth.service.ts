import { ForbiddenException, Injectable } from '@nestjs/common';
import { userLogIn, userSignUp } from 'src/dtos/userDTO/auth-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';


@Injectable()
export class AuthService {
    constructor(
        private prisma : PrismaService
    ){}


    login(user : userLogIn){

        
    }

    async signup(user : userSignUp){
       try{ const hash = await argon.hash(user.password)

        const newUser = await this.prisma.user.create({
            data:{
                email: user.email,
                hash
            },
        });
        delete newUser.hash;
        return newUser;}
       catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            if (error.code == 'P2002'){
                throw new ForbiddenException("Credentail taken")
            }
        }

        throw error;
       }
    }


}
