const Discord = require('discord.js')

module.exports = {
  name: "botinfo",
  run: (client, message, args) => {
       let botinfoembed = new Discord.MessageEmbed()
    .setTitle(`⚙️ Thông tin của Jêms Bot`)
    .setDescription(`🏓 Ping: **${client.ws.ping}ms**\n🔘 Prefix: **${client.prefix}**\n📗 Node version: **16.13.2**\n🗃 Discord.js version: **12**\n💾 Total Commands: **10**\n🗄 Bot current version: **1.7.0**\n⭐️ Bot's Developers:\n Main Developer: **YL ● JamesMemer#5328**\n Developer: **YL ● Normal bị ban owo#3106**`)
    .setColor("GREEN")
    message.channel.send({ embeds: [botinfoembed] })
  }
}