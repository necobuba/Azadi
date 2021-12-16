const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarêazadî = require('./ayarêazadi.json');
const status = require('./status.json');
const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const express = require('express');
const http = require('http');
const app = express();
require('./util/eventLoader')(client);
require('discord-buttons')(client);
//WebSite

app.use(express.static("public"));
app.get("/", function(req, res) {
  res.render("home.ejs")
})

app.get("/api/asrsasdsdad/HAHAHAHHAHAHAHHAHAPRTOECTTJWKWIWJKWJWJW094371085731895913653165391538195135315315/REWFGDSGHW4Y4H4WH345/HA5H5EH53HE5H5EUHEAJTTGBDA4AG44YT5EJYGFZA6UJ6/RJ6RJRJFGJFGJ/test.lua", function(req, res) {
  res.render("api.ejs")
})

app.get("/apiset/:apikey", function(req, res) {
  var Paraetres = req.params.apikey;
  res.render("apikey.ejs", {Paraetres})
})

app.get("/api/:apo", function(req, res) {
  res.send("kk yok")
})


var server = app.listen(3000, function() {
  console.log("sunucu")
});

app.get("*", function(req, res) {
  res.send("boyle bir fonksiyon sayfası bulunamadı")
})





////////////////


var prefix = ayarêazadî.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./azadi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komîtîkan install.`);
  files.forEach(f => {
    let props = require(`./azadi/${f}`);
    log(`İnstallemîn: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./azadi/${command}`)];
      let cmd = require(`./azadi/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./azadi/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./azadi/${command}`)];
      let cmd = require(`./azadi/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {

// dîmejtan /////////////////////////////////
var actvs = [
`biji kurdistan`,
`azadiya kurdistan`, 
`êz kûrdîm`
];
//////////////////////////////////////////////
var text = status.text
var link = status.link
var tip = status.type
client.user.setActivity
(text, 
{
type: tip,
url: link
}
)
console.log ('_________________________________________');
console.log (`Navêmîn                 :                ${client.user.username}`);
console.log (`Sêrvêre dîmêzenîm       :                ${client.guilds.cache.size}`);
console.log (`Zîlamno dîmêzênîm       :                ${client.users.cache.size}`);
console.log (`Prefixamîn              :                ${ayarêazadî.prefix}`);
console.log (`e mîn                   :                Êz dixatÎgîlim`);
console.log ('_________________________________________');
const play = () => {
client.channels.cache.get('920362547507503175').join().then(connection=>{
const songs = [
   'https://l3.itworkscdn.net/itwaudio/9006/stream.mp3',
];
function playSong() {
    const songId = Math.floor(Math.random() * songs.length);
    connection.play(songs[songId]).on("finish", playSong);
}
playSong()
})
}
play()
});

//client funcs ////////////////////////////////////////////////////
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarêazadî.bavemin) permlvl = 4;
  return permlvl;
};

function test() {
  
}
//////////////////////////////////////////////////////////////////////

// logina azadi ////////////////////
client.login(ayarêazadî.token);
///////////////////////////////////
