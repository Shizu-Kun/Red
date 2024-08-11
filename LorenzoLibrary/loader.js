//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Lorenzxz
//Instagram: Lorenzxz
//Telegram: t.me/Lorenzobotinc
//GitHub: @Lorenzxz
//WhatsApp: +6283847736969
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@TheLorenzxz

const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
