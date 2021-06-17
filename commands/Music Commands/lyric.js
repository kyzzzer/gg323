 module.exports = ({
    name: "lyrics",
    aliases: ['ly', 'l','sözleri'],
    description: "Çalmakta olan veya belirli bir şarkıdan sözler alın",
    usage: "lyrics (song)",
    category: "music",
    code: `$color[RANDOM]
    $if[$argsCount>0]
    $title[$message İsimli Şarkının Sözleri]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: Bu şarkı için şarkı sözü bulunamadı!}{color:RANDOM}]]
    $elseIf[$argsCount==0]
    $title[$songInfo[title] İsimli Şarkının Sözleri]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{description: Bu şarkı için şarkı sözü bulunamadı!}{color:RANDOM}]]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra boş!}]
    $endelseif
    $endif
    $botTyping
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacım var - **Embed Links**}{color:RANDOM}]`
})
