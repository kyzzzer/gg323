module.exports = ({
    name: "play",
    aliases: ['p','çal'],
    description: "Şarkı çalar",
    usage: "play <song/url>",
    category: "music",
    code: `$color[RANDOM]
    $title[Sıraya şarkı eklendi!;$songInfo[url]]
    $description[✅ Çalınıyor! **$playSong[$message;1m;yes;yes;{color:RANDOM}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]**]
    $footer[$userTag İsimli Kişi Çalıyor]
    $addTimestamp
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$message!=;{description: Oynatmak İçin Şarkı Adı/URL belirtiniz!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]
    $onlyBotPerms[speak;connect;{description:❌ Bende İki Yetkiden Biri Olması Lazım!- **Speak** and **Connect**}{color:RANDOM}]
    $botTyping[3s]`   
})