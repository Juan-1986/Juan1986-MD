import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from 'cheerio';
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { es as esDefault, en as enDefault } from "./lib/multi-language/_default.js"
import { en, es, id, ar, pt } from "./lib/idiomas/total-idiomas.js"

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// [ES] > Agrega el número que será Bot y los que serán propietarios.
// [EN] > Add the number that will be Bot and those that will be owners.
global.owner = [
["573108625104", '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈', true], //𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿
["34636445091"], 
["34686630246"],
["34636445091"],
["34636445091"],
["34636445091"],
["34636445091"],
["34636445091"],
["34636445091"]]

global.mods = []
global.prems = []

//cambia a false Desactivar en "auto-reconexion" de sub-bots
global.gataJadibts = true

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ RENDER ❱❱
//Kurt18: Obtener el código QR por la URL del Hosting
global.obtenerQrWeb = 0; //Solo valores: 1 o 0
//Kurt18: Aplica para Host Render.com
global.keepAliveRender = 0; //Solo valores: 1 o 0
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ methodCode ❱❱
// [ES] > Agregue el número del Bot en "botNumberCode" si desea recibir código de 8 dígitos sin registrar el número en la consola.
// [EN] > Add the Bot number in "botNumberCode" if you want to receive 8-digit code without registering the number in the console.
global.botNumberCode = "" //example: "+59309090909"
global.confirmCode = "" // No tocar esto : Do not touch this line
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ Multi Idioma Dinámico : Dynamic Multi Language (MID-GB) ❱❱
// [ES] > Agregué uno de los idiomas disponibles para el Bot en "mid".
// [EN] > I added one of the languages available for the Bot in "mid".

// ❰❰ IDIOMAS DISPONIBLES : AVAILABLE LANGUAGES ❱❱
// Español 👉 es           
// English 👉 en
global.lenguajeGB = es
global.mid = esDefault
global.version_language = '1.0 (MID-GB)'

// [ES] > Si "default_language" esta vacío, su idioma predeterminado será Español o se usará el idioma que cada usuario haya seleccionado al momento de registrarse. 
// [EN] > If "default_language" is empty, your default language will be Spanish or the language that each user has selected at the time of registration will be used.
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ API KEYS ❱❱
global.Key360 = ["Gata_Dios"] // key Ephoto360
global.openai_key = 'sk-0' // Api New: https://platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3' // Api New: https://platform.openai.com/account/org-settings */
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV3"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},
   
global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰❰ bibliotecas : libraries ❱❱
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// [ES] > Agregate a ti, colaboradores o ayudates, aparecerá en el comando de lista de contactos.
// [EN] > Adding yourself, collaborators or helpers will appear in the contact list command.
global.official = [ // Agregate si eres Owner
["573108625104", 'Gata Dios 💻', 1], 
["34636445091", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
["34686630246", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]]

global.mail = '' // Add email
global.desc = '' // Add short description (20 caractres max)
global.desc2 = '' // Add long description (90 caractres max) (Este parámetro se aplicará sólo si su whasapp no tiene descripción)
global.country = '' // Add country, example: 🇪🇨
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

global.packname = `🉐🤖 𝐆𝐨𝐤𝐮𝐁𝐨𝐭 🤖🉐` //"𝐆𝐨𝐤𝐮𝐁𝐨𝐭-𝙈𝘿 🐈"
global.author = `神事㊫ 𝐁𝐲 𝐉𝐮𝐚𝐧𝟏𝟗𝟖𝟔 神事㊫` //"𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨"

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// [ES] > INFORMACIÓN DE VERSIONES DEL BOT, POR FAVOR 
// MANTENGA ESTO SIN MODIFICAR, NOS ESFORZAMOS A DIARIO POR OFRECERLES UN BOT PARA LA COMUNIDAD, SEA AGRADECIDO 😉
// [EN] > BOT VERSION INFORMATION, PLEASE KEEP THIS UNCHANGED, WE STRIVE DAILY TO PROVIDE YOU WITH A BOT FOR THE COMMUNITY, BE GRATEFUL
global.vs = "1.7.0"
global.vsJB = "5.0 (Beta)"
global.gt = "🉐🤖 𝐆𝐨𝐤𝐮𝐁𝐨𝐭 🤖🉐"

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
global.exito = eg

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
global.wm = "🉐🤖 𝐆𝐨𝐤𝐮𝐁𝐨𝐭 🤖🉐"
global.igfg = "🉐🤖 𝐆𝐨𝐤𝐮𝐁𝐨𝐭 🤖🉐"
global.nomorown = "0000"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰ RPG ❱
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
}}}


global.multiplier = 85 // Cuanto más alto, más difícil subir de nivel 

//Emojis RPG - Referencias
global.rpg = {
emoticon(string) {
string = string.toLowerCase();
let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeGB.eDiamante(),
      exp: lenguajeGB.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeGB.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeGB.eMagia(),
      joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(),
      stamina: lenguajeGB.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeGB.eOro(),
      
      trash: lenguajeGB.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeGB.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeGB.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeGB.eHierro(),
      rock: lenguajeGB.eRoca(),
      potion: lenguajeGB.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeGB.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeGB.eEspada(),
      
      common: lenguajeGB.eCComun(),
      uncoommon: lenguajeGB.ePComun(),
      mythic: lenguajeGB.eCMistica(),
      legendary: lenguajeGB.eClegendaria(),
      petFood: lenguajeGB.eAMascots(), //?
      pet: lenguajeGB.eCMascota(),//?
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeGB.eGato(),    
      centaur: lenguajeGB.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeGB.ePerro(),
      dragon: lenguajeGB.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeGB.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeGB.eAve(), //Mascota : Griffin',
      horse: lenguajeGB.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeGB.eGataCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeGB.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]];
}}

global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase();
let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emott[results[0][0]];
}}

global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emottt = {
      exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
      money: lenguajeGB.eGataCoins(), tiketcoin: lenguajeGB.eGataTickers(), stamina: lenguajeGB.eEnergia(),
            
      potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
      rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
      coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
      
      eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
      sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
      umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
      pancing: lenguajeGB.eCanaPescar(),
       
      common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
      pet: lenguajeGB.eCMascota(),//?
      gardenboxs: lenguajeGB.eCJardineria(),//?
      legendary: lenguajeGB.eClegendaria(),
      
      anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
      fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
      anjing: lenguajeGB.ePerro(),
 
      petFood: lenguajeGB.eAMascots(), //?
      makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
      makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emottt[results[0][0]];
}}

global.rpgshopp = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emotttt[results[0][0]];
}}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// IDs de canales
global.ch = {
ch1: '120363195436416919@newsletter',
ch2: '120363234822910701@newsletter',
ch3: '120363263357160092@newsletter',
ch4: '120363248027382788@newsletter',
ch5: '120363195436416919@newsletter',
ch6: '120363195436416919@newsletter',
ch7: '120363195436416919@newsletter',
ch8: '120363195436416919@newsletter', 
ch9: '120363195436416919@newsletter',
ch10: '120363195436416919@newsletter',
}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})

global.yt = 'https://youtube.com/'
global.ig = 'https://www.instagram.com/'
global.md = 'https://github.com/'
global.fb = 'https://www.facebook.com/'
global.tk = 'https://www.tiktok.com/'
global.ths = 'https://www.threads.net/'
global.paypal = 'https://paypal.me/'
global.asistencia = 'https://wa.me/message/'
global.all = 'https://www.atom.bio/'
global.canal1 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K'
global.canal2 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K'
global.canal3 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K'
global.canal4 = 'https://t.me/'
global.soporteGB = "https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6"

// Canales de WhatsApp 
global.canal_whatsApp1 = "https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w" // Noticias Dragon Ball
global.canal_whatsApp2 = "https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V" // Curiosidades Dragon Ball 
global.canal_whatsApp3 = "https://whatsapp.com/channel/0029VaQkf7T0rGiORXhKqR0R" // Noticias juegos Dragon Ball 
global.canal_whatsApp4 = "https://whatsapp.com/channel/0029Va9HjoqICVfqKkhmYD1e" // Mundo Dragon Ball bots

// grupos de WhatsApp de dragon ball 
global.grupo1 = "https://chat.whatsapp.com/LmDvJZWd0eQCzhR8lwJ5B4" //🔥🐉🐲亀𝔽𝕒𝕞𝕚𝕝𝕚𝕒 𝕊𝕒𝕚𝕪𝕒𝕟亀🐲🐉🔥
global.grupo2 = "https://chat.whatsapp.com/LddDN9xDXcg15IuOirylqZ" // 🐉🐲亀𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤亀🐲🐉
global.grupo3 = "https://chat.whatsapp.com/L2vpoClRqYC6wsmGC0gFqS" // 🐉🐲🌍 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤 🌍🐲🐉
global.grupo4 = "https://chat.whatsapp.com/EaTmnGSAX3pH06Dl7MRzmV" //🐉🐲亀𝕍𝕚𝕕𝕖𝕠𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝亀🐲🐉
global.grupo5 = "https://chat.whatsapp.com/K1FSWdgwuzTL1z08NVYJNw" //🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕊𝕥𝕚𝕔𝕜𝕖𝕣𝕤🐉🐲
global.grupo6 = "https://chat.whatsapp.com/GX6QQjlGEcYAGz823ZUpfI" //📶🐲🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕖𝕟𝕔𝕦𝕖𝕤𝕥𝕒𝕤 🐉🐲📶
global.grupo7 = "https://chat.whatsapp.com/BhXwjZVP0Ae9VU4pHqXATS" // 🐉🐲𝔽𝕒𝕟𝕤 𝔻𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝕂𝕒𝕚🐲🐉
global.grupo8 = "https://chat.whatsapp.com/JXVf0iaQhuvE7uQCE8QSym" // 🐉🐲 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℝ𝕠𝕝 🐲🐉
global.grupo9 = "https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K" // 🌍🐉 ℙ𝕠𝕨𝕖𝕣 𝕆𝕗 𝔾𝕠𝕕𝕤 🐉🌍
global.grupo10 = "https://chat.whatsapp.com/LCF5v7bb9dN8lGOrY9OlFR" // 🐉🐲𝕍𝕚𝕝𝕝𝕒𝕟𝕠𝕤 𝕕𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝🐲🐉
global.grupo11 = "https://chat.whatsapp.com/Hq0VCaXqGaU40P89HmPuni" // 🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕏𝕖𝕟𝕠𝕧𝕖𝕣𝕤𝕖 🐉
global.grupo12 = "https://chat.whatsapp.com/KJcE87Yb8ZP7WDiww8UDkY" // 🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔽𝕠𝕣𝕥𝕟𝕚𝕥𝕖 🐉
global.grupo13 = "https://chat.whatsapp.com/GEj9B5TlTvoIC6wBLJ71UU" // 🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝔻𝕠𝕜𝕜𝕒𝕟 𝕓𝕒𝕥𝕥𝕝𝕖🐲🐉
global.grupo14 = "https://chat.whatsapp.com/EJFl28xgwLeEhIQxriWiuZ" // 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕤𝕡𝕒𝕣𝕜𝕚𝕟𝕘 𝕫𝕖𝕣𝕠 🐉🎮🌍
global.grupo15 = "https://chat.whatsapp.com/JbIgLHQuvue7hItxhng9nN" // 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝕓𝕒𝕝𝕝 𝕜𝕒𝕜𝕒𝕣𝕠𝕥 🐉🎮🌍
global.grupo16 = "https://chat.whatsapp.com/KljiSB549Xc7HXXIzVPFat" // 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔹𝕦𝕕𝕠𝕜𝕒𝕚 𝕋𝕖𝕟𝕜𝕒𝕚𝕔𝕙𝕚 🐉 🎮🌍
global.grupo17 = "https://chat.whatsapp.com/LUKhODoKfqrC0uVKqMdfu4" // 🐉🎮𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔽𝕀𝔾𝕋ℍ𝔼ℝℤ🎮🐉

//grupos frikis
global.grupo_friki1 = "https://chat.whatsapp.com/ChQubdKdYav2XpohU8Vs3R" // 亀🇪🇸 𝔽𝕒𝕟𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🇪🇸亀
global.grupo_friki2 = "https://chat.whatsapp.com/Bjf43ZD8ZlZBCWE0Yv3jIX" // 🌍⚔️🛡️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝒂𝒕𝒂𝒒𝒖𝒆 𝒂 𝒍𝒐𝒔 𝒕𝒊𝒕𝒂𝒏𝒆𝒔 ⚔️🛡️🌍 
global.grupo_friki3 = "https://chat.whatsapp.com/EGR7UJ4mvjMD0hc0ZoAxwI" // 🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍
global.grupo_friki4 = "https://chat.whatsapp.com/CjPAAmdWQzO07yzPoypr6O" // 🌍💪🦲 𝑶𝒏𝒆 𝒑𝒖𝒏𝒄𝒉 𝒎𝒂𝒏 🦲💪🌍 
global.grupo_friki5 = "https://chat.whatsapp.com/LE7qPMXoSMH5Rh40R8aPlE" // 𝗗𝗿𝗮𝗴𝗼𝗶 𝗯𝗼𝗹𝗮
global.grupo_friki6 = "https://chat.whatsapp.com/J0vzttZbKXqKeUZPj0fUYa" // 🌍🎭🐻 𝑩𝒍𝒆𝒂𝒄𝒉 🐻🎭🌍
global.grupo_friki7 = "https://chat.whatsapp.com/IIH75WjAuzhBSrd05wFsgV" // 🌍⚔️🗡️ 𝑲𝒊𝒍𝒍 𝒍𝒂 𝒌𝒊𝒍𝒍 🗡️⚔️🌍
global.grupo_friki8 = "https://chat.whatsapp.com/By1GlKQ5yLQAYYxhTR8t9N" // 🌍🃏♣️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑲𝒂𝒌𝒆𝒈𝒖𝒓𝒖𝒊 ♣️🃏🌍
global.grupo_friki9 = "https://chat.whatsapp.com/CRYP316MujxKFYiIHe9ZEx" // 🌍😺🐼 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑹𝒂𝒏𝒎𝒂 ½ 🐼😺🌍
global.grupo_friki10 = "https://chat.whatsapp.com/KkanOPfYmn2DE0oErnxdKf" // 🌍 👒⛩️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑶𝒏𝒆 𝒑𝒊𝒆𝒄𝒆 ⛩️👒🌍
global.grupo_friki11 = "https://chat.whatsapp.com/CIsIuOpJoEX72KsLMHpMHz" // 🌍🍥🍜 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑵𝒂𝒓𝒖𝒕𝒐 🍜🍥🌍
global.grupo_friki12 = "https://chat.whatsapp.com/Jl57mUSc0Nr0DxdqcB74hI" // 𝗯𝗼𝗹𝗮 𝗱𝗲 𝗱𝗿𝗮𝗰 𝗲𝗻 𝗰𝗮𝘁𝗮𝗹𝗮
global.grupo_friki13 = "https://chat.whatsapp.com/LZbQBENMeIjEv7HE1DM32v" // 🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 2 🤖🌍
global.grupo_friki14 = "https://chat.whatsapp.com/HHqnpkNB3pRCpekFTzQTne" // 💥💣ARCANE💣💥
global.grupo_friki15 = "https://chat.whatsapp.com/J644aEYo8BXITv6ZOLyYpi" // 𝗕𝗼𝗹𝗮 𝗱𝗼 𝗱𝗿𝗮𝗴𝗼𝗻
global.grupo_friki16 = "https://chat.whatsapp.com/IhWTZM7Wu36AiiXE7mfXak" // 𝗕𝗼𝗹𝗮 𝗱𝗲 𝗗𝗿𝗮𝗰 𝗲𝗻 𝗩𝗮𝗹𝗲𝗻𝗰𝗶𝗮
 

// canales Dragon Ball 
global.canal_telegram1 = "https://miniurl.cl/DragonBallAnime" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹, 𝗭, 𝗭 𝗞𝗮𝗶, 𝘀ú𝗽𝗲𝗿, 𝗚𝗧 🇪🇸
global.canal_telegram2 = "https://miniurl.cl/BolaDeDracValencia" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗩𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼
global.canal_telegram3 = "https://miniurl.cl/DragonBallSinCensura" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 🇪🇸 𝘀𝗶𝗻 "𝗰𝗲𝗻𝘀𝘂𝗿𝗮"
global.canal_telegram4 = "https://miniurl.cl/BolaDeDracCatala" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗖𝗮𝘁𝗮𝗹𝗮𝗻
global.canal_telegram5 = "https://miniurl.cl/BolaDeDracCatalanRespaldo" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗖𝗮𝘁𝗮𝗹𝗮𝗻 𝗿𝗲𝘀𝗽𝗮𝗹𝗱𝗼 
global.canal_telegram6 = "https://miniurl.cl/BolaDeDracTV3" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗧𝗩𝟯 
global.canal_telegram7 = "https://miniurl.cl/AsBolasMaxica" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗚𝗮𝗹𝗹𝗲𝗴𝗼 
global.canal_telegram8 = "https://miniurl.cl/DragoiBola" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗘𝘂𝘀𝗸𝗲𝗿𝗮  
global.canal_telegram9 = "https://miniurl.cl/SuperDragonBallHeroes" // 𝗦𝘂𝗽𝗲𝗿 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗛𝗲𝗿𝗼 🇪🇸
global.canal_telegram10 = "https://miniurl.cl/DragonBallManga" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗠𝗮𝗻𝗴𝗮 🇪🇸
global.canal_telegram11 = "https://miniurl.cl/DragonBallLatino" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹, 𝗭, 𝗭 𝗞𝗮𝗶, 𝘀ú𝗽𝗲𝗿, 𝗚𝗧 🇲🇽
global.canal_telegram12 = "https://miniurl.cl/DragonBallSub" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗦𝘂𝗯 🇪🇸
global.canal_telegram13 = "https://miniurl.cl/DragonBallDaimaSub" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗗𝗮𝗶𝗺𝗮 𝗦𝘂𝗯 🇪🇸
global.canal_telegram14 = "https://miniurl.cl/DragonBallMusica" // 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗠𝘂𝘀𝗶𝗰𝗮
global.canal_telegram15 = "https://miniurl.cl/PeliculasDragonBall" // 𝗣𝗲𝗹𝗶𝗰𝘂𝗹𝗮 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹

// Grupos Facebook 
global.grupo_facebook1 = "https://www.facebook.com/groups/667472657700009/" // Fans de dragón ball Z kai castellano de España
global.grupo_facebook2 = "https://www.facebook.com/groups/207704962082606/" // Alíen VS depredador español castellano
global.grupo_facebook3 = "https://www.facebook.com/groups/213867644714527/" // Start trek wars Español castellano
global.grupo_facebook4 = "https://www.facebook.com/groups/649206827024362/" // Los caballeros del zodiaco Español castellano
global.grupo_facebook5 = "https://www.facebook.com/groups/5608883022528456/" // El take doblaje castellano de España
global.grupo_facebook6 = "https://www.facebook.com/groups/241942921170061/" // Fans de Dragon Ball Kakumei
global.grupo_facebook7 = "https://www.facebook.com/groups/258678936914911/" // Nostalfan retro 80 y 90
global.grupo_facebook8 = "https://www.facebook.com/groups/340798961463741/" // 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤
global.grupo_facebook9 = "https://www.facebook.com/groups/356587100017666/" // Vuestro grupo de WhatsApp 
global.grupo_facebook10 = "https://www.facebook.com/groups/586945682849926/" // Mis grupos de WhatsApp 
global.grupo_facebook11 = "https://www.facebook.com/groups/1359091327905091/" // Oliver y Bengi 
global.grupo_facebook12 = "https://www.facebook.com/groups/1661631510843730/" // Grupos de dragon ball WhatsApp 
global.grupo_facebook13 = "https://www.facebook.com/groups/5238056872988769/" // Anime de los 80,90 en castellano de España 
global.grupo_facebook14 = "https://www.facebook.com/groups/5608883022528456/" // Amigos del doblaje de la comunidad en general 
global.grupo_facebook15 = "https://www.facebook.com/groups/5886689541350122/" // 🐉🐲亀𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤亀🐲🐉
global.grupo_facebook16 = "https://www.facebook.com/groups/992399634839160/" // Fans de dragon ball Z Kai 
global.grupo_facebook17 = "https://www.facebook.com/groups/1987921121395900/" // Fans de la bola de drac en catala
global.grupo_facebook18 = "https://www.facebook.com/groups/539707171183186/" // Fans de la bola de drac en Valencia
global.grupo_facebook19 = "https://www.facebook.com/groups/3796913187085249/" // Dragon Ball Daima
global.grupo_facebook20 = "https://www.facebook.com/groups/958885421318898/" // Fans de Dragom Ball AF
global.grupo_facebook21 = "https://www.facebook.com/groups/2568850750089805/" // Fans de Super Dragon Ball Heroes
global.grupo_facebook22 = "https://www.facebook.com/groups/213867644714527/" // Star Trek Wars comunidad fans
global.grupo_facebook23 = "https://www.facebook.com/groups/208832278817260/" // Películas y series de ciencia ficcion y terror
global.grupo_facebook24 = "https://www.facebook.com/groups/182950561309109/" // DC VS Marvel comunidad de fans
global.grupo_facebook25 = "https://www.facebook.com/groups/5608883022528456/" // Amigos del doblaje de la comunidad en general 


global.grupo_collab1 = "https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6"
global.grupo_collab2 = "https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6"
global.grupo_collab3 = "https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6"
global.grupo_collab4 = "https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6"
