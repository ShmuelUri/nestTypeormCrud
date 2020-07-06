/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards,  Req } from '@nestjs/common';
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
        // if (jwt)
        //     //  TODO
        //     res.redirect('http://localhost:4200/login/succes/' + jwt);
        // else 
        //     res.redirect('http://localhost:4200/login/failure');
    }

}