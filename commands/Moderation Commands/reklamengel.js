module.exports = {
  name: "reklamengel-aç",
  code: `$setServerVar[reklamengel;açık]
  $title[Yeni Ayarlama!]
  $description[Küfür Engel <@$authorID> Tarafından Kapatıldı!]
  $onlyPerms[admin; Bunu Yapmak İçin Yetkiniz Yok!]
  	
$if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:Ayarlama:Reklam Engel Ayarlandı! }{field:Ayarlayan:$username}{thumbnail:$authorAvatar}{color:RANDOM}]
$endif
  `
  }