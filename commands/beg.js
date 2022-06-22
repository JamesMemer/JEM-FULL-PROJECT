const Database = require('@replit/database');
const db = new Database();

module.exports = {
  name: "beg",
  run: async (client, message, args) => {
    	const beg = await db.get(`begCheck_${message.author.id}`);
		const timeout = 60000;
		if (beg !== null && timeout - (Date.now() - beg) > 0) {
			const ms = require('parse-ms');
			const time = ms(timeout - (Date.now() -beg));
			message.channel.send(
				`Ăn xin quài đợi **${time.hours}g:${time.minutes}p:${time.seconds}s** để ăn xin tiếp🐸`
			);
		} else {
			let reward = (Math.floor(Math.random() * 399) + 1) * 2;
			let currentBalance = await db.get(`wallet_${message.author.id}`);
			message.channel.send(
				`Bạn đi ăn xin và kiếm đc ${reward.toLocaleString()}${client.currency}!`
			);
			await db.set(`wallet_${message.author.id}`, currentBalance + reward);
			await db.set(`begCheck_${message.author.id}`, Date.now());
		}
  }
}