const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

// convert user modal to a cookie and pass to browser
passport.serializeUser((user, done) => {
	// mongo profile id
	done(null, user.id);
});

// convert cookie to user modal and pass to server
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
        // user already exist in db
				return done(null, existingUser);
			}

      // create new user in db
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);
