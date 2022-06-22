const Database = require('@replit/database');
const db = new Database();

module.exports = {
  name: "weekly",
  run: async (client, message, args) => {
    const weekly = await db.get(`weeklyCheck_${message.author.id}`);
		const timeout = 604000000;
		if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
			const ms = require('parse-ms');
			const time = await ms(timeout - (Date.now() - weekly));

			message.channel.send(
				`Bạn đã nhận quà hàng tuần của bạn rồi! Quay lại sau **${time.days}d ${time.hours}h ${time.minutes}p ${time.seconds}s** để nhận tiếp tham lam vcl!`
			);
		} else {
			let reward = (Math.floor(Math.random() * 5000) + 1) * 2;
      
      
			let currentBalance = await db.get(`wallet_${message.author.id}`);
			message.channel.send(
				`Bạn đã nhận ${reward.toLocaleString()}${client.currency} như quà hàng tuần của bạn!`
			);
			await db.set(`wallet_${message.author.id}`, currentBalance + reward);
			await db.set(`weeklyCheck_${message.author.id}`, Date.now());
		}
  }
}