

const kurdistaname47 = require('kurdistaname47-2') 
const DiscordAzadi = require("discord.js");
const botAzadi = new DiscordAzadi.Client();
const fetch = require('node-fetch');
const superagentAzadi = require("superagent");
const snekfetchAzadi = require("snekfetch");


module.exports.run = async (client, message, args) => {
async function dababy(url) {
try {
        require.resolve("canvas")
    } catch (e) {
        throw new Error("ozelan eroramin'")
    }

const Canvas = require('canvas')
    if (!url) throw new TypeError("Ocelan: url tîne laow");

    const canvas = Canvas.createCanvas(320, 320);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://media.discordapp.net/attachments/868246127101739032/869229172596293653/image_16.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const imageURL = await Canvas.loadImage(url);
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(imageURL, 50 * 2, 50 * 2, 260/2, 260/2);
    
    return new DiscordAzadi.MessageAttachment(canvas.toBuffer(), 'Ocelan.png')
}
  let user = message.mentions.users.first() || message.author
  let avatar = user.displayAvatarURL({format : "png"})
  const daBaby = await dababy(avatar);
	//It will return a Discord attachment!
	return message.channel.send(daBaby);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["şişkopiskopat", "şk"],
  permLevel: 0
};

exports.help = {
  name: "şişkopisikopat",
  description: "seni şişko piskopat yapar",
  usage: "şk <user>"
};