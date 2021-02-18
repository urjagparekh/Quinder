import React from "react";
import "./registration.css";

class Registration extends React.Component {
  render() {
    return (
      <div className="main">
        <div class="row">
         
         <div className="column side"></div>
        <div className = "column middle1">
            
            </div>
  <div class="column middle">
    <h2> Registration</h2>
    <form>
    <div className = "Name"><input type="text" name="Name" placeholder="your name here"></input><br></br></div><br></br>
  <div className = "email"><input type="text" name="Email" placeholder="your email id here"></input><br></br></div><br></br>
    <div className = "College"><input type="text" name="college" placeholder="your college here"></input><br></br></div><br></br>
    <div className = "Pronouns"><input type="text" name="Pronouns" placeholder="pronouns"></input><br></br></div><br></br>
  <div className = "Interested"><input type="text" name="Interested In" placeholder="you are interested in"></input></div><br></br>
    <div className = "Scrap"><input type="text" name="Scrap Book" placeholder="fill in your scraps of thoughts"></input><br></br></div><br></br>
    <div className="image">Upload your picture: <br></br><input type="file" name="pic" accept="image"></input></div>
    <div className = "Submit"><input type="Submit" name="submit"></input></div>
    </form>
    <div className="column side"></div>
  
  </div>
  </div>
            
            
          </div>
        
    );
  }
}

export default Registration;
