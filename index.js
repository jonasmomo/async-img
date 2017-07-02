var images = ['old','young','nature']
var files = []

function loadFiles(){
  var image = images.shift()
  if (!image) {
    console.log('alle filer hentet', files)
    files.forEach (function (image){
      document.body.appendChild(image)
    })
    return
  }
  var img = new Image()
  img.onload = function () {
    loadFiles()
  }
  img.src = image + '.jpg'
  files.push(img)
  }

loadFiles()

/*
var count = images.length
images = images.map(function (image){
  var img =  new Image()
  img.onload = function () {
    next()
  }
  img.src = image + '.jpg'
  return img
})

function next () {
  count--
  if (count < 1) {
    images.forEach (function (image){
      document.body.appendChild(image)
    })
  }
}
*/

/*
var fs = require('fs')

function getImg(filepath, done){
  fs.readFile(filepath, function (err, imgs) {
    if(err) return done(err)

    fs.readFile('imgs.dictionary', function(err, dict) {
      if(err) return done(err)

      compareImg(imgs, dict)
    })
  })

  function compareImg (imgs, dict) {
    dict = dict.toString().split('\n')
    imgs = imgs.toString().split('\n').filter(function (img) {
      return dict.indexOf(img) !== -1
    })
    done (null, imgs)
  }
}

getImg('imgs.txt', function (err, imgs) {
  console.log(imgs)
})
*/
