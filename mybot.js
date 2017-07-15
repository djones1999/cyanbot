const Discord = require("discord.js");
const client = new Discord.Client();

client.login("MzM1NTkzNzE5MjEyNTM5OTA1.DEsChA.akzzanmTe8yEVYQEHePkOZJR9tE");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
