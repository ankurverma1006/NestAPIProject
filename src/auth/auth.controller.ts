import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto'
import { LoginService } from '../login/login.service';
@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService,private loginService: LoginService) {
        
    }

    @Post() 
    async login(@Body() loginUserDto: LoginUserDto){
        let tokenRes= await this.authService.validateUserByPassword(loginUserDto)
        if(tokenRes['token']){
            let logD= {
                email: loginUserDto.email,
                loginTime: new Date().getTime()
            }
            this.loginService.create(logD);
            return tokenRes;
        }else{
            return 'invalidToken';
        }      
    }
}