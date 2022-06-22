const Discord = require('discord.js')

module.exports = {
  name: "8ball",
  run: async (client, message, args) => {
    if(!args[0]) return message.channel.send("⛔️ Vui lòng hỏi một câu hỏi đầy đủ!")
    let replies = ["Không!", "Vâng!", "Tất nhiên rồi!", "Không bao giờ", "Chắc là vậy.", "Tôi không biết nữa..."]
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice().join(" ");

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(`🎱 ${message.author.username}`)
    .addField("Câu hỏi của bạn:", question)
    .addField("Câu trả lời của tôi:", replies[result])
    message.channel.send({ embeds: [ballembed] });
  }
}