module.exports = {
  name: "küfürengel-kapat",
  code: `$setServerVar[küfürengel;kapalı]
  $title[Yeni Ayarlama!]
  $description[Küfür Engel <@$authorID> Tarafından Kapatıldı!]
  $onlyPerms[admin; Bunu Yapmak İçin Yetkiniz Yok!]
  
  	
$if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:Sıfırlama:Küfür Engel Sıfırlandı! }{field:Ayarlayan:$username}{thumbnail:$authorAvatar}{color:RANDOM}]
$endif
  `
  }