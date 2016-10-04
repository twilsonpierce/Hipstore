import React from 'react';

const Signup = React.createClass({

  render:function(){
    let types = ["name", "email", "password"]
    let inputs = types.map(function(type, i){
      let isPassword = (type === "password") ? "password" : "text"
      return (
        <div key={i}>
          <label>{type}</label>
          <input name={type} type={isPassword} placeholder={type}/>
        </div>
      )
    })
    return (
      <div className="sign">
        <section className="signup">
          <h1>Sign Up</h1>
          <p>Create an account to expedite future checkouts, receive emails, discounts and FREE GUAC.</p>
          {inputs}
          <button type="submit">Where's the Guac</button>
        </section>
        <section class="login">
          <h1>Login</h1>
          <p>Create an account to expedite future checkouts, receive emails, discounts and FREE GUAC.</p>
          <div>
            <label>Email</label>
            <input name="email" type="text" placeholder="email"/>
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" placeholder="password"/>
          </div>
          <button type="submit">I Want More Cool</button>
        </section>
      </div>
    )
  }
});

export default Signup;