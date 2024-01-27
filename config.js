const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '13025449902'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'syamefx123@gmail.com'
global.github = 'ayada'
global.location = 'Kerala'
global.gurl = 'https://instagram.com/_mr.fro_ud_?' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'ambada' //wa.me/+13025449902
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/f89a97a65465401faf323.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFMODRYS0FwczFLSE5RaHQ2VGNEUUwwLzNENEhvekJLWkNYb2R4VEMxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTYxdFJvdndaaXFDMFlpYTBaVXoxbTdlNlpmVjRZVTNlcXhZMnJsWTBscz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFS1ltNFVNMTFPWExSalI0WlZhTE5RQ2RCeUNvZ3FHNXB6U2NlNEVwZEhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZ0tUbzM1NUF4TmhlaFdLUE8ydHJncGFmY1dYMUl1cjlzeTZkSE8yaDEwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPQmIzbUxsSmNobzY3Qk5RWnNRUjRHYzR5eGdLcDdyVUJuMUxvS015a2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA1VTR2M0dncGFQWlJ6U04zdjU0QkNUVnhwalhlT2FyNEVwdlh1MGhISGM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVCtVTGVaZnRkMzhHU1VtdzFQcE9SWHNGeHBKdnMvbklaWTJVVzRrY1VacmxmTk5PSzVDTFEwLzlDY0RCai9BSlNwMmoyOEpzQkNkTnZjUXAza2lDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjcyLCJhZHZTZWNyZXRLZXkiOiI2Z2JJc1hENFNKdzV1NEFmVHRmOTVNR3A5NmxtdzVKNTZkeFNqOGVuRUFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4cDdxWGNKclFDQzE0WFE0NzJ0UHh3IiwicGhvbmVJZCI6ImNjZjk3NzI5LTkwYmUtNGUzMC05ZThiLTA0OTVkYjNkNjhlZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiaEZsL0pmelpOZG4xNm1ESThyN1NZYjFWZXM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill3VmJ5UElIbW5SR3BnYlVMbmJhZDJCYW9rUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01iQW5UVVEvc3pFclFZWUN5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRJUnhCaTZPU21tVEgxcTF4b0VQMjRkRlVZeHQ0R3VlNGtSaEdNZG5vQ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJMNUdXWUpNSDYydFJYRHZ5YWVUc3dXVndwZDJjVDNBcHRoTTExUnI5dlpheEU2VmpDTElRMEIrSmlaZ3B2OG9lVDY5RExadnU2c0hmNDdyMDhpOERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxb2RaemV4cXpNVEozTFc3eDdHaFhlSkc1YUJ0Nmp3N0QvSkpUTk5ZbVJ3NE5hemQ2TllpdlVBS2hUaG1RWklnZHZIdVZidjZWNTRlV204dHNkZVNBUT09In0sIm1lIjp7ImlkIjoiMTMwMjU0NDk5MDI6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RuvCdkoDwnZGo8J2RtF/wnZG68J2RrPCdkbkifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMwMjU0NDk5MDI6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXlFY1FZdWprcHBreDlhdGNhQkQ5dUhSVkdNYmVCcm51SkVZUmpIWjZBcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNjEwODU0NX0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SYAM~SER',
  packname:  process.env.PACK_NAME || 'MADE BY SYAM~SER',
  
  botname:   process.env.BOT_NAME === undefined ? "🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SYAM~SER' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.',',','!': process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『ꜰᴏʟʟᴏᴡ • _ᴍʀ._ꜰʀᴏ_ᴜᴅ_』*\n ʜʏ ʙᴀʙᴇ"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
