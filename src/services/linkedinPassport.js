import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';

const host = process.env.HOST || 'http://localhost:3000';

passport.use(new LinkedInStrategy({
  clientID: "77n5sv58iov6tg",
  clientSecret: "OBJq3bwNK8UcblLg",
  callbackURL: `${host}/api/auth/auth/linkedin/callback`,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));
