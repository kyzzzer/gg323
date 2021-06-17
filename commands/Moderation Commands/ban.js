module.exports = {
  name: "ban",
  code: `$ban[$mentioned[1]]
  $description[$mentioned[1] Kullanıcısı Sunucudan Yasaklandı!]
  
 $if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:İşlem:Ban}{field:Banlayan:$username}{field:Kullanıcı:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
}