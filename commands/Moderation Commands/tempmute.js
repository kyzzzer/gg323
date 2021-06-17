	
module.exports = {
  name: "tempmute",
  code: `
$channelSendMessage[$getServerVar[modlog];{description:$username[$findMember[$message[1]]] Kullanıcısının Susturulması Kaldırıldı!}
{field:Sebep:Süreli Mute Bitiş.}{color:GREEN}]
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$wait[$message[2]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] Kullanıcısı Süreyle \`$message[2]\` Susturuldu!}
{field:Nedeni:$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Sebep Girilmedi];false;$messageSlice[2]]}{color:GREEN}]
 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Bu kullanıcının rolü benimle eşit veya benden yüksek!]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Bu kullanıcı sizinle eşit veya daha yüksek bir role sahip!}{color:RED}]
 
$onlyIf[$checkContains[$message[2];h;m;s]==true;{description:Geçerli Bir Zaman Koyunuz! (h(saat) ,m(Dakika) ,s(Saniye))}{color:RED}]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$message[2]!=;{title:Error}{field:**Kullanım**:\`tempmute <Kullanıcı | KullanıcıID> <Süre>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`.muterol\` yazarak Ayarlayın!}{color:RED}]
$onlyPerms[mutemembers;Yetersiz Yetki:\`Üyeleri Sustur\`]
$onlyBotPerms[mutemembers;Yetersiz Bot Yetkisi:\`Üyeleri Sustur\`]
$suppressErrors`
}