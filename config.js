const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'APOLOZEA' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'NaiBotz V2.1'
global.namaowner = 'Nizar Rahman'

//—————「 Setting Owner 」—————//
global.owner = '6281386945391'
global.ownernomer = ["6281386945391"]
global.premium = ['6281386945391']

//—————「 Set Wm 」—————//
global.packname = ''
global.author = 'Nizar Rahman'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/002ffb75c853893142063.jpg'
global.isLink = `https://naibotz.nizardev.site`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
