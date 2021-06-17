module.exports = {
  name: "unban",
  code: `$unban[$mentioned[1]]
  $description[$mentioned[1] Kullanıcısının Sunucudan Yasağı Kaldırıldı!]
  
 $if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:İşlem:Ban}{field:Banı Kaldıran:$username}{field:Kullanıcı:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
}