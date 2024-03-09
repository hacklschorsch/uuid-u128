const uuid = require('uuid')

function uuidv4StrToU128(uuidStr) {
    return String(BigInt.asUintN(128, '0x' + uuidStr.replaceAll('-', ''))) + 'u128'
}

function u128ToUuidv4(u128Str) {
    return uuid.stringify(Buffer.from(BigInt(u128Str.replace('u128','')).toString(16).padStart(32, '0'), 'hex'))
}


for (var i = 0; i < 10_000; i++) {
    // console.log("loop" + i)
    var input = uuid.v4()
    // console.log("input " + input)
    var output = u128ToUuidv4(uuidv4StrToU128(input))
    // console.log("input " + input + " output " + output)
    if (input != output) throw new Error("damn!")
}
