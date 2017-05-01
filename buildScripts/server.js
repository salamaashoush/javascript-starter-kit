/**
 * Created by salamaashoush on 20/04/17.
 */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

const app=express();
const port =3000;
const compiler=webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  publicPath:config.output.publicPath
}))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../src/index.html'));
});
app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port,(err)=>{
  if(err){
    console.log(err.message);
  }else{
    open('http://localhost:'+port);
  }
});
