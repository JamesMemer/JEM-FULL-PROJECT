const Discord = require('discord.js')

module.exports = {
  name: "dog",
  run: (client, message, args) => {
    let dogimg = ["https://media.discordapp.net/attachments/981830441420091432/988435171827142737/IMG_2061.jpg", "https://media.discordapp.net/attachments/981830441420091432/988435172062019584/IMG_2056.jpg", "https://media.discordapp.net/attachments/981830441420091432/988435172544348190/IMG_2060.webp", "https://media.discordapp.net/attachments/981830441420091432/988435172879896607/IMG_2057.jpg", "https://media.discordapp.net/attachments/981830441420091432/988435173144154152/IMG_2058.jpg", "https://media.discordapp.net/attachments/981830441420091432/988435174104629318/IMG_2055.jpg"]
    let dogembed = new Discord.MessageEmbed()
    .setTitle(`Doggies 🥰`)
    .setColor("GOLD")
    .setImage(`${dogimg[Math.floor(Math.random() * dogimg.length)]}`)
    message.channel.send({ embeds: [dogembed] });
  }
}