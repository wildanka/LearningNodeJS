const express = require('express')
const fs = require('fs')

const port = 3000;
const app = express()

/* basically when we access some url, we automatically send a get request. 
so here we're going to try to route the get request*/
app.get('/' , (req,res) => {
  res.json({
    name: 'Wildan Kurniadi'
  })
})
app.get('/aboutjson' , (req,res) => {
  res.json({
    name: 'Wildan Kurniadi',
    age: '24'
  })
})
app.get('/aboutsend', (req,res) =>{
  res.send({
    name: 'Wildan Kurniadi',
    age: '24'
  })
})

/*the result will be Cannot GET / 
this is because we not yet routing the response
*/
app.listen(port, () => {
  console.log('App listening on '.port)
})
