import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

export enum Provider
{
    GOOGLE = 'google'
}

@Injectable()
export class AuthService {
    
    constructor(private jwtService: JwtService , private readonly userService: UserService) {
    }

    async validateOAuthLogin(thirdPartyId: string, provider: Provider, email: string): Promise<string>
    {
        try 
        {
            // You can add some registration logic here, 
            // to register the user using their thirdPartyId (in this case their googleId)
            // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);
            
            // if (!user)
                // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);
                
            const payload = {
                thirdPartyId,
                provider,
                email
            }

            const jwt: string = this.jwtService.sign(payload);
            return jwt;
        }
        catch (err)
        {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne({username});
        Logger.log(user)
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }



}