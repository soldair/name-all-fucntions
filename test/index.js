var test = require('tape')
var cp = require('child_process')
var bin = __dirname+'/../bin/index.js'
test("doesn't mess anything up",function(t){

  cp.exec(bin+' scan',function(err,original){
    cp.exec(bin+' scan | '+bin+' name | '+bin+' unname',function(err,unnamed){
      t.equals(original+'',unnamed+'','should not destroy code')
      t.end()
    })
  })

})


