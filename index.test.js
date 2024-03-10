import { test } from 'node:test'
import assert from 'node:assert'
import * as uuid from 'uuid'
import { uuidv4StrToU128, u128ToUuidv4 } from './index.js'

test('uuid.NIL (all zeros) -> 0u128', () => {
    assert.strictEqual(uuidv4StrToU128(uuid.NIL), '0u128')
})

test('0u128 -> uuid.NIL (all zeros)', () => {
    assert.strictEqual(u128ToUuidv4('0u128'), uuid.NIL)
})

test('Poor man\'s QuickCheck / parametric e2e test', () => {
    for (let i = 0; i < 1_000; i++) {
        let input = uuid.v4()
        let output = u128ToUuidv4(uuidv4StrToU128(input))
        assert.strictEqual(input, output)
    }
})
