const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "233595305729"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'princelaaseh256@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Ghana/Accra'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '233595305729' 
global.devs = '233595305729';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFOSWU2Wk1Fc29vTStyQVlLMlVOUDR5ekFiYndpSW5xOEtVVVlvQjRGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTBOalhrR3lETkxESmNMbDB5TlN6RjdyVXZwaXVoRmV2Nyt6SEVHQnJFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SDVmQkE5ZFF0UGVGRDdnMzE3QXJOSzFpS0svQ3JpeW40Zm52UGNyZkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwcUxHWkFudlR6cnltTUtBM2U1MkJqSm5rUTJGOXlmYTZuOHA3ak5Da2dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLTzdrQVV0Skl6b0UrV3NiaXJxU0RNUDJyQ3hjc3pza2RabFJZN1RkMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0rSUVYVC82WWZTQmRGU1pLcGkzK2NhZXovUnIwWUVvdFAzeHErSmlLUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUEwMDlpVzcra3ZiYXJiMXZVUkF2UXZDMWRSWWZ1WWk1TTAxU0UreW9VRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid08vcml4aWh5dEw5MW1QY2dNVER5NnJjVUFrdVg5ejdhV082RWhvc0F4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVjd2hWeFhUQWFDTjRYZGJCRkVRbXBmbG9vRFhNTGJRV21GTTVIZVcyb0FSL1pqUnBzQTdxdWhkM2dyZmlGV0h6WVNBaDVENnFyc29vaWU4a0dGcEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6ImtLY3hnS2EwdHdFTFRJcXZsT01tTzdWdktrSkIyZTF0aGRDeThGaUNMZDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllhdWpfdDJhVExHZE9WVnR0Rzc3SEEiLCJwaG9uZUlkIjoiOTI3NGFjODYtN2M1ZS00MjVmLWEwOWQtODBhOTdmMDQ0ZDVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJxQXFpUk5xbCt0bWxRSTh2VWRORTJpM2Mxbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwcGJrbTBXTC8zdWx6eFlxUCs4TmVNWkVxWWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDY1UjI2VDEiLCJtZSI6eyJpZCI6IjIzMzU5NTMwNTcyOToyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJFeHQgU29Mb1PrqqgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052STZLMEJFTGYyK2EwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik13SkJSRERMRnJvaGV5S3dvN2NKTFIyaTFuTm9ub2o5Tm9BdW4wM2JRQVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlM4clRGU2dQNXR6MGVnZDlmcWZmY1J6Wk5QSnFidlBnY1I4NGhlOEMyeFFzNlhPN3EwK0M3MnpWZ1FZSnYvaFJka2VKblFndno1S2EzRFlxcnhFMERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsNUQwalBINDNoK3A5Mk5McUlLL0s0MzRXL0h5dnFnb0FVRmxlS1ZjK3lYY3BpSnhma2JEL1VtMy9SZ2s5cTBIU3UwVzBkeXNLVHVsT2FDM2NIbnpBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5NTMwNTcyOToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUTUNRVVF3eXhhNklYc2lzS08zQ1MwZG90WnphSjZJL1RhQUxwOU4yMEFGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA2OTgyMjAxfQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@princeshan',
  packname:  process.env.PACK_NAME || 'Prince',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'princeofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuckyou,fool,bitch' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? True : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false: process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey I'm Alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
