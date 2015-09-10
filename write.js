var split = require('split')
var fs = require('graceful-fs')
var mv = require('mv')

process.stdin.pipe(split()).on('data',function(s){
  var o = json(s)
  if(!o) return;
  fs.writeFileSync(o.file+'.tmp',o.contents)
  mv(o.file+'.tmp',o.file,function(err){
    if(err) console.error('rename error: ',err)
    console.log(o.file)
  })
})


function json(s){
  try{
    return JSON.parse(s)
  } catch(e) {

  }
}


