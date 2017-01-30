
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
                  <div id = "table">
                     <table >
                       <thead>
                       <tr>
                           <th><tab4></tab4><button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin} >Bitcoin mining</button></th>
                           <th><tab4></tab4><button className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash} >zcash mining</button></th>
                           <th><tab4></tab4><button className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button></th>
                           <th><tab1></tab1><button className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button></th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                            <td><br></br><div className="box1 hvr-sink" >
                                    <h2>Gold</h2>
                                    <p>starter</p>
                                    <br></br>
                                        <h1>$30</h1>
                                        <br></br>
                                        <h2>200 GH/s</h2>
                                        <br></br>
                                    <p>Bitcoin mining lifetime contract</p>
                                    <p>Has maintenance fee</p>
                                     <br></br>
                                    <button data-animation="animated fadeInLeft"  className="thm-button1">purchase plan</button>
                                </div></td>
                              <td><br></br><div className="box1 hvr-sink">
                                    <h2>Platinum</h2>
                                    <p>Best Buy</p>
                                     <br></br>
                                        <h1>$350</h1>
                                        <br></br>
                                        <h2>2500 GH/s</h2>
                                        <br></br>
                                    <p>Bitcoin mining lifetime contract</p>
                                    <p>Has maintenance fee</p>
                                    <br></br>
                                    <button className="thm-button1"  >purchase plan</button>
                                </div></td>
                              <td><br></br><div className="box1 hvr-sink">
                              <h2>Diamond</h2>
                              <p>Max Profit</p>
                              <br></br>
                                  <h1>$1950</h1>
                                <br></br>
                                <h2>15,000 GH/s</h2>
                                <br></br>
                              <p>Bitcoin mining lifetime contract</p>
                              <p>Has maintenance fee</p>
                              <br></br>
                              <button className="thm-button1"  >purchase plan</button>
                            </div></td>
                            <td><br></br>
                              <Slider/>
                            </td>
                      </tr>
                    </tbody>
                     </table>
                   </div>

                )

                case "zcash":
                            return(
                              <div id = "table">
                                 <table>
                                   <thead>
                                   <tr>
                                       <th><tab4></tab4><button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin}>Bitcoin mining</button></th>
                                       <th><tab4></tab4><button class="zcash" className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash}>zcash mining</button></th>
                                       <th><tab4></tab4><button class="etherium" className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button></th>
                                       <th><tab1></tab1><button class="x11" className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button></th>
                                   </tr>
                                 </thead>
                                 <tbody>
                                   <tr>
                                        <td><br></br><div className="box1 hvr-sink" >
                                                <h2>Starter</h2>
                                                <p>starter</p>
                                                <br></br>
                                                    <h1>$29</h1>
                                                    <br></br>
                                                    <h2>3.12 H/s</h2>
                                                    <br></br>
                                                <p>Zcash mining 1 year contract</p>
                                                <p>No maintanace fee</p>
                                                <br></br>
                                                <button className="thm-button1"  >purchase plan</button>
                                            </div></td>
                                          <td><br></br><div className="box1 hvr-sink" >
                                                <h2>Advanced</h2>
                                                <p>Best Buy</p>
                                                <br></br>
                                                    <h1>$289</h1>
                                                    <br></br>
                                                    <h2>31.2 H/s</h2>
                                                    <br></br>
                                                <p>Zcash mining 1 year contract</p>
                                                <p>No maintenance fee</p>
                                                <br></br>
                                              <button className="thm-button1"  >purchase plan</button>
                                            </div></td>
                                          <td><br></br><div className="box1 hvr-sink" >
                                          <h2>Professional</h2>
                                          <p>Max Profit</p>
                                          <br></br>
                                              <h1>$2699</h1>
                                              <br></br>
                                              <h2>312 H/s</h2>
                                              <br></br>

                                          <p>Zcash mining 1 year contract</p>
                                          <p>No maintenance fee</p>
                                            <br></br>
                                          <button className="thm-button1"  >purchase plan</button>
                                        </div></td>
                                        <td><br></br>
                                          <Slider/>
                                        </td>
                                  </tr>
                                </tbody>
                                 </table>
                               </div>

                            )
                case "etherium":
                                        return(
                                          <div id = "table">
                                             <table>
                                               <thead>
                                               <tr>
                                                   <th><tab4></tab4><button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin}>Bitcoin mining</button></th>
                                                   <th><tab4></tab4><button class="zcash" style={zcashStyle} className="butbit hvr-float-shadow" onClick={this.zcash}>zcash mining</button></th>
                                                   <th><tab4></tab4><button class="etherium" style={etheriumStyle} className="butbit hvr-float-shadow" onClick={this.etherium}>etherium mining</button></th>
                                                   <th><tab1></tab1><button class="x11" className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button></th>
                                               </tr>
                                             </thead>
                                             <tbody>
                                               <tr>
                                                    <td><br></br><div className="box1 hvr-sink">
                                                            <h2>Small</h2>
                                                            <p>2 year Ethash contract flat rate</p>
                                                              <br></br>
                                                              <h1>$33</h1>
                                                              <br></br>
                                                                <h2>1 MH/s</h2>
                                                                <br></br>
                                                            <p>Ethereum  mining 1 year contract</p>
                                                            <p>No maintenance fee</p>
                                                            <br></br>
                                                            <button className="thm-button1">purchase plan</button>
                                                        </div></td>
                                                      <td><br></br><div className="box1 hvr-sink">
                                                            <h2>Medium</h2>
                                                            <p>2 year Ethash contract flat rate</p>
                                                            <br></br>
                                                              <h1>$930</h1>
                                                              <br></br>
                                                                <h2>30 MH/s</h2>
                                                                <br></br>
                                                            <p>Ethereum mining 2 contract</p>
                                                            <p>No maintenance fee</p>
                                                            <br></br>
                                                            <button className="thm-button1"  >purchase plan</button>
                                                        </div></td>
                                                      <td><br></br><div className="box1 hvr-sink">
                                                      <h2>Large</h2>
                                                      <p>2 year Ethash contract flat rate</p>
                                                      <br></br>
                                                          <h1>$2900</h1>
                                                          <br></br>
                                                          <h2>100 MH/s</h2>
                                                          <br></br>
                                                      <p>Ethereum mining lifetime contract</p>
                                                      <p>No maintenance fee</p>
                                                      <br></br>
                                                      <button className="thm-button1">purchase plan</button>
                                                    </div></td>
                                                    <td>
                                                      <Slider/>
                                                    </td>
                                              </tr>
                                            </tbody>
                                             </table>
                                           </div>

                                        )

                case "x11":
                                                    return(
                                                      <div id = "table">
                                                         <table>
                                                           <thead>
                                                           <tr>
                                                               <th><tab4></tab4><button  className="butbit hvr-float-shadow" style={bitStyle} onClick={this.bitcoin}>Bitcoin mining</button></th>
                                                               <th><tab4></tab4><button class="zcash" className="butbit hvr-float-shadow" style={zcashStyle} onClick={this.zcash}>zcash mining</button></th>
                                                               <th><tab4></tab4><button class="etherium" className="butbit hvr-float-shadow" style={etheriumStyle} onClick={this.etherium}>etherium mining</button></th>
                                                               <th><tab1></tab1><button class="x11" className="butbit hvr-float-shadow" style={x11Style} onClick={this.x11}>x11 mining</button></th>
                                                           </tr>
                                                         </thead>
                                                         <tbody>
                                                           <tr>
                                                                <td><br></br><div className="box1 hvr-sink">
                                                                        <h2>Gold</h2>
                                                                        <p>starter</p>
                                                                        <br></br>
                                                                            <h1>$30</h1>
                                                                            <br></br>
                                                                            <h2>200 GH/s</h2>
                                                                            <br></br>
                                                                        <p>Bitcoin mining lifetime contract</p>
                                                                        <p>Has maintenance fee</p>
                                                                        <br></br>
                                                                        <button className="thm-button1">purchase plan</button>
                                                                    </div></td>
                                                                  <td><br></br><div className="box1 hvr-sink">
                                                                        <h2>Platinum</h2>
                                                                        <p>Best Buy</p>
                                                                        <br></br>
                                                                            <h1>$350</h1>
                                                                            <br></br>

                                                                            <h2>2500 GH/s</h2>
                                                                            <br></br>
                                                                        <p>Bitcoin mining lifetime contract</p>
                                                                        <p>Has maintenance fee</p>
                                                                        <br></br>
                                                                        <button className="thm-button1"  >purchase plan</button>
                                                                    </div></td>
                                                                  <td><br></br><div className="box1 hvr-sink">
                                                                  <h2>Diamond</h2>
                                                                  <p>Max Profit</p>
                                                                  <br></br>
                                                                      <h1>$1950</h1>
                                                                      <br></br>
                                                                      <h2>15,000 GH/s</h2>
                                                                      <br></br>
                                                                  <p>Bitcoin mining lifetime contract</p>
                                                                  <p>Has maintenance fee</p>
                                                                    <br></br>
                                                                  <button className="thm-button1"  >purchase plan</button>
                                                                </div></td>
                                                                <td><br></br>
                                                                  <Slider/>
                                                                </td>
                                                          </tr>
                                                        </tbody>
                                                         </table>
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
        <h2>Custom Plan</h2>
        <p>Create a custom Bitcoin mining plan</p>

            <h2>${this.state.price}</h2>
            <br></br>
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
