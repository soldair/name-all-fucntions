var walkdir = require('walkdir')
var fs = require('fs')

var files = []

walkdir(process.argv[3]|| process.cwd()).on('file',function(f){

  if(f.lastIndexOf('.js') !== f.length-3) return

  files.push(f)
}).on('end',function(){
  files.sort()
  files.forEach(function(f){
    process.stdout.write(JSON.stringify({file:f,contents:fs.readFileSync(f)+''})+'\n')
  })
})
