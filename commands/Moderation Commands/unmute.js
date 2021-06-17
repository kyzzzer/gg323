module.exports = {
  name: "unmute",
  code: `
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Başarılı]
$description[$username[$findMember[$message[1]]] Kullanıcının Susturulması Kaldırıldı!]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Bu kullanıcının rolü benimle eşit veya benden yüksek ]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Bu kullanıcı sizinle eşit veya daha yüksek bir role sahip!}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:kendi sesini açamazsın }{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Kullanım**:\`unmute <kullanıcı | kullanıcıID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
}