import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';

const host = process.env.HOST || 'http://localhost:3000';

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SEC,
  callbackURL: `${host}/api/auth/auth/linkedin/callback`,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));
