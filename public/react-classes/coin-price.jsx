class CoinPrice extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    function getJSON(url) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('get', url, true);
          xhr.withCredentials = false;
          xhr.responseType = 'json';
          xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
              resolve(xhr.response);
            } else {
              reject(status);
            }
          };
          xhr.send();
        });
      }
    var urlBit = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";
    var urlEthe = "https://api.coinmarketcap.com/v1/ticker/ethereum/";
    var urlZcash = "https://api.coinmarketcap.com/v1/ticker/zcash/";
    var urlMone = "https://api.coinmarketcap.com/v1/ticker/monero/";


      getJSON(urlBit).then(function(data) {
        dconsole.log(data)
        var div = document.getElementById('bitcoinPrice')

        div.innerHTML= "$"+Math.round(data[0].price_usd * 100) / 100
           //display the result in an HTML element
        }, function(status) { //error detection....
          alert('Something went wrong.');
        });
        getJSON(urlEthe).then(function(data) {
          dconsole.log(data)
          var div = document.getElementById('ethePrice')

          div.innerHTML="$"+Math.round(data[0].price_usd * 100) / 100
             //display the result in an HTML element
          }, function(status) { //error detection....
            alert('Something went wrong.');
          });
          getJSON(urlZcash).then(function(data) {
            var div = document.getElementById('zcashPrice')
             console.log(div,data[0].price_usd);
            div.innerHTML="$"+Math.round(data[0].price_usd * 100) / 100
               //display the result in an HTML element
            }, function(status) { //error detection....
              alert('Something went wrong.');
            });
            getJSON(urlMone).then(function(data) {
              var div = document.getElementById('monePrice')
                console.log(div,data[0].price_usd);
              div.innerHTML="$"+Math.round(data[0].price_usd * 100) / 100
                 //display the result in an HTML element
              }, function(status) { //error detection....
                alert('Something went wrong.');
              });


  }


  render() {
    return (
      <div>
        <div className="thm-container">
          <div className="row">
            <div className="col-md-6">
              <div className="sec-title">
                <h2 className="color-white">Coins</h2>
                <div className="decor-line"></div>
              </div>
              <div className="testi-carousel owl-theme ">
                <div className="item">
                  <div className="single-testimonial">
                    <div className="top-box">
                      <div className="img-box"><img src="images/logos/bitcoin logo.png" alt=""/></div>

                      <div className="text-box">
                        <div className="sec-title">
                          <h2 className="color-white">BitCoin</h2>
                          <h3 id="bitcoinPrice"></h3>
                        </div>


                      </div>
                    </div>
                    <div className="bottom-box">
                      <p>Bitcoin is a cryptocurrency and a payment system invented by an unidentified programmer, or group of programmers, under the name of Satoshi Nakamoto.The system is peer-to-peer and transactions take place between users directly, without an intermediary. Bitcoin is the largest of its kind in terms of total market value.</p>
                      <br></br>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="single-testimonial">
                    <div className="top-box">
                      <div className="img-box"><img src="images/logos/ethereum logo.png" alt=""/></div>
                      <div className="text-box">
                        <div className="sec-title">
                          <h2 className="color-white">ethereum</h2>
                          <h3 id="ethePrice"></h3>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-box">
                      <p>Ethereum is an open source public blockchain-based distributed computing platform, featuring smart contract functionality.The Ethereum software project was initially developed in early 2014 by a Swiss company, Ethereum Switzerland GmbH (EthSuisse). </p>

                  </div>
                  </div>
                </div>


              </div>

            </div>
            <div className="col-md-6">
              <div className="sec-title">
                <h2 className="color-white"></h2>
                <br></br>
                <br></br>
              </div>
              <div className="testi-carousel owl-theme ">
                <div className="item">
                  <div className="single-testimonial">
                    <div className="top-box">
                      <div className="img-box"><img src="images/logos/zcash logo.png" alt=""/></div>

                      <div className="text-box">
                        <div className="sec-title">
                          <h2 className="color-white">Z-cash</h2>
                          <h3 id="zcashPrice"></h3>
                        </div>


                      </div>
                    </div>
                    <div className="bottom-box">

                      <p>Zcash is a decentralized and open-source cryptocurrency developed by the Zcash Electric Coin Company (ZECC) that offers privacy and selective transparency of transactions.Zcash is the result of continuous efforts by developers to create cryptographic protocols that offer greater privacy.</p>
                    
                    <br></br><br></br>

                  </div>
                  </div>
                </div>

                <div className="item">
                  <div className="single-testimonial">
                    <div className="top-box">
                      <div className="img-box"><img src="images/logos/monero logo.png" alt=""/></div>
                      <div className="text-box">
                        <div className="sec-title">
                          <h2 className="color-white">monero</h2>
                          <h3 id="monePrice"></h3>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-box">
                      <p>Monero (XMR) is an open-source cryptocurrency created in April 2014 that focuses on privacy, decentralisation and scalability. Monero experienced rapid growth in market capitalization (from US$5M to US$185M) and transaction volume during the year 2016, partly due to adoption by major darknet market AlphaBay at the end of summer 2016.</p>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>






  </div>
    );
  }
}

ReactDOM.render(<CoinPrice/>,document.getElementById("coinprice"));