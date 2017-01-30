class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};


    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log("hi came here");
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
        event.preventDefault();
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

}

  render() {
    return (

            <div  className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-grp">
                    <label>Your Name</label>
                    <input id="name"  ref="name" type="text" name="name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <label>Your Email</label>
                    <input id="email" ref="email" type="text" name="email"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-grp">
                    <label>Phone</label>
                    <input id="phone" ref="phone" type="text" name="phone"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-grp">
                    <label>Subject</label>
                    <input id="subject" ref="subject" type="text" name="subject"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-grp">
                    <label>Message</label>
                    <textarea id="message" ref="queries" name="message"></textarea>
                    <button onClick={this.handleSubmit} className="thm-button inverse">submit now</button>
                  </div>
                  <div></div>
                    <label>{this.state.message}</label>
              </div>
              </div>
            </div>







    );
  }
}




ReactDOM.render(<Contact/>,document.getElementById("reactcontact"));
