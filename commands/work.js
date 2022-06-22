const Database = require('@replit/database');
const db = new Database();

module.exports = {
  name: "work",
  run: async (client, message, args) => {
    const work = await db.get(`workCheck_${message.author.id}`);
		const timeout = 3600000;
		if (work !== null && timeout - (Date.now() - work) > 0) {
			const ms = require('parse-ms');
			const time = ms(timeout - (Date.now() - work));
			message.channel.send(
				`Bạn đã mệt sau khi làm việc rồi! Quay lại sau **${time.hours}h ${time.minutes}p ${time.seconds}s** để làm tiếp!`
			);
		} else {
			let reward = (Math.floor(Math.random() * 1000) + 1) * 2;
      let gemstone = (Math.floor(Math.random() * 2) + 1) * 2;
			let currentBalance = await db.get(`wallet_${message.author.id}`);
      let currentGem = await db.get(`gemstone_${message.author.id}`);
			message.channel.send(
				`Bạn đi làm việc và kiếm được ${reward.toLocaleString()}${client.currency} và ${gemstone.toLocaleString()}${client.diamond}!`
			);
			await db.set(`wallet_${message.author.id}`, currentBalance + reward);
      await db.set(`gemstone_${message.author.id}`, currentBalance + gemstone);
			await db.set(`workCheck_${message.author.id}`, Date.now());
		}
  }
}