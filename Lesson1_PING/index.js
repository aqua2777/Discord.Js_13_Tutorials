const {Client, Intents} = require("discord.js")

var client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES]
})

client.on("messageCreate", message =>{

  if(message.content === "ping"){
    message.reply({content: "pong"})
  }

})

client.login("ODc3MTczOTk3NzY5NDkwNDYy.YRux8g.vsbj_AnUPgBBgOx_5BbVex8DP6I")
