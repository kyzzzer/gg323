module.exports = ({
    name: "volume",
    aliases: ['vol', 'v','ses'],
    description: "Change the music volume",
    category: "music",
    usage: "volume <number>",
    code: `
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
    $color[RANDOM]
    $description[🔊 Sesi şu şekilde değiştirdin: "$message".]
    $volume[$message]
    $onlyIf[$voiceID==$voiceID[$clientID];{color:RANDOM}{description:Bot ile aynı Ses Kanalında olmalısınız!} {field:Bot'un Ses Kanalı:<#$voiceID[$clientID]>} {field:Kullanıcı Ses Kanalı:<#$voiceID>}] 
    $onlyIf[$queueLength>0;{description:Sıra Boş!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: bağımsız değişken bir sayı olmalıdır!}{color:RANDOM}]
    $onlyIf[$message[1]<=200;{description: Maksimum ses "200"'dür!}{color:RANDOM}] 
    $onlyIf[$message[1]>=1;{description: En az Ses "1"'dir'!}{color:RANDOM}] 
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]
    $onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacım var- **Embed Links**}{color:RANDOM}]`
    })