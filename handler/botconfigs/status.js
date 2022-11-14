module.exports = (bot) => {
    bot.status({
  text: "$numberseparator[$allmemberscount;.] members in $numberseparator[$servercount;.] guilds",
  type: "WATCHING",
  status: "ONLINE",
  time: 12
})
    
    bot.status({
  text: "My prefix is $getVar[prefix]",
  type: "PLAYING",
  status: "ONLINE",
  time: 12
})
}