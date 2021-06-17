  module.exports = {
  name: "otorolsıfırla",
  code: `$resetServerVar[otorol]
  $resetServerVar[otorolkanal]
  $description[Otorol Sıfırlandı!]
  
  $if[$serverChannelExists[$getServerVar[modlog]]==true]
$channelSendMessage[$getServerVar[modlog];<@$authorID>{title:Mod Log}{field:Sıfırlama:Otorol Sıfırlandı!}{field:Sıfırlayan:$username}{thumbnail:$authorAvatar}{color:RANDOM}]
$endif`
}