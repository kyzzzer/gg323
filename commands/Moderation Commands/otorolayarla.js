module.exports = {
  name: "otorolayarla",
  code: `$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorolkanal;$mentionedChannels[1]]
  $description[Otorol Kanalı <#$mentionedChannels
  [1]> OtoRol <@&$mentionedRoles[1]> Olarak Ayarlandı!]
  
  $if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:Ayarlama:Otorol Ayarlandı!}{field:Ayarlayan:$username}{thumbnail:$authorAvatar}{color:RANDOM}]
$endif`
}