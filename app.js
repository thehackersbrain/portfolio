// required imports
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { Webhook, MessageBuilder } = require("discord-webhook-node");
const { createHook } = require("async_hooks");
const { send } = require("process");
const discord = new Webhook("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const port = process.env.PORT || 8000;
const db = mongoose.connection;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use("/static", express.static("static"));
app.use(
	express.urlencoded({
		extended: false,
	})
);

// Database Configuration
mongoose.connect("mongodb://localhost/portfolioDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
db.on("error", function () {
	const embed = new MessageBuilder()
		.setTitle("Portfolio Contact Message")
		.setThumbnail(
			"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
		)
		.addField("Error: DataBase Connection Error on the Server.")
		.setDescription(
			"Connection to DataBase is Failed, Login and check the Server..."
		)
		.setTimestamp();
	discord.send(embed);
});
db.once("open", function () {
	null;
});

// database schema
const msgSchema = new mongoose.Schema({
	fname: String,
	email: String,
	message: String,
});

// compiling the database schema
const dataDB = mongoose.model("dataDB", msgSchema);

// SMTP Configuration for sending mail notification
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "xxxxxxxxxxxxxxxxxxxxxxxx",
		pass: "xxxxxxxxxxxxxxxxxxxxxxxx",
	},
});

app.get("/", (req, res) => {
	res.status(200).render("index");
});
app.post("/", (req, res) => {
	var fname = req.body.fname;
	var email = req.body.email;
	var msg = req.body.msg;
	const mailContent = {
		from: "xxxxxxxxxxxxxxxxxxx",
		to: email,
		subject: "Thanks for Contacting us.",
		text: `Hey There ${fname}, \nHope You're Doing Well and Enjoying your time.\nThanks for contacting us,\nwill be back to you As soon As Possible\nThanks for being patient.\n\tGaurav Raj [TheHackersBrain]`,
	};
	new dataDB({
		fname: fname,
		email: email,
		message: msg,
	}).save(function (err, result) {
		if (err) {
			const embed = new MessageBuilder()
				.setTitle("Portfolio Contact Message")
				.setThumbnail(
					"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
				)
				.addField("Error: DataBase Connection Error on the Server.")
				.setDescription(
					"Connection to DataBase is Failed, Login and check the Server..."
				)
				.setTimestamp();
			discord.send(embed);
		} else {
			// Configuration for sending mail
			transporter.sendMail(mailContent, function (error, info) {
				if (error) {
					const embed = new MessageBuilder()
						.setTitle("Portfolio Contact Message")
						.setThumbnail(
							"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
						)
						.addField(`Error: Unexpected Error on the Server`)
						.setDescription(error)
						.setTimestamp();
					discord.send(embed);
					res.redirect("/");
				} else {
					const embed = new MessageBuilder()
						.setTitle("Portfolio Contact Message")
						.setThumbnail(
							"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
						)
						.addField("Name: ", `${fname}`, true)
						.addField(`Email: ${email}`, true)
						.setDescription(msg)
						.setTimestamp();
					discord.send(embed);
					res.redirect("/#contact");
				}
			});
		}
	});
});

app.listen(port);
