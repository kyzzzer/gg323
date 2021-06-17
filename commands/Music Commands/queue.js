module.exports = ({
    name: "queue",
    aliases: ['q', 'kuyruk'],
    category: "music",
    usage: "",
    description: "Mevcut kuyruğu görüntüler",
    code:
    `
    $color[RANDOM]
    $thumbnail[$songinfo[thumbnail]]
    $title[Müzik Sırası]
    $description[$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} | {duration}]]
    $addField[Current Song;[$songinfo[title]\\]($songinfo[url])]
   
    $footer[ Sayfa $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]]
    $addTimestamp
   
    $textSplit[$divide[$queueLength;10];.]
    $onlyIf[$voiceID==$voiceID[$clientID];{{color:RANDOM}{description:Bot ile aynı Ses Kanalında olmalısınız!}]] 
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalında olmalısınız!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Sıra boş!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ Bu izinlere ihtiyacın var - **Embed Links**}{color:RANDOM}]
    $suppressErrors[{color:RANDOM}{description:Bir hata oluştu! Bu durum devam ederse lütfen Bot Geliştiricisi ile iletişime geçin!}]
    `
   })
 