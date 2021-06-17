module.exports = ({
    name: "skip",
    aliases: ['s','geç'],
    description: "Skips the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏩ şarkı atlandı!]
    $skipSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Ses Kanalına Girmelisin!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra Yok!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
 
