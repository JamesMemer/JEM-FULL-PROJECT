const Discord = require('discord.js')

module.exports = {
  name: "kiss",
  run: async (client, message, args) => {
    let victim = message.mentions.users.first()
    let kissimg = ["https://media.discordapp.net/attachments/981830441420091432/988025634041245736/IMG_2043.gif", "https://media.discordapp.net/attachments/981830441420091432/988035710751739934/IMG_2046.gif", "https://media.discordapp.net/attachments/981830441420091432/988035742687178752/IMG_2044.gif", "https://media.discordapp.net/attachments/981830441420091432/988035710281973811/IMG_2047.gif"]
    if(!victim) message.reply("Hôn ai thì nói đi chờiii🫣")
    else {
      let kissembed = new Discord.MessageEmbed()
      .setTitle("Kiss Command")
      .setDescription(`${victim}, bạn đã nhận được một nụ hôn ướt át từ ${message.author.username} 🫣`)
      .setImage(`${kissimg[Math.floor(Math.random() * kissimg.length)]}`)
.setColor("#FFC0CB")
      message.channel.send({ embeds: [kissembed] });
    }
  }
}