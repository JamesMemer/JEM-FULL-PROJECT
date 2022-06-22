module.exports = {
  name: "ping",
  run: (client, message, args) => {
    const dt = new Date(message.createdTimestamp);
		message.channel.send(`🏓 Pong \ [**${new Date() - dt}ms\**] | Ws : \[**${client.ws.ping}ms**]`)
  }
}