// defining the package
const kurdistaname47 = require('kurdistaname47-2') 
const DiscordAzadi = require("discord.js");
const botAzadi = new DiscordAzadi.Client();
const fetch = require('node-fetch');
const superagentAzadi = require("superagent");
const ayare = require('../ayarêazadi.json');
const snekfetchAzadi = require("snekfetch");


module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  const ziman = ayare.ziman
    const url = `https://${ziman}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
    let response;
    try {
      response = await fetch(url).then(res => res.json())
    } catch (e) {
      console.log('tîne\n' + e)
    }
    try {
      if (response.type === 'disambiguation') {
        const embed = new DiscordAzadi.MessageEmbed()
          .setTitle(response.title)
          .setColor("GREEN")
          .setURL(response.content_urls.desktop.page)
          .setThumbnail(response.thumbnail.source)
          .setDescription(`${response.extract} Ê Dîjî: [Pêlêka mê!](${response.content_urls.desktop.page}).`)
          message.channel.send(embed).catch()
      } else {
        const fullEmbed = new DiscordAzadi.MessageEmbed()
          .setTitle(response.title)
          .setColor("GREEN")
          .setURL(response.content_urls.desktop.page)
          .setThumbnail(response.thumbnail.source)
          .setDescription(response.extract)
        message.channel.send(fullEmbed).catch()
      }
    } catch (e) {
      message.channel.send(new DiscordAzadi.MessageEmbed().setDescription(`Agahî Tînê`).setColor("RED"))
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Wîkipediya", "wîki", "wiki", "wk"],
  permLevel: 0
};

exports.help = {
  name: "Wîkipediya",
  description: "wê bejî wîkipedîya agahî",
  usage: "/wîki <agahî>"
};