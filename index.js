var split = require('split')
var path = require('path')



var mode = 'name'
if(process.argv.indexOf('unname') > -1) mode = 'unname'


var actions = {
  name:function(name,o){
    var result = ''
    o.contents.split(/(function\s+\(|function\()/g).forEach(function(s,i){
      if(i%2) {
        s = "function "+name+'_'+i+s.substr('function'.length)
      }
      result += s
    })
    return result
  },
  unname:function(name,o){
    var re = new RegExp(' '+name+'_\\d+','g')
    return o.contents.split(re).join('')
  }
}

process.stdin.pipe(split()).on('data',function(s){
  var o = json(s)
  if(!o) return;
  var base = path.basename(o.file)
  if(base.indexOf('.js') === -1) return

  contents = actions[mode](fnname(o.file),o)

  process.stdout.write(JSON.stringify({file:o.file,contents:contents})+'\n')
})

function fnname(file){
  return 'FN_'+file.replace(/[^_a-z0-9]/ig,'_')
}

function json(s){
  try{
    return JSON.parse(s)
  } catch(e) {

  }
}
