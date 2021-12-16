// defining the package
const kurdistaname47 = require('kurdistaname47-2') 
const DiscordAzadi = require("discord.js");
const botAzadi = new DiscordAzadi.Client();
const fetch = require('node-fetch');
const googleTTS = require('google-tts-api');
const superagentAzadi = require("superagent");
const ayare = require('../ayarêazadi.json');
const snekfetchAzadi = require("snekfetch");



function playTTS(phrase, lang, spd, conn, msg) {
  googleTTS(phrase, lang, spd)
    .then(function (url) {
        const dispatcher = conn.playArbitraryInput(url);
        dispatcher.on('error', err => {
          console.error(err);
        })
    })
    .catch(function (err) {
      console.error(err.stack);
      if (err.name === 'RangeError') {
        msg.reply('message ta 200 character bîbê..');
      }
    });
}


module.exports.run = async (client, message, args) => {
const { voiceChannel } = message.member.voiceChannel;
const ziman = ayare.ziman

      if (voiceChannel.joinable) {
        if (voiceChannel.connection) {
          if (args.length > 0) {
            playTTS(args.join(' '), ziman, 44, voiceChannel.connection, message);
          } else {
            message.reply('Lütfen Mesajını Yaz');
          }
        } else {
          voiceChannel.join()
          .then(connection => {
            console.log(`${voiceChannel.name} Odasına Katıldım.`);
            message.channel.send(`${voiceChannel}. Odasına Katıldım. `);
            if (args.length > 0) {
              playTTS(args.join(' '), ziman, 44, connection, message);
            }
          });
        }
      } else {
        message.reply('Êz nîkarîm bîkîyêdîm.');
      }
    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["test55"],
  permLevel: 4
};

exports.help = {
  name: "test55",
  description: "test",
  usage: "/test"
};