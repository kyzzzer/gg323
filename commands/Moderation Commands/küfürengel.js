module.exports = {
  name: "küfürengel-aç",
  code: `$setServerVar[küfürengel;açık]
  $title[Yeni Ayarlama!]
  $description[Küfür Engel <@$authorID> Tarafından Ayarlandı!]
  $onlyPerms[admin; Bunu Yapmak İçin Yetkiniz Yok!]
  
  	
$if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:Ayarlama:Küfür Engel Ayarlandı! }{field:Ayarlayan:$username}{thumbnail:$authorAvatar}{color:RANDOM}]
$endif
  `
  }