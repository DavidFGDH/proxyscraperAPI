const express = require("express");
const app = express();
const proxyget = require('./getproxy')
//const Checker = require('./checker');
const { exec } = require('child_process');
const fs = require('fs');


const port = process.env.PORT || 4000;
app.listen(port, () => {
 console.log("API IS RUNNING ON PORT "+port);
});

app.get('/all',(req,res)=>{
    getallproxies();
    new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
    Checkalls();
    res.send("ok");
})

app.get('/getproxy', function (req, res) {
    getallproxies();
    res.send('Scraper proxy');
});

app.get('/checkall', (req,res)=>{
    Checkalls();
    res.send("ok...")
})
app.get('/dw/:sk4', function(req, res){
    const type= req.params.sk4
    const file = `${__dirname}/proxyfiles/live/`+type.toUpperCase()+`.txt`;
    res.download(file); // Set disposition and send it.
  });

const getallproxies = ()=>{
    proxyget.sck4();
    proxyget.sck5();
    proxyget.httpP();
}
const Checkalls= () =>{
    fs.unlinkSync("proxyfiles/live/SOCKS4.txt")
    fs.unlinkSync("proxyfiles/live/SOCKS5.txt")
    fs.unlinkSync("proxyfiles/live/HTTP.txt")
    exec('node initialchecker.js proxyfiles/socks4.txt 25000', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
        
      });
      exec('node initialchecker.js proxyfiles/http.txt 25000', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
        
      });
      exec('node initialchecker.js proxyfiles/socks5.txt 25000', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
        
      });
}