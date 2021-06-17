module.exports = {
  name: "loopsong",
  asliases: ["lps", "lp", "tekrar-oynat", "tekraroynat"],
  category: "müzik",
  code: `
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ Karalistedesin Bu Komutu Kullanamazsın!**]
  $color[ff00ee]
  $description[<a:yukleniyor:841976383773212693> $replaceText[$replaceText[$loopSong;true;Şarkı Başarıyla Tekrar Oynatılıyor.];false;<a:nlem:841976297089662976> Şarkı Oynatılamadı Bir Hata Oluştu!]]
  $onlyIf[$voiceID!=;{color:RANDOM}{description:Bir Ses Kanalına Gir!}]
  $onlyIf[$queueLength>0;{color:RANDOM}{description:Tekrar Oynatılacak Şarkı Bulamadım.}]
  $onlyIf[$checkContains[$channelType;text;news]==true;]
  `
}