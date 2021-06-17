module.exports = {
  name: "kick",
  code: `$kick[$mentioned[1]]
  $description[$mentioned[1] Kullanıcısı Sunucudan Atıldı!]
  
 $if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:İşlem:Kick}{field:Kickleyen:$username}{field:Kullanıcı:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
}