module.exports = {
    name: "mute",
  code: `
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Başarılı]
$description[$username[$findMember[$message[1]]] Kullanıcı Susturuldu]
$addField[Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Sebep Girilmemiş];false;$messageSlice[1]]]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Bu kullanıcının rolü benimle eşit veya benden yüksek ]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Bu kullanıcı sizinle eşit veya daha yüksek bir role sahip 
}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:kendini susturamazsın }{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Usage**:\`mute <kullanıcı | KullanıcıID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute Rol Ayarlanmamış! \`.muterol\` <rol | RolID> }{color:RED}]
$onlyPerms[mutemembers;Yetersiz Yetki:\`Üyeleri Sustur\`]
$onlyBotPerms[mutemembers;Yetersiz Bot Yetkisi:\`Üyeleri Sustur\`]
$suppressErrors`
}