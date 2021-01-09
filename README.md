Sözluk-api
---
Türk Dil kurumundan kelime aratmanızı sağlayan bir modül.

[Discord Sunucusu](https://discord.gg/qbzCJkcG).
---

```shell
npm install sozluk-api
```

```javascript
const modül = require('sozluk-api')
async function çıktı() {
let kelime = await modül.tdk('ahır')
console.log(kelime)
  }
çıktı()

/*/
{
  anlam: 'Evcil büyükbaş hayvanların barındığı kapalı yer, hayvan damı',
  lisan: 'Farsça āḫūr',
  örnek: 'Sağda, duvar kıyısında ahır, arabacı, uşak odaları var.',
  Yazar: 'Yusuf Atılgan',
  Atasözü: 'ahıra çekmek'
}

/*/
```
