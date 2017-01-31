
var Pricing = React.createClass({
getInitialState(){

  return {action:"bitcoin",box1:1,box2:0,box3:0,box4:0,mbox1:0,mbox2:0,mbox3:0,mbox4:0}
},
bitcoin(){

  this.setState({action:"bitcoin",box1:1,box2:0,box3:0,box4:0});
},
zcash(){

  this.setState({action:"zcash",box1:0,box2:1,box3:0,box4:0});
},
etherium(){

  this.setState({action:"etherium",box1:0,box2:0,box3:1,box4:0});
},
x11(){
  this.setState({action:"x11",box1:0,box2:0,box3:0,box4:1});
},
mouseEnterBox1(){
  this.setState({mbox1:1,mbox2:0,mbox3:0,mbox4:0})
},
mouseExitBox(){
  this.setState({mbox1:0,mbox2:0,mbox3:0,mbox4:0})
},
mouseEnterBox2(){
  this.setState({mbox1:0,mbox2:1,mbox3:0,mbox4:0})
},

mouseEnterBox3(){
  this.setState({mbox1:0,mbox2:0,mbox3:1,mbox4:0})
},

mouseEnterBox4(){
  this.setState({mbox1:0,mbox2:0,mbox3:0,mbox4:1})
},


render(){
  var bitStyle = {
         background:"#46b9e3",
         color: "#fff"
     };
     var zcashStyle = {
            background:"#46b9e3",
            color: "#fff"
        };
        var etheriumStyle = {
               background:"#46b9e3",
               color: "#fff"
           };
           var x11Style = {
                  background:"#46b9e3",
                  color: "#fff"}
            if(this.state.box1 == 1)
            { bitStyle['background'] = '#c4d114'
              bitStyle['color'] = '#171717'}

            if(this.state.box2 == 1){
              zcashStyle['background'] = '#c4d114'
              zcashStyle['color']='#171717'
            }
            if(this.state.box3 == 1){
              etheriumStyle['background'] = '#c4d114'
              etheriumStyle['color']='#171717'
           }
          if(this.state.box4 == 1){
              x11Style['background'] = '#c4d114'

              x11Style['color']='#171717'
            }
            var box1Style = {
                  backgroundColor: "white"

               }
               var box2Style = {
                      backgroundColor: "white"
                  }
                  var box3Style = {
                      backgroundColor: "white"
                     }



  switch (this.state.action) {

    case "bitcoin":
                return(
                  <div>
                    <div className="thm-container">
                      <div className = "row">
                              <div className = "col-md-3" >
                                  <tab4></tab4>  <button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin} >Bitcoin mining</button>
                              </div>
                              <div className = "col-md-3">
                                  <tab4></tab4>   <button className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash} >zcash mining</button>
                              </div>
                              <div className = "col-md-3">
                                  <tab4></tab4>     <button className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button>
                              </div>
                              <div class="col-md-3">
                                <tab4></tab4><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button>
                              </div>
                      </div>
                      <div className="row">
                           <div className="col-md-3">
                                      <div className="box1 hvr-sink" >
                                            <br></br>
                                            <h2>Gold</h2>
                                            <p>starter</p>

                                            <div className="decor-line"></div>
                                              <h1>$30</h1>
                                              <div className="decor-line"></div>
                                               <br></br>
                                               <br></br>
                                             <h2>200 GH/s</h2>
                                             <br></br>
                                            <p>Bitcoin mining lifetime contract</p>
                                            <p>Has maintenance fee</p>
                                             <br></br>
                                            <button data-animation="animated fadeInLeft"  className="thm-button1">purchase plan</button>
                                        </div>

                           </div>
                           <div className="col-md-3">
                                <div className="box1 hvr-sink">
                                     <br></br>
                                   <h2>Platinum</h2>
                                   <p>Best Buy</p>
                                    <div className="decor-line"></div>
                                       <h1>$350</h1>
                                       <div className="decor-line"></div>
                                      <br></br><br></br>
                                     <h2>2500 GH/s</h2>
                                       <br></br>
                                   <p>Bitcoin mining lifetime contract</p>
                                   <p>Has maintenance fee</p>
                                   <br></br>
                                   <button className="thm-button1"  >purchase plan</button>
                               </div>



                           </div>
                           <div className="col-md-3">
                                   <div className="box1 hvr-sink">
                                     <br></br>
                                   <h2>Diamond</h2>
                                   <p>Max Profit</p>
                                   <div className="decor-line"></div>
                                       <h1>$1950</h1>
                                     <div className="decor-line"></div>
                                     <br></br><br></br>
                                   <h2>15,000 GH/s</h2>
                                     <br></br>
                                   <p>Bitcoin mining lifetime contract</p>
                                   <p>Has maintenance fee</p>
                                   <br></br>
                                   <button className="thm-button1"  >purchase plan</button>
                                 </div>

                           </div>
                           <div className="col-md-3">
                              <Slider/>
                           </div>
                </div>
              </div>
              </div>

                )

                case "zcash":
                            return(
                              <div>
                                <div className="thm-container">
                                  <div className = "row">
                                          <div className = "col-md-3" >
                                              <tab4></tab4>  <button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin} >Bitcoin mining</button>
                                          </div>
                                          <div className = "col-md-3">
                                              <tab4></tab4>   <button className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash} >zcash mining</button>
                                          </div>
                                          <div className = "col-md-3">
                                              <tab4></tab4>     <button className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button>
                                          </div>
                                          <div class="col-md-3">
                                            <tab4></tab4><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button>
                                          </div>
                                  </div>
                                  <div className="row">
                                       <div className="col-md-3">
                                                  <div className="box1 hvr-sink" >
                                                    <br></br>
                                                        <h2>Gold</h2>
                                                        <p>starter</p>

                                                        <div className="decor-line"></div>
                                                          <h1>$30</h1>
                                                          <div className="decor-line"></div>
                                                          <br></br><br></br>
                                                          <h2>200 GH/s</h2>
                                                           <br></br>
                                                        <p>Bitcoin mining lifetime contract</p>
                                                        <p>Has maintenance fee</p>
                                                         <br></br>
                                                        <button data-animation="animated fadeInLeft"  className="thm-button1">purchase plan</button>
                                                    </div>

                                       </div>
                                       <div className="col-md-3">
                                            <div className="box1 hvr-sink">
                                              <br></br>
                                               <h2>Platinum</h2>
                                               <p>Best Buy</p>
                                                <div className="decor-line"></div>
                                                   <h1>$350</h1>
                                                   <div className="decor-line"></div>
                                                   <br></br><br></br>
                                                 <h2>2500 GH/s</h2>
                                                   <br></br>
                                               <p>Bitcoin mining lifetime contract</p>
                                               <p>Has maintenance fee</p>
                                               <br></br>
                                               <button className="thm-button1"  >purchase plan</button>
                                           </div>



                                       </div>
                                       <div className="col-md-3">
                                               <div className="box1 hvr-sink">
                                                 <br></br>
                                               <h2>Diamond</h2>
                                               <p>Max Profit</p>
                                               <div className="decor-line"></div>
                                                   <h1>$1950</h1>
                                                 <div className="decor-line"></div>
                                                 <br></br><br></br>
                                               <h2>15,000 GH/s</h2>
                                                 <br></br>
                                               <p>Bitcoin mining lifetime contract</p>
                                               <p>Has maintenance fee</p>
                                               <br></br>
                                               <button className="thm-button1"  >purchase plan</button>
                                             </div>

                                       </div>
                                       <div className="col-md-3">
                                          <Slider/>
                                       </div>
                            </div>
                          </div>
                          </div>

                            )
                case "etherium":
                                        return(
                                          <div>
                                            <div className="thm-container">
                                              <div className = "row">
                                                      <div className = "col-md-3" >
                                                          <tab4></tab4>  <button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin} >Bitcoin mining</button>
                                                      </div>
                                                      <div className = "col-md-3">
                                                          <tab4></tab4>   <button className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash} >zcash mining</button>
                                                      </div>
                                                      <div className = "col-md-3">
                                                          <tab4></tab4>     <button className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button>
                                                      </div>
                                                      <div class="col-md-3">
                                                        <tab4></tab4><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button>
                                                      </div>
                                              </div>
                                              <div className="row">
                                                   <div className="col-md-3">
                                                              <div className="box1 hvr-sink" >
                                                                <br></br>
                                                                    <h2>Gold</h2>
                                                                    <p>starter</p>

                                                                    <div className="decor-line"></div>
                                                                      <h1>$30</h1>
                                                                      <div className="decor-line"></div>
                                                                      <br></br><br></br>
                                                                      <h2>200 GH/s</h2>
                                                                        <br></br>
                                                                    <p>Bitcoin mining lifetime contract</p>
                                                                    <p>Has maintenance fee</p>
                                                                     <br></br>
                                                                    <button data-animation="animated fadeInLeft"  className="thm-button1">purchase plan</button>
                                                                </div>

                                                   </div>
                                                   <div className="col-md-3">
                                                        <div className="box1 hvr-sink">
                                                          <br></br>
                                                           <h2>Platinum</h2>
                                                           <p>Best Buy</p>
                                                            <div className="decor-line"></div>
                                                               <h1>$350</h1>
                                                               <div className="decor-line"></div>
                                                               <br></br><br></br>
                                                             <h2>2500 GH/s</h2>
                                                               <br></br>
                                                           <p>Bitcoin mining lifetime contract</p>
                                                           <p>Has maintenance fee</p>
                                                           <br></br>
                                                           <button className="thm-button1"  >purchase plan</button>
                                                       </div>



                                                   </div>
                                                   <div className="col-md-3">
                                                           <div className="box1 hvr-sink">
                                                             <br></br>
                                                           <h2>Diamond</h2>
                                                           <p>Max Profit</p>
                                                           <div className="decor-line"></div>
                                                               <h1>$1950</h1>
                                                             <div className="decor-line"></div>
                                                             <br></br><br></br>
                                                           <h2>15,000 GH/s</h2>
                                                             <br></br>
                                                           <p>Bitcoin mining lifetime contract</p>
                                                           <p>Has maintenance fee</p>
                                                           <br></br>
                                                           <button className="thm-button1"  >purchase plan</button>
                                                         </div>

                                                   </div>
                                                   <div className="col-md-3">
                                                      <Slider/>
                                                   </div>
                                        </div>
                                      </div>
                                      </div>

                                        )

                case "x11":
                                                    return(
                                                      <div>
                                                        <div className="thm-container">
                                                          <div className = "row">
                                                                  <div className = "col-md-3" >
                                                                      <tab4></tab4>  <button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin} >Bitcoin mining</button>
                                                                  </div>
                                                                  <div className = "col-md-3">
                                                                      <tab4></tab4>   <button className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash} >zcash mining</button>
                                                                  </div>
                                                                  <div className = "col-md-3">
                                                                      <tab4></tab4>     <button className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button>
                                                                  </div>
                                                                  <div class="col-md-3">
                                                                    <tab4></tab4><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button>
                                                                  </div>
                                                          </div>
                                                          <div className="row">
                                                               <div className="col-md-3">
                                                                          <div className="box1 hvr-sink" >
                                                                            <br></br>
                                                                                <h2>Gold</h2>
                                                                                <p>starter</p>

                                                                                <div className="decor-line"></div>
                                                                                  <h1>$30</h1>
                                                                                  <div className="decor-line"></div>
                                                                                  <br></br><br></br>
                                                                                  <h2>200 GH/s</h2>
                                                                                   <br></br>
                                                                                <p>Bitcoin mining lifetime contract</p>
                                                                                <p>Has maintenance fee</p>
                                                                                 <br></br>
                                                                                <button data-animation="animated fadeInLeft"  className="thm-button1">purchase plan</button>
                                                                            </div>

                                                               </div>
                                                               <div className="col-md-3">
                                                                    <div className="box1 hvr-sink">
                                                                      <br></br>
                                                                       <h2>Platinum</h2>
                                                                       <p>Best Buy</p>
                                                                        <div className="decor-line"></div>
                                                                           <h1>$350</h1>
                                                                           <div className="decor-line"></div>
                                                                           <br></br><br></br>
                                                                         <h2>2500 GH/s</h2>
                                                                           <br></br>
                                                                       <p>Bitcoin mining lifetime contract</p>
                                                                       <p>Has maintenance fee</p>
                                                                       <br></br>
                                                                       <button className="thm-button1"  >purchase plan</button>
                                                                   </div>



                                                               </div>
                                                               <div className="col-md-3">
                                                                       <div className="box1 hvr-sink">
                                                                         <br></br>
                                                                       <h2>Diamond</h2>
                                                                       <p>Max Profit</p>
                                                                       <div className="decor-line"></div>
                                                                           <h1>$1950</h1>
                                                                         <div className="decor-line"></div>
                                                                         <br></br><br></br>
                                                                       <h2>15,000 GH/s</h2>
                                                                         <br></br>
                                                                       <p>Bitcoin mining lifetime contract</p>
                                                                       <p>Has maintenance fee</p>
                                                                       <br></br>
                                                                       <button className="thm-button1"  >purchase plan</button>
                                                                     </div>

                                                               </div>
                                                               <div className="col-md-3">
                                                                  <Slider/>
                                                               </div>
                                                    </div>
                                                  </div>
                                                  </div>

                                                    )

  }
}
});
var Slider = React.createClass({
  getInitialState: function() {
    return {value: 0,price : 0};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value,price:event.target.value*25});
  },
  render: function() {
    return (
      <div>

      <div className="box1 hvr-sink">
        <br></br>
        <h2>Custom Plan</h2>
        <p>Create a custom plan</p>
          <div className="decor-line"></div>
            <h1>${this.state.price}</h1>
            <div className="decor-line"></div>
          <br></br><br></br>
          <h2>{this.state.value} TH/s</h2>
         <br></br>
        <input
         id="typeinp"
         type="range"
         min="0" max="100"
         value={this.state.value}
         onChange={this.handleChange}
         step="1"/>
       <br></br>
       <p>Use sliders or enter value</p>
       <br></br>
       <button className="thm-button1" >purchase plan</button>
      </div>
    </div>
  );
  }
});

ReactDOM.render(<Pricing/> ,document.getElementById("price"));
