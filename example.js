const { ThaiCardReader, EVENTS, MODE } = require('./index')

const reader = new ThaiCardReader()
reader.readMode = MODE.PERSONAL
reader.autoRecreate = true
reader.startListener()

reader.on(EVENTS.READING_COMPLETE, (obj) => {
  console.log(obj)
})
