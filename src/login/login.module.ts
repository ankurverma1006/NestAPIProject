import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginSchema } from './login.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Login', schema: LoginSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  exports: [LoginService],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
