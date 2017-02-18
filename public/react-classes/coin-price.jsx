class CoinPrice extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    function getJSON(url) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('get', url, true);
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
        var div = document.getElementById('bitcoinPrice')

        div.innerHTML= "$"+Math.round(data[0].price_usd * 100) / 100
           //display the result in an HTML element
        }, function(status) { //error detection....
          alert('Something went wrong.');
        });
        getJSON(urlEthe).then(function(data) {
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
                      <p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
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
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
                    </div>
                  </div>
                </div>


              </div>

            </div>
            <div className="col-md-6">
              <div className="sec-title">
                <h2 className="color-white"><tab7></tab7></h2>
                <div className="decor-line"></div>
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
                      <p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
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
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
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
