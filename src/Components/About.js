import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href="https://bit.ly/2rD9mJQ" className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
