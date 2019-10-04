
let rgb = require('./rgb.js')
let hex = require('./hex.js')

if (process.argv[2] === "rgb"){
    console.log(rgb.result)
    console.log(rgb.resultHSL)
} else{
    console.log(hex.hexToRgb(process.argv[2]))
    console.log(hex.hexToHsl)
}