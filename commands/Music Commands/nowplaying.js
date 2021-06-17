  module.exports = ({
    name: "nowplaying",
    aliases: ['np', 'dinlediğim'],
    description: "Çalmakta olan şarkıyı görün",
    usage: "",
    category: "music",
    code: `
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
    $color[RANDOM]
    $description[⏯Şu anda çalan şarkı - **[$songInfo[title]\\]($songInfo[url])**]
    $thumbnail[$songinfo[thumbnail]]
    $addTimestamp
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ Şu izine Sahip Olmalısın- **Embed Links**}{color:RANDOM}]`
})