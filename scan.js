var walkdir = require('walkdir')
var fs = require('fs')

walkdir(process.argv[3]|| process.cwd()).on('file',function(f){
  if(f.lastIndexOf('.js') !== f.length-3) return

  process.stdout.write(JSON.stringify({file:f,contents:fs.readFileSync(f)+''})+'\n')
})
