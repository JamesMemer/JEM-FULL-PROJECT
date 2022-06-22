module.exports = (client) => {
  console.log("✅ Bot đã online!")
  client.user.setPresence({ activities: [{ name: '%help', type: "LISTENING"}], status: 'dnd' });


}