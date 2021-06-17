module.exports = {
  name: "muterol",
  aliases: ["setmuterole", "setmute"],
  code: `
  $color[GREEN]
 $title[Başarılı!]
$description[Mute Rol <@&$findRole[$message[1]]> Olarak Ayarlandı!]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:Sunucuda Rol Bulunamadı!}{color:RED}]
$onlyIf[$message[1]!=;{title:Hata:Yanlış Kullanım!}
{field:**Kullanım**:\`muterol <role | roleID>\`}{color:RED}]
$onlyPerms[admin;Yetersiz Yetki:\`admin\`]
$onlyBotPerms[admin;Yetersiz Bot Yetkisi:\`admin\`]
$suppressErrors` 
}