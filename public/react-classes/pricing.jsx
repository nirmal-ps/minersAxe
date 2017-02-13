
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
                                <tab1></tab1><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>Monero mining</button>
                              </div>
                      </div>
                      <br></br>
                      <div className="row">
                           <div className="col-md-3">
                                      <div className="box1 hvr-sink" >
                                            <br></br>
                                            <h2>Gold</h2>
                                            <p>starter</p>

                                            <div className="decor-line"></div>
                                              <h1>$25</h1>
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
                                       <h1>$300</h1>
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
                                       <h1>$1100</h1>
                                     <div className="decor-line"></div>
                                     <br></br><br></br>
                                   <h2>10,000 GH/s</h2>
                                     <br></br>
                                   <p>Bitcoin mining lifetime contract</p>
                                   <p>Has maintenance fee</p>
                                   <br></br>
                                   <button className="thm-button1"  >purchase plan</button>
                                 </div>

                           </div>
                           <div className="col-md-3">
                              <CustomPlan mid="2.5" midPrice="300" measure="th/s" type="bit"/>
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
                                            <tab1></tab1><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>Monero mining</button>
                                          </div>
                                  </div>
                                  <br></br>
                                  <div className="row">
                                       <div className="col-md-3">
                                                  <div className="box1 hvr-sink" >
                                                    <br></br>
                                                        <h2>Gold</h2>
                                                        <p>starter</p>

                                                        <div className="decor-line"></div>
                                                          <h1>$14</h1>
                                                          <div className="decor-line"></div>
                                                          <br></br><br></br>
                                                          <h2>2 H/s</h2>
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
                                                   <h1>$125</h1>
                                                   <div className="decor-line"></div>
                                                   <br></br><br></br>
                                                 <h2>20 H/s</h2>
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
                                                   <h1>$1200</h1>
                                                 <div className="decor-line"></div>
                                                 <br></br><br></br>
                                               <h2>200 H/s</h2>
                                                 <br></br>
                                               <p>Bitcoin mining lifetime contract</p>
                                               <p>Has maintenance fee</p>
                                               <br></br>
                                               <button className="thm-button1"  >purchase plan</button>
                                             </div>

                                       </div>
                                       <div className="col-md-3">
                                          <CustomPlan mid="150" midPrice="1050" measure="h/s" type="zcash"/>
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
                                                        <tab1></tab1><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>Monero mining</button>
                                                      </div>
                                              </div>
                                              <br></br>
                                              <div className="row">
                                                   <div className="col-md-3">
                                                              <div className="box1 hvr-sink" >
                                                                <br></br>
                                                                    <h2>Gold</h2>
                                                                    <p>starter</p>

                                                                    <div className="decor-line"></div>
                                                                      <h1>$28</h1>
                                                                      <div className="decor-line"></div>
                                                                      <br></br><br></br>
                                                                      <h2>1 MH/s</h2>
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
                                                               <h1>$850</h1>
                                                               <div className="decor-line"></div>
                                                               <br></br><br></br>
                                                             <h2>30 MH/s</h2>
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
                                                               <h1>$2600</h1>
                                                             <div className="decor-line"></div>
                                                             <br></br><br></br>
                                                           <h2>100 MH/s</h2>
                                                             <br></br>
                                                           <p>Bitcoin mining lifetime contract</p>
                                                           <p>Has maintenance fee</p>
                                                           <br></br>
                                                           <button className="thm-button1"  >purchase plan</button>
                                                         </div>

                                                   </div>
                                                   <div className="col-md-3">
                                                      <CustomPlan mid="150" midPrice="4200" measure="mh/s" type="ethe"/>
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
                                                                    <tab1></tab1><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>Monero mining</button>
                                                                  </div>
                                                          </div>
                                                          <br></br>
                                                          <div className="row">
                                                               <div className="col-md-3">
                                                                          <div className="box1 hvr-sink" >
                                                                            <br></br>
                                                                                <h2>Gold</h2>
                                                                                <p>starter</p>

                                                                                <div className="decor-line"></div>
                                                                                  <h1>$150</h1>
                                                                                  <div className="decor-line"></div>
                                                                                  <br></br><br></br>
                                                                                  <h2>65 H/s</h2>
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
                                                                           <h1>$1300</h1>
                                                                           <div className="decor-line"></div>
                                                                           <br></br><br></br>
                                                                         <h2>650 H/s</h2>
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
                                                                           <h1>$1900</h1>
                                                                         <div className="decor-line"></div>
                                                                         <br></br><br></br>
                                                                       <h2>10,000 H/s</h2>
                                                                         <br></br>
                                                                       <p>Bitcoin mining lifetime contract</p>
                                                                       <p>Has maintenance fee</p>
                                                                       <br></br>
                                                                       <button className="thm-button1"  >purchase plan</button>
                                                                     </div>

                                                               </div>
                                                               <div className="col-md-3">
                                                                  <CustomPlan mid="200" midPrice="460" measure="h/s" type="monero" />
                                                               </div>
                                                    </div>
                                                  </div>
                                                  </div>

                                                    )

  }
}
});
class CustomPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state ={value:this.props.mid,price :this.props.midPrice};
     this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    var price,value;
    var bitMap = {.2:25,.3:37,.4:15,.5:63,.6:75,.8:100,1:125,1.5:187.5,2:250,2.5:300,3:375,3.5:438,5:625,7.5:938,10:1100,20:2500,40:5000,60:7500,100:12500}
    var bit = [.2,.3,.4,.5,.6,.8,1,1.5,2,2.5,3,3.5,5,7.5,10,20,40,60,100];
    var zcash=[2,5,6,10,15,20,50,70,100,150,200,250,300,400,500,600,700,800,1000]
    var zcashMap = {2:14,5:35,6:42,10:70,15:105,20:125,50:350,70:490,100:700,150:1050,200:1200,250:1500,300:2100,400:2800,500:3500,600:4000,700:4900,800:5600,1000:7000}
    var ethe = [1,2,5,10,20,30,50,70,100,150,200,250,300,400,500,600,700,800,1000]
    var etheMap = {1:28,2:56,5:140,10:250,20:560,30:850,50:1400,70:1960,100:2600,150:4200,200:5600,250:7000,300:8400,400:11200,500:14000,600:16800,700:19600,800:22400,1000:25000}
    var monero = [1,2,5,10,20,30,50,65,100,200,300,500,650,800,1000,1500,2000,3000,5000]
    var moneroMap={1:3,2:5,5:12,10:24,20:46,30:69,50:115,65:150,100:230,200:460,300:690,500:1150,650:1300,800:1800,1000:2300,1500:3400,2000:4500,3000:6500,5000:10000}
     switch (this.props.type) {
       case "bit":value = bit[event.target.value];
                  price = bitMap[bit[event.target.value]]
                  break;
       case "zcash":
                 value = zcash[event.target.value];
                  price = zcashMap[zcash[event.target.value]]
                  break;
      case "ethe":
                  value = ethe[event.target.value];
                   price = etheMap[ethe[event.target.value]]
                   break;
      case "monero":
                    value = monero[event.target.value];
                    price = moneroMap[monero[event.target.value]]
                    break;
}
     console.log(this.state.value,this.state.price);
    this.setState({value,price});
  }
  componentDidMount(){
    console.log(this.props.mid,this.props.midPrice);
    this.setState({value:this.props.mid,price:this.props.midPrice})
  }
  render(){
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
          <h2>{this.state.value} {this.props.measure}</h2>
         <br></br>
        <input className="range"
         id="typeinp"
         type="range"
         min="0" max="18"

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
}



ReactDOM.render(<Pricing/> ,document.getElementById("price"));
