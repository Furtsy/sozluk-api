const fetch = require('node-fetch')

module.exports = {
  tdk: async function(kelime) {
    const api = await fetch(`https://sozluk.gov.tr/gts?ara=${encodeURI(kelime)}`)
    .then(response => response.json());
if(api.error) throw 'Tdk apisinde sorun yaşandı'
let yazar = api[0].anlamlarListe.values().next().value.orneklerListe ? api[0].anlamlarListe.values().next().value.orneklerListe.values().next().value.yazar.values().next().value.tam_adi : 'yazar yok';
let örnek = api[0].anlamlarListe.values().next().value.orneklerListe ? api[0].anlamlarListe.values().next().value.orneklerListe.values().next().value.ornek : 'Örnek yok'
let lisan = api[0].lisan ? api[0].lisan : 'lisan yok'
let anlam = api[0].anlamlarListe.values().next().value ? api[0].anlamlarListe.values().next().value.anlam : 'Anlamı yok'
let atasözü = api[0].atasozu ? api[0].atasozu.values().next().value.madde : 'Atasözü yok'
let obj = {
anlam: anlam,
lisan: lisan,
örnek: örnek,
Yazar: yazar,
Atasözü: atasözü
}
   return obj
  }
};