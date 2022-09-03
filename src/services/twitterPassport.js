import passport from 'passport';
import dotenv from 'dotenv'
dotenv.config();
import { Strategy as TwitterStrategy } from 'passport-twitter';

const host = process.env.HOST || 'http://localhost:3000';

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CLIENT_ID,
    consumerSecret: process.env.TWITTER_CLIENT_SEC,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    callbackURL: `${host}/api/auth/auth/twitter/callback`,
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
