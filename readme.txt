Einhverra hluta vegna var ég að lenda í sama bug og í fyrirlestri 4.2 á 35:41.
Þó að ég færði views í src kom það ennþá, náði að leysa það með því að gera app.set('views', './src/views');
í staðinn fyrir app.set('views', viewsPath);

Komst ekki lengra með að færa inn í gagnagrunninn en checkaði á hvort það væri safe með xss í routes.js


