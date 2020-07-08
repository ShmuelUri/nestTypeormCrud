/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards, Req, Post, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('google')
export class AuthController {

    @Get()
    @UseGuards(AuthGuard('google'))
    googleLogin():any 
    {
        // initiates the Google OAuth2 login flow
    }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req: any):any {// , @Res() res: any
        return req.user
        // const jwt: string = req.user.jwt;
        
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Req() req) {
    return req.user;
  }



}