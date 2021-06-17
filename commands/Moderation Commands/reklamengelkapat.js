module.exports = {
  name: "reklamengel-kapat",
  code: `$setServerVar[reklamengel;kapalı]
  $title[Yeni Ayarlama!]
  $description[Reklam Engel <@$authorID> Tarafından Kapatıldı!]
  $onlyPerms[admin; Bunu Yapmak İçin Yetkiniz Yok!]  
  	
$if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:Sıfırlama:Reklam Engel Sıfırlandı! }{field:Ayarlayan:$username}{thumbnail:$authorAvatar}{color:RANDOM}]
$endif
  `
  }