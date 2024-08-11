//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Lorenzxz
//Instagram: Lorenzxz
//Telegram: t.me/Lorenzobotinc
//GitHub: @Lorenzxz
//WhatsApp: +6283847736969
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@TheLorenzxz

/*!-======[ Module Imports ]======-!*/
const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia
} = require("./LorenzoMedia/language");

/*!-======[ Owner information ]======-!*/

// Owner
global.ytname = "YT: Lorenzxz" //ur yt chanel name
global.socialm = "GitHub: Lorenzxz" //ur github or insta name
global.location = "Indonesia, Jawa Barat, Bandung" //ur location

/*!-======[ Information ]======-!*/

// Information
global.botname = 'Lorenzo' //ur bot name
global.ownernumber = '6283825536262' //ur owner number
global.ownername = '🦄드림 가이 Lorenzo' //ur owner name
global.websitex = "https://youtube.com/@Lorenzxz"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Lorenzo"
global.botscript = 'https://github.com/Lorenzxz/CheemsBot-MD13' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Lorenzo\n\n+6283847736969"
global.creator = "6283825536262@s.whatsapp.net"

/*!-======[ Telegrams ]======-!*/

// Telegram
global.OWNER = ["Lorenzo", "http://t.me/atzmus"]
global.OWNER_NAME = "Lorenzo"
global.BOT_TOKEN = '-'
global.APIKeys = {
   'https://api.zeeoneofc.my.id': '-',
}   
global.BOT_NAME = "Lorenzo"   
global.THUMBNAIL = "./LorenzoMedia/image/lol.jpg"
global.DONASI = "./LorenzoMedia/image/donasi.jpg"
global.language = indonesia
global.lang = language //don't change

/*!-======[ PPOB ]======-!*/

// APIs
global.apiId = {
 smm: '-',
 lapak: '-',
 litensi: '-'
}

// Apikey
global.api = {
 smm: '-',
 lapak: '-',
 litensi: '-',
 atlantic: '-',
 otp: '-',
 osu: '-'
}

global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id',
   smm: "https://smmnusantara.id",
   lapak: "https://panel.lapaksosmed.com",
   atlantic: "https://atlantich2h.com/layanan/price_list",
   otp: 'https://tokoclaude.com/api'
   }

global.ord_web = 'https://h2h.okeconnect.com'
global.ord_id = '-'
global.ord_apikey = '-'
global.ord_harga_id = '-'
global.ord_pin = '-'
global.ord_password = '-'
global.user_silver = 200
global.user_gold = 100
global.user_diamond = 50

/*!-======[ Samp ]======-!*/

// Samp
global.host = 'HOST' // HOST SFTP
global.port = 'PORT' // PORT SFTP
global.username = 'USERNAME' //USERNAME SFTP
global.password = 'PASSWORD' //PASSWORD SFTP
global.sftppath = '/scriptfiles/whitelist/'
global.cmdmyprofil = 'myprofil'
global.cmdlistplayers = 'listplayers'
global.cmdlistucp = 'listucp'
global.cmddelcs = 'delcs'
global.cmdaddcs = 'addcs'
global.cmdsetadmin = 'setadmin'
global.cmdunadmin = 'unsetadmin'
global.cmdsetadminname = 'setadminname'
global.cmdchangename = 'changename'
global.cmdchangeucp = 'changeucp'
global.cmducp = 'register'
global.cmdwl = 'addwl'
global.cmdunwl = 'delwl'
global.cmdcekucp = 'cekucp'
global.cmdgetip = 'getplayerip'
global.cmdbanip = 'banip'
global.cmdban = 'ban'
global.pendek = '5'
global.panjang = '10'

/*!-======[ Settings ]======-!*/

// Settings
global.xprefix = '.'
global.premium = ["6283825536262"] // Premium User
global.hituet = 0
global.email = '-' // Email to receive pairing   
global.pairing = {
	email: '-',
    password: '-'
} // Pairing sender email


/*!-======[ Pterodactyl ]======-!*/

// Pterodactyl
global.domain = 'https://lorenzxz.com' // Isi Domain Lu
global.apikey = 'ptla_' // Isi Apikey Plta Lu
global.capikey = 'ptlc_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

/*----------------------OTHER----------------------*/

/*!-======[ Type ]======-!*/
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!',
    owner: 'Only owner can do that!',
    bugrespon: 'Success!'
}

/*!-======[ Thumbnail ]======-!*/

// Thumbnail
global.thumb = fs.readFileSync('./LorenzoMedia/theme/cheemspic.jpg')

/*!-======[ Bug Settings ]======-!*/

// Bug Text
global.xbugtex = {
xtxt: '🚨Lorenzxz🚨',
}
global.bimg = '-'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})