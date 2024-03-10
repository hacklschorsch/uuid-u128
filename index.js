import * as uuid from 'uuid'

function uuidv4StrToU128(uuidStr) {
    return String(BigInt.asUintN(128, '0x' + uuidStr.replaceAll('-', ''))) + 'u128'
}

function u128ToUuidv4(u128Str) {
    return uuid.stringify(Buffer.from(BigInt(u128Str.replace('u128','')).toString(16).padStart(32, '0'), 'hex'))
}

export {uuidv4StrToU128, u128ToUuidv4}
