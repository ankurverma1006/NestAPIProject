import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './login.interface';
import { LogDto } from './dto/log.dto';

@Injectable()
export class LoginService {

  constructor(@InjectModel('Login') private loginModel: Model<Login>) {}

  async create(logDto: LogDto) {

    let createdUser = new this.loginModel(logDto);
    return await createdUser.save();

  }

  async findOneByEmail(email): Model<Login> {

    return await this.loginModel.findOne({email: email});

  }

}