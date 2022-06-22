const Database = require('@replit/database');
const db = new Database();

module.exports = {
  name: "balance",
  run:  async (client, message, args) => {
     let balance = await db.get(`wallet_${message.author.id}`);
		let bank = await db.get(`bank_${message.author.id}`);
   let gemstone = await db.get(`gemstone_${message.author.id}`)

		if (balance === null) balance = 0;
		if (bank === null) bank = 0;
    if (gemstone === null) gemstone = 0;
		message.channel.send(`${message.author.username}, Bạn đang có: **__${balance}${client.currency}__** và **__${gemstone}${client.diamond}__**`);
  }
}