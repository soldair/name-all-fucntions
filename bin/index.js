#!/usr/bin/env node

if(process.argv.indexOf('scan') > -1)
  require('../scan.js')
else if(process.argv.indexOf('name') > -1)
  require('../index.js')
else if(process.argv.indexOf('unname') > -1)
  require('../index.js')
else if (process.argv.indexOf('write') > -1)
  require('../write.js')
else {
  console.error('unknown mode.\n\tname-all-functions [mode]\nvalid modes are\n scan, name, unname and write')
} 

