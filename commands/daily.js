const Database = require('@replit/database');
const db = new Database();

module.exports = {
  name: "daily",
  run: async (client, message, args) => {
    const check = await db.get(`dailyCheck_${message.author.id}`);
		const timeout = 86400000;
		if (check !== null && timeout - (Date.now() - check) > 0) {
			const ms = require('parse-ms');
			const time = await ms(timeout - (Date.now() - check));

			message.channel.send(
				`Bạn đã nhận quà hàng ngày của bạn rồi! Quay lại sau **${time.hours}h ${time.minutes}p ${time.seconds}s** để nhận tiếp tham lam vcl!`
			);
		} else {
			let reward = (Math.floor(Math.random() * 2000) + 1) * 2;
			let currentBalance = await db.get(`wallet_${message.author.id}`);
			message.channel.send(`Bạn đã nhận ${reward.toLocaleString()}${client.currency} như quà hàng ngày của bạn!`);
			await db.set(`wallet_${message.author.id}`, currentBalance + reward);
			await db.set(`dailyCheck_${message.author.id}`, Date.now());
		}
	}
  }
