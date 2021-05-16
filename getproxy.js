const axios = require('axios');
const fs = require('fs');

//get socks4
function sck4(){
    axios.get("https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks4&timeout=10000&country=all").then(rep =>{
        fs.writeFile('./proxyfiles/socks4.txt', rep.data, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          })
    }).catch();
}
function sck5(){
    axios.get("https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks5&timeout=10000&country=all").then(rep =>{
        fs.writeFile('./proxyfiles/socks5.txt', rep.data, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          })
    }).catch();
}
function httpP(){
    axios.get("https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all").then(rep =>{
        fs.writeFile('./proxyfiles/http.txt', rep.data, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          })
    }).catch();
}
module.exports={sck4,sck5,httpP};


