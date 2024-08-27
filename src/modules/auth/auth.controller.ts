import { Body, Controller, Post } from '@nestjs/common';
import { userLogIn ,userSignUp } from 'src/dtos/userDTO/auth-dto';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService, private prisma : PrismaService){}

    @Post('login')
    async postLogin(@Body() user : userLogIn ) {
       return this.authService.login(user);
    }

    @Post('signup')
    async postSignup(@Body() user : userSignUp){
        return this.authService.signup(user);

    }
}
    