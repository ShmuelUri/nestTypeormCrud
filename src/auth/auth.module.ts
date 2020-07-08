import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module'

// to generate secret key run this command:
// node -e "console.log(require('crypto').randomBytes(256).toString('base64'));" 


@Module({
  imports: [
    UserModule,
    PassportModule.register({      
      defaultStrategy: 'jwt',      
      property: 'user',      
      session: false,    
  }),  

    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  exports: [PassportModule, JwtModule, AuthService],
  providers: [AuthService, GoogleStrategy]
})
export class AuthModule {}
