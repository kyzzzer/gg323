const codedd = require('aoi.js');
const bot = new codedd.Bot({
  token: "ODU0Nzg0ODkyMTI2MTAxNjA1.YMo-dw.599t0SSDFz2aClj5oUroUwHoKXE",
  prefix: "$getServerVar[prefix]"
})

bot.onMessage()
bot.loadCommands("./commands/")

bot.status({
  text: "Night Code Bot Hizmetinizde!",
  type: "PLAYING",
  time: 10
})

bot.status({
  text: "Prefixim: .",
  type: "PLAYING",
  time: 10
})
bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> Sunucuda Küfür Etmene İzin Veremem!
  $deleteIn[3s]
  $deletecommand
  $onlyIf[$checkContains[$toLowercase[$message];amk;oç;amcık;pezevenk;göt;gavat;salak;mal;ez;piç;slk;ezik;piç kurusu;g*t;şrfsz;p*ç;anan;anskm;anaskm;ananı sikiyim;ananı götten;gödden;tten;gvt;napim;31;<@537283706709344276>;@! На Луне | Kyzer]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfürengel]!=kapalı;]
  `
})


bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> Sunucuda Reklam Yapmana İzin Veremem!
  $deleteIn[3s]
  $deletecommand
  $onlyIf[$checkContains[$toLowercase[$message];.discord.gg;.gg;.com;.net;.cf;.ml;.tk;.org;.tr;.gq;.ga;.gov;.glitch.me]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[reklamengel]!=kapalı;]
  
  `
})

bot.joinCommand({
        channel: "$getServerVar[otorolkanal]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        <@$authorID> Sunucumuza Hoşgeldin! Seninle Birlikte $membersCount kişiyiz! Rolün Verildi!
  $onlyIf[$getServerVar[otorolkanal]]      
        `
})
bot.command({
  name: "yardım",
  code: `
$let[e;$apiMessage[;{title:Yardım komutlarım}
{thumbnail:$authorAvatar}

{field:Moderasyon:Lütfen Moderasyon Butonuna Basın!:true}

{field:Müzik:Lütfen Müzik Butonuna Basın!:true}
 
{color:0085ff};{actionRow:Moderasyon 🔨,2,1,ModButon,:Müzik 🎶,2,1,MüzikButon};;yes]]`
})
 

bot.onInteractionCreate()
bot.interactionCommand({
 name: "MüzikButon",
 prototype:"button",
 code:`
$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title:Müzik Komutları}{description:
  \`$getServerVar[prefix]resume\`: Şarkıyı  Devam Ettirir.
  \`$getServerVar[prefix]durdur\`: Şarkıyı Durdurur.
  \`$getServerVar[prefix]$getServerVar[prefix]tekrar-oynat\`: Şarkıyı Tekrar Oynatır.
  \`$getServerVar[prefix]döngü-sırası\`: Döngü Sırasını Görürsünüz.
  \`$getServerVar[prefix]geç\`: Şarkıyı Atlarsınız.
  \`$getServerVar[prefix]şarkısözleri\`: Şarkının Sözlerini Öğrenirsiniz.
  \`$getServerVar[prefix]çal\`: Şarkı Çalar.
  \`$getServerVar[prefix]dinlediğim\`: Şuan Dinlediğinizi Görürsünüz.
  \`$getServerVar[prefix]ses\`: Şarkı Sesini Ayarlar.
  \`$getServerVar[prefix]duraklat\`: Şarkıyı Duraklatır.
}]
$wait[3s]
$interactionReply[Müzik Komutlarımı Yüklüyorum. Lütfen Bekleyiniz!;;;0;4]`
})

bot.onInteractionCreate()
bot.interactionCommand({
 name: "ModButon",
 prototype:"button",
 code:`
$interactionDelete
$wait[30s]
$interactionEdit[;{color:#2f3136}{title:Moderasyon Komutları}{description:
  \`$getServerVar[prefix]ban\`: Kullanıcıyı Sunucudan Yasaklar.
  
  \`$getServerVar[prefix]unban\`: Kullanıcının Yasağını Kaldırır!

  \`$getServerVar[prefix]kick\`: Kullanıcıyı Sunucudan atar.

  \`$getServerVar[prefix]küfürengel-aç/kapat\` Küfür Engel açar/kapar!

  \`$getServerVar[prefix]reklamengel-aç/kapat\`: Reklam Engel Açar/Kapar.

  \`$getServerVar[prefix]modlog\`: Modlog Kurar.

  \`$getServerVar[prefix]modlog-sıfırla\`: Modlog Sıfırlar.

  \`$getServerVar[prefix]muterol\`:Mute Rolü Ayarlar.

  \`$getServerVar[prefix]mute\`: Kullanıcıyı Susturur.

  \`$getServerVar[prefix]tempmute\`: Kullanıcıyı Süreli Susturur!

  \`$getServerVar[prefix]unmute\`: Kullanıcının Susturmasını Kaldırır.

  \`$getServerVar[prefix]nuke\`: Kanalı Siler tekrar Oluşturur.
}]
$wait[3s]
$interactionReply[Moderasyon Komutlarımı Yüklüyorum. Lütfen Bekleyiniz!;;;0;4]`
})

bot.variables({
modlog: "",
küfürengel: "kapalı",
reklamengel: "kapalı",
otorol: "",
otorolkanal: "",
muted: "",
prefix: "."
})