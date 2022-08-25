import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';

const host = process.env.HOST || 'http://localhost:3000';

passport.use(new TwitterStrategy({
    consumerKey: "uebn7AAHSEM6lrwgeTTTrVbqU",
    consumerSecret: "haM0LZU9iXhlMcvAMHXbgG3ryWl0P3c391fC1FxdWYujaThJNS",
    access_token: "AAAAAAAAAAAAAAAAAAAAAKe7gQEAAAAACuv38CyRGC27KpMlBjo%2BCmnFJ1g%3D8NxphQvdu14bkCfanL411FjMT7yXiOQZEoogeelRFKAcxbzXH7",
    callbackURL: `${host}/api/auth/auth/twitter/callback`,
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
