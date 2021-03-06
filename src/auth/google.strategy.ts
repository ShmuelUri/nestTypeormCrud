import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { AuthService, Provider } from "./auth.service";



config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor( private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
      try{
        const { name, emails, photos } = profile;
        const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE, name);

        const user = {
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
        picture: photos[0].value,
        accessToken,
        jwt
        }

        done(null, user);
    }

    catch(err)
        {
            // console.log(err)
            done(err, false);
        }

  }

}
