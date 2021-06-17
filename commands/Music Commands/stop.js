module.exports = ({
    name: "stop",
    aliases: ['st','durdur'],
    description: "Stops the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏹ Stopped the song!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Ses kanalına gir!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra Boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
 
