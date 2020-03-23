import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { LogDto } from './dto/log.dto';
import { LoginService } from './login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService) {

    }

    @Post() 
    async create(@Body() logDto: LogDto) {
        return await this.loginService.create(logDto);
    }   

}