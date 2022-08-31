import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
const host = process.env.HOST || 'http://localhost:3000';

passport.serializeUser(function ser(user, done) {
  done(null, user);
});

passport.deserializeUser(function deser(user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "409401007740-i3g2o0jlba1t1e6jcuiotvisn73s1kuq.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: `${host}/api/auth/auth/google/callback`,
      passReqToCallback: true,
    },
    function strat(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);