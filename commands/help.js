const Discord = require('discord.js')
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
			.setAuthor(`${message.author.tag}`)
      .setTitle("Vô server để được hỗ trợ thêm!")
      .setURL("https://discord.gg/VWf66Spjpn")
			.setDescription(
				`**10 commands available**\n**🏦 Economy Commands**\n**${client.prefix}bal , ${client.prefix}daily , ${client.prefix}work , ${client.prefix}beg , ${client.prefix}weekly**\n**⚙️ Utility Commands**\n**${client.prefix}ping , ${client.prefix}botinfo**\n**🎱 Fun Commands**\n**${client.prefix}kiss , ${client.prefix}dog , ${client.prefix}8ball**`
			)
			.setFooter(`Prefix: ${client.prefix}`)
			.setColor('YELLOW');
		message.channel.send({ embeds: [embed] });
    await message.channel.send("`UPDATE VERSION 1.5.0\n# ⚙️ Một vài lệnh bây giờ đã có lệnh rút ngắn (%work = %w)\n# ⭐️ Tiền tệ mới!\n# 🔨 Đã sửa bugs!`")
	}
}
