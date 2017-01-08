var Review = React.createClass({
  getInitialState() {
    return {message:null}
  },

  reviewPst(e) {
    var name = this.refs.name.value
    var phone = this.refs.phone.value
    var email = this.refs.email.value
    var subject = this.refs.subject.value
    var queries = this.refs.queries.value
    var update = this.setState.bind(this);
    String.prototype.isNumber = function(){return /^\d+$/.test(this);}

   if(name && phone && email && subject && queries && email.includes("@") && phone.isNumber()){
      this.refs.name.value = ""
        this.refs.phone.value=""
        this.refs.email.value=""
           this.refs.subject.value=""
           this.refs.queries.value=""
          this.setState.bind(this);

    var params = {name:name,phone:phone,email:email,subject:subject,queries:queries};
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function(res) {
       if (this.readyState == 4 && this.status == 200) {
             update({message:"The message has been sent"})
          }
    }
  xhttp.open("POST", "/review", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(params));
}
else{
  if(!name)
    update({message:"Enter your Name"})
  else if(!email)
    update({message:"Enter your email"})
  else if(!phone)
     update({message:"Enter your Phone Number"})
  else if (!subject) {
    update({message:"Enter subject"})
  }
  else if (!queries) {
    update({message:"Queries can't blank"})

  }
  else if(!email.includes("@")) {
    update({message:"Enter proper email"})
  }
  else {
    update({message:"Phone number should only contain digits"})
  }


}
},

  render() {
    return (
      <div>
             <table>
               <tbody>
                 <tr>
                   <td>
                     <input  id="txt" type="text"   placeholder="Name" ref="name" /><tab1></tab1>
                   </td>
                   <td>
                     <input id="txt" type="text"  placeholder="Phone" ref="phone" /><tab1></tab1>
                  </td>
                   <td>
                    <input id="txt" type="text"  placeholder="Emai" ref="email"/>
                   </td>
                  </tr>
                  <tr>
                    <td>
                      <input id="txt" type="text"  placeholder="Subject" ref="subject" />
                    </td>

                    <td>
                      <input id="txt" type="text"  placeholder="Queries" ref="queries"/>
                   </td>

                    <td>
                     <button id="but" onClick={this.reviewPst} >Send Queries</button>
                    </td>
                   </tr>
                   <tr>
                     <td>
                      <label>{this.state.message}</label>
                     </td>
                   </tr>
               </tbody>
             </table>
          </div>
    )
  }
});


ReactDOM.render(<Review/>,document.getElementById("entrance-point"));
