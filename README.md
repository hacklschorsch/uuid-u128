Javascript snippets / NPM module to convert between UUIDs and unsigned 128 bit integers.


## Install

Add this repository to your `package.json`:

```json
"dependencies": {
    "uuid-u128": "https://github.com/etoneclab/uuid-u128.git#0a59c72"
  },
```

## Usage

Use this like so:

```js
import * as uuid from 'uuid';
import { uuidv4StrToU128, u128ToUuidv4 } from 'uuid-u128';

let input = uuid.v4();
// -> a6bd120a-686a-4dcd-96c7-37acd3d4b91b

let to_u128 = uuidv4StrToU128(input);
// -> 221633557314528562769500710553240516891u128

let back_to_uuid = u128ToUuidv4(to_u128);
// -> a6bd120a-686a-4dcd-96c7-37acd3d4b91b
```
