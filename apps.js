const path = require('path')

const express = require('express')

const port = 3000;
const app = express()


app.get('/' , (req,res) => {
  console.log(__dirname)
  console.log(path.resolve(__dirname,'index.html'))
  console.log(path.resolve(__dirname,'view','contacts.html'))
  console.log(__filename)
  
  res.sendFile(path.resolve(__dirname,'index.html'))
})


app.get('/aboutjson' , (req,res) => {
  res.sendFile(path.resolve(__dirname,'about.html'))
})
app.get('/contacts', (req,res) =>{
  res.sendFile(path.resolve(__dirname,'contacts.html'))
})

/*the result will be Cannot GET / 
this is because we not yet routing the response
*/
app.listen(port, () => {
  console.log('App listening on '.port)
})
