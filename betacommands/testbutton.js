

const kurdistaname47 = require('kurdistaname47-2') 
const DiscordAzadi = require("discord.js");
const botAzadi = new DiscordAzadi.Client();
const fetch = require('node-fetch');
const superagentAzadi = require("superagent");
const snekfetchAzadi = require("snekfetch");
const disbut = require("discord-buttons");

module.exports.run = async (client, message, args) => {
let button = new disbut.MessageButton()
  .setLabel("Erê Tôrîmê")
  .setID("tori")
  .setStyle("green");
  
let button2 = new disbut.MessageButton()
  .setLabel("Na Tôrîmê")
  .setID("natori")

  .setStyle("red");
  
  
message.channel.send("Tû toriyi", {
  buttons : [button, button2]
});
  
client.on('clickButton', async (button) => {
    let username = button.clicker.id;
    if(button.id === "tori") {
    message.channel.send(`<@!${username}> torîya`)
    
    } else if(button.id === "natori") {
    message.channel.send(`<@!${username}> na torîya`)
    }
    await button.reply.defer()
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["button4242", "test23114515134"],
  permLevel: 0
};

exports.help = {
  name: "button",
  description: "test",
  usage: "button"
};