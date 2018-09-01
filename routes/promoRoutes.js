// const _ = require('lodash');
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Promo = mongoose.model("promos");

module.exports = app => {
	app.get("/api/promoInstance", async (req, res) => {
		const data = await Promo.find(req.slug);
		res.send(data);
	});

	app.get("/api/promoInstance/:surveyId/:choice", (req, res) => {
		res.send("Thanks for voting!");
	});

	// POST promoInstance to Database
	app.post("/api/promoInstance", requireLogin, async (req, res) => {

		const { type, title } = req.body;
		const promo = new Promo({
			title: title,
			type: type,
			_user: req.user.id,
			dateSent: Date.now()
		});

		try {
			await promo.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
