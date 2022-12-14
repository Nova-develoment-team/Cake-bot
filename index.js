const aoijs = require("aoi.js")
const { Giveaways } = require("aoi.js-plugins")
const config = require("./handler/botconfigs/config.js")

const bot = new aoijs.AoiClient(
config.Bot
)

bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./Commands/Plugins")
loader.setColors( loader.themes.default )

bot.functionManager.createCustomFunction({
name: "$transcript",
type: "djs",
code: async d => {
 const data = d.util.openFunc(d)
 
const discordTranscripts = require('discord-html-transcripts');

const channel = d.message.channel; // or however you get your TextChannel

// Must be awaited
const attachment = await discordTranscripts.createTranscript(d.message.channel);

channel.send({
 files: [attachment]
});ββ
return {
code: d.util.setCode(data)
}
}
})β

/*
const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
  },//I recommend you to use your own sc token
  cache: {
    cacheType: "Memory",//Disk
    enabled: true,
  }, 
});*/

require('./handler/botconfigs/status')(bot) //This is for bot status file. 
require('./handler/botconfigs/Variables')(bot) //This is for bot variables file. 
require('./handler/botconfigs/callbacks')(bot) //This is for bot callbacks file. 

let gm = new Giveaways({
  client:bot,
  storage:"storage.json",
  botsCanWin:false,
  embedColor: '#9C657C',
  reaction: 'π',
  embedColorEnd: '#9C657C',
  reaction: 'π',
  dmWinMessage:" πCongratulations, **{member.username}**!! You won {prize} {link}",
  dmJoinMessage:" **π {member.username}** <@{member.id}>!! You joined the giveaway {prize} {link}",
  dmLeaveMessage:"π**{member.username}** You left the giveaway {prize} {link}",
  startMessages:{
    giveaway:"π **NEW GIVEAWAY** π",
    giveawayEnded:"π **GIVEAWAY ENDED** π",
    inviteToParticipate:" React with π to participate!",
    winMessage:"π Congratulations, **{winners}** You won **{this.prize}**\n{this.messageURL}",
    drawing:" Ends: {timestamp}",
    embedFooter:"{this.winnerCount} winner(s)",
    noWinner:"π Giveaway cancelled, no valid participations. ",
    winners:"Winner(s):",
    endedAt:" Ended at",
    hostedBy:" Hosted by: {this.hostedBy}"
  },
  lastChance:{
    enabled:true,
    content:"ππ**LAST CHANCE TO ENTER ** ππ ",
    threshold:"30s",
    embedColor:"#9C657C"
  }
})

    gm.loadFuncs()


bot.interactionCommand({
name: "btn1",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn1]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn1;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn2",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn2]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn2;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn3",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn3]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn3;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn4",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn4]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn4;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn5",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn5]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn5;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn6",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn6]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn6;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn7",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn7]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn7;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn8",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn8]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn8;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn9",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn9]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn9;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn10",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn10]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn10;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn11",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn11]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn11;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn12",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn12]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn12;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn13",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn13]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn13;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn14",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn14]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn14;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn15",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn15]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn15;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn16",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn16]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn16;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn17",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn17]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn17;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn18",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn18]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn18;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn19",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn19]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn19;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn20",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn20]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn20;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn21",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn21]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn21;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn22",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn22]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn22;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn23",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn23]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn23;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn24",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn24]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn24;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn25",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn25]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn25;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn26",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn26]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn26;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn27",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn27]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn27;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn28",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn28]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn28;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn29",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn29]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn29;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn30",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn30]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn30;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn1",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn1]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn1;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn2",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn2]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn2;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn3",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn3]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn3;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn4",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn4]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn4;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn5",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn5]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn5;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn6",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn6]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn6;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn7",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn7]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn7;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn8",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn8]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn8;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn9",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn9]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn9;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn10",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn10]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn10;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn11",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn11]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn11;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn12",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn12]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn12;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn13",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn13]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn13;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn14",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn14]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn14;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn15",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn15]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn15;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn16",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn16]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn16;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn17",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn17]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn17;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn18",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn18]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn18;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn19",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn19]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn19;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn20",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn20]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn20;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn21",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn21]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn21;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn22",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn22]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn22;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn23",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn23]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn23;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn24",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn24]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn24;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn25",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn25]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn25;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn26",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn26]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn26;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn27",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn27]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn27;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn28",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn28]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn28;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn29",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn29]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn29;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn30",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn30]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn30;$channelid]>;;;;;yes]`})


 bot.onInteractionCreate()

bot.readyCommand({
 channel: "952669582890500106",
 $if: "v4",
 code: `
$djseval[$Readfile[gaw.txt];no]
$log[____________________________________________
YouTube    : $replaceText[$replaceText[$isValidLink[https://youtube.com/];true;β];false;β]
SoundCloud : $replaceText[$replaceText[$isValidLink[https://soundcloud.com/];true;β];false;β]
Spotify    : $replaceText[$replaceText[$isValidLink[https://spotify.com/];true;β];false;β]
____________________________________________
IPV4       : $advancedTextSplit[$httpRequest[https://ip-fast.com/api/ip/];";2]
Load       : $numberSeparator[$divide[$sub[$dateStamp;$get[time]];10]]s
____________________________________________]
$log[$userTag[$clientID] active at $formatDate[$dateStamp;LLLL]]
$sendMessage[<@$clientID> active at <t:$cropText[$dateStamp;10]:F>;no]
$djsEval[global.aoi = (e, code, rc = true, re = true, sm = true) => e.interpreter(e.client, e.message, e.args, { name: 'Eval', code: code }, e.client.db, rc, undefined, {}, undefined, undefined, re, false, sm)]
$let[time;$dateStamp]
$suppressErrors`
})


bot.joinCommand({ 
channel: "$getServerVar[wchannel]", 
code: `
$If[$getServerVar[wchannel]!=undefined;
$author[1;New user joined;$authoravatar]
$color[1;$getServerVar[color]]
$description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];<owner>;$username[$ownerid]];<owner.tag>;$usertag[$ownerid]];<owner.id>;$ownerid];<owner.mention>;<@$ownerid>];<author.id>;$authorid];<user.age>;<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];<owner.age>;<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];<server.age>;<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];<join.time>;<t:$truncate[$divide[$datestamp;1000]]:R>];undefined;**β Welcome to $servername <@$authorID>, we now have $membersCount members!**]]
$image[1;$get[wimg]]
$setUserVar[jage;$datestamp]
$let[wimg;$replaceText[$getServerVar[wimg];undefined;$jsonRequest[https://nekos.best/api/v1/wave;url]]]]
`}) 

bot.leaveCommand({ 
channel: "$getServerVar[gchannel]", 
code: `
$author[1;User left;$authoravatar]
$color[1;$getServerVar[color]]
$description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[gmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];<owner>;$username[$ownerid]];<owner.tag>;$usertag[$ownerid]];<owner.id>;$ownerid];<owner.mention>;<@$ownerid>];<author.id>;$authorid];<user.age>;<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];<owner.age>;<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];<server.age>;<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];<join.time>;<t:$truncate[$divide[$datestamp;1000]]:R>];<leave.time>;<t:$truncate[$divide[$getUserVar[jage];1000]]:R>];undefined;**β goodbye $username, we now have $membersCount members!**]]
$image[1;$get[wimg]]
$let[wimg;$replaceText[$getServerVar[limg];undefined;$jsonRequest[https://nekos.best/api/v1/cry;url]]]
`}) 
 bot.onLeave()
 bot.onJoin()


bot.guildJoinCommand({
channel: "$systemChannelID",
code: `
$if[$memberscount[$guildID;;no]>=30;
**Server needs \`30\` or more members**
$setServerVar[wchannel;$systemChannelD]
$setServerVar[gchannel;$systemChannelID]
$setGlobalUserVar[wl;$getGlobalUserVar[wl;$clientid]/$guildid;$guildid]
$onlyIf[$checkContains[$guildID;$joinSplitText[;];955629081054036059;956657229879189564;765789714384814120;900900133150007376;952139172653723709;946961245989380206;953775397315686420;943246795700580452;946761370119069717;739811956638220298;797833180936667153;935576651767619626;941026456396509244;818214679456514118;819888735092604938;886782273498808370;920988644318281749]==false;]
$textSplit[$getGlobalUserVar[wl;$clientid];/]]
`})β
bot.onGuildJoin();




bot.channelCreateCommand({
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Channel created**
Name: **$newChannel[name]**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})






bot.channelDeleteCommand({ 
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Channel updated**
Name: **$oldChannel[name]**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})



bot.channelUpdateCommand({
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Channel updated**
Old Name: **$oldChannel[name]**
New Name: **$newChannel[name]**
Nsfw: **$newChannel[nsfw]**
Slowmode: **$newChannel[slowmode]**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})





bot.reactionAddCommand({
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**I have been rate limited by discord**
Timeout: **$rateLimt[timeout]**
Limit: **$rateLimit[limit]**
Method: **$rateLimit[method]**
Path: **$rateLimit[path]**
Route: **$rateLimit[route]**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})





















bot.roleCreateCommand({
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Role created**
New Name: **$newRole[name]**
New Hex: **$oldRole[hexColor]**
New perms: **\`\`\`js
$newRole[permissions]\`\`\`**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})







bot.roleDeleteCommand({ 
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Role deleted**
Name: **$oldRole[name]**
Position: **$oldRole[rawPosition]**
Hex color: **$oldRole[hexColor]**
Color: **$oldRole[color]
Managed: **$oldRole[managed]**
Permissions: **\`\`\`js
$oldRole[permissions]\`\`\`**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})



bot.roleUpdateCommand({ 
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Role updated**
Old Name: **$oldRole[name]**
New Name: **$newRole[name]**
Old Hex: **$oldRole[hexColor]**
New Hex: **$oldRole[hexColor]**
Old perms: **\`\`\`js
$oldRole[permissions]\`\`\`**
New perms: **\`\`\`js
$newRole[permissions]\`\`\`**]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})





bot.voiceStateUpdateCommand({ 
channel: "$getServerVar[modlog]",
code: `0
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**$userTag** has joined the **VC** $newState[channelName]]
$onlyIf[$newState[channelID]!=;]
$onlyIf[$oldState[channelID]==;]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})


bot.userUpdateCommand({
channel: "$getServerVar[modlog]",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**$userTag** **has updated themself**
Old name: **$oldMember[username]**
Old discriminator: **$oldMember[discriminator]**
Old status: **$oldMember[status]**
New name:
**$newMember[username]**
New discriminator: **$newMember[discriminator]**
New status: **$newMember[status]**
Old avatar: $oldMember[avatar]
New avatar: $newMember[avatar]
]
$onlyIf[$getServerVar[modlog]!=undefined;]
` 
})


























bot.onTypingStart();
bot.onRateLimit();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onVoiceStateUpdate();
bot.onRoleUpdate();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanRemove();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();
bot.onGuildUpdate();
bot.onEmojiCreate();
bot.onEmojiUpdate();
bot.onEmojiDelete();
bot.onReactionRemoveAll();
bot.onReactionRemoveEmoji();
bot.onMessageDeleteBulk();
bot.onWebhookUpdate();
bot.onChannelPinsUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate();;
bot.onApplicationCmdDelete();
bot.onStickerCreate();
bot.onStickerUpdate();
bot.onStickerDelete();
bot.onThreadCreate();
bot.onThreadUpdate();
bot.onThreadDelete();
bot.onThreadListSync();