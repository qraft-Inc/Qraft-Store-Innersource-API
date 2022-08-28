import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';

const host = process.env.HOST || 'http://localhost:3000';

passport.use(new TwitterStrategy({
    // clientID: "cHFnczFVWHN2ZVNnUDNGNlE5ZGE6MTpjaQ",
    // clientSecret: "PvFaiTaCgyQMNEPx6Cq2yiNCwtBQ_yrlpthAjsfvfDW6HwkQUr",
    consumerKey: "cHFnczFVWHN2ZVNnUDNGNlE5ZGE6MTpjaQ",
    consumerSecret: "PvFaiTaCgyQMNEPx6Cq2yiNCwtBQ_yrlpthAjsfvfDW6HwkQUr",
    access_token: "AAAAAAAAAAAAAAAAAAAAAKe7gQEAAAAACuv38CyRGC27KpMlBjo%2BCmnFJ1g%3D8NxphQvdu14bkCfanL411FjMT7yXiOQZEoogeelRFKAcxbzXH7",
    callbackURL: `${host}/api/auth/auth/twitter/callback`,
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
