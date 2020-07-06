import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

export enum Provider
{
    GOOGLE = 'google'
}

@Injectable()
export class AuthService {
    
    constructor(private jwtService: JwtService , /*private readonly usersService: UsersService*/) {
    }

    async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>
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
                provider
            }

            const jwt: string = this.jwtService.sign(payload);
            return jwt;
        }
        catch (err)
        {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

}