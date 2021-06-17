module.exports = ({
    name: "loopqueue",
    aliases: ['lpq', 'lq', 'döngü-sırası'],
    description: "Mevcut kuyruğu döngüye sokar",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;şimdi sırayı döngüye alıyor!];false;Artık sırayı döngüye sokmak yok.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Kuyruk boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
 