const definition = {
  "bytecode": 'BCAIAQCBgICAgICAgPABAwSAgICAgICAgPABBQYhBSQNRDEJMgMSRDEVMgMSRDEgMgMSRDIEIg1EMwEAMQASRDMBECEHEkQzARiBgoCAgICAgIDwARJEMwEZIhIzARslEhA3ARoAgAlib290c3RyYXASEEAAXDMBGSMSRDMBG4ECEjcBGgCABHN3YXASEEACEzMBGyISRDcBGgCABG1pbnQSQAE5NwEaAIAEYnVybhJAAYM3ARoAgAZyZWRlZW0SQAIzNwEaAIAEZmVlcxJAAlAAIQYhBCQjEk0yBBJENwEaARchBRI3ARoCFyQSEEQzAgAxABJEMwIQJRJEMwIhIxJEMwIiIxwSRDMCIyEHEkQzAiQjEkQzAiWAB1RNMVBPT0wSRDMCJlEADYANVGlueW1hbiBQb29sIBJEMwIngBNodHRwczovL3RpbnltYW4ub3JnEkQzAikyAxJEMwIqMgMSRDMCKzIDEkQzAiwyAxJEMwMAMQASRDMDECEEEkQzAxEhBRJEMwMUMQASRDMDEiMSRCQjE0AAEDMBATMCAQgzAwEINQFCAYkzBAAxABJEMwQQIQQSRDMEESQSRDMEFDEAEkQzBBIjEkQzAQEzAgEIMwMBCDMEAQg1AUIBVDIEIQYSRDcBHAExABNENwEcATMEFBJEMwIAMQATRDMCFDEAEkQzAwAzAgASRDMDFDMDBzMDECISTTEAEkQzBAAxABJEMwQUMwIAEkQzAQEzBAEINQFCAPwyBCEGEkQ3ARwBMQATRDcBHAEzAhQSRDMDFDMDBzMDECISTTcBHAESRDMCADEAEkQzAhQzBAASRDMDADEAEkQzAxQzAwczAxAiEk0zBAASRDMEADEAE0QzBBQxABJEMwEBMwIBCDMDAQg1AUIAjjIEIQQSRDcBHAExABNEMwIANwEcARJEMwIAMQATRDMDADEAEkQzAhQzAgczAhAiEk0xABJEMwMUMwMHMwMQIhJNMwIAEkQzAQEzAwEINQFCADwyBCUSRDcBHAExABNEMwIUMwIHMwIQIhJNNwEcARJEMwEBMwIBCDUBQgARMgQlEkQzAQEzAgEINQFCAAAzAAAxABNEMwAHMQASRDMACDQBD0M=',
  "address": "5MKWI634X65LPTLRYB6PP4IVMTV75UKTYID2BQ5ATCVKXUW5XYGTMU7BSI",
  "size": 839,
  "variables": [
    {
      "name": "TMPL_ASSET_ID_2",
      "type": "int",
      "index": 5,
      "length": 10
    },
    {
      "name": "TMPL_ASSET_ID_1",
      "type": "int",
      "index": 17,
      "length": 10
    },
    {
      "name": "TMPL_VALIDATOR_APP_ID",
      "type": "int",
      "index": 75,
      "length": 10
    }
  ],
  "source": "https://github.com/tinymanorg/tinyman-contracts-v1/tree/6e150df8e3e74458f947f3399c6f37e7d4289d21/contracts/pool_logicsig.teal.tmpl"
}


function get_program(variables) {
  //Return a byte array to be used in LogicSig.

  let template = definition['bytecode']

  let template_bytes = [..._base64ToArrayBuffer(template)]

  let offset = 0
  let i = 2;
  definition['variables'].forEach(v => {
    let value = variables[i]
    let start = v['index'] - offset
    let value_encoded = encode_varint(value)
    let value_encoded_len = value_encoded.length
    let diff = v['length'] - value_encoded_len
    offset += diff
    template_bytes.splice(start, v['length'], ...value_encoded)
    i--
  })

  return template_bytes
}

function encode_varint(number) {
  let buf = [];
  while (true) {
    let towrite = number & 127
    number >>= 7
    if (number) { buf.push(towrite | 128) }
    else { buf.push(towrite); break }
  }
  return buf
}

function get_pool_logicsig(validator_app_id, asset1_id, asset2_id) {
  let assets = [asset1_id, asset2_id]
  let asset_id_1 = Math.max(...assets)
  let asset_id_2 = Math.min(...assets)
  let program_bytes = get_program([validator_app_id, asset_id_1, asset_id_2])
  console.log(program_bytes)
  return program_bytes;
}


//get_pool_logicsig(350338509,0,137594422)