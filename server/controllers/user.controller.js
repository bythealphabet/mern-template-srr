import sgMail from "@sendgrid/mail";
import config from "../../config/config";

function subscribe(req, res) {
	const { email } = req.body;

	console.log("email:", email);
	sgMail.setApiKey(config.sendGridKey);

	const mailOptions = {
		from: "lucas@bythealphabet.com",
		to: "bythealphabet@gmail.com",
		subject: "SolarGard: Thank you for subcribing",
		html: `<p>Hello here is the clients ${email}</p>`,
	};

	console.log("mail options ready");

	sgMail
		.send(mailOptions)
		.then((sent) => {
			console.log("sent:", sent);
			return res.json({
				message: `We send you brochure to ${email}. We will be contacting you soon.`,
			});
		})
		.catch((error) => {
			return res
				.status(400)
				.json({ error: errorHandler.getErrorMessage(error) });
		});
}

export default { subscribe };
