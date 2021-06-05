import "../styles.css";
import React from "react";


function Note() {
  return (
      <div>
        <div className="note">
          <h1>About Pramod</h1>
          <p>he is a dedicated individual with losts of skills to cherish</p>
          <br/>
          <h1>Skills</h1>
          <p>HTML,CSS,Js,Python</p>
        </div>
        <div className="note">
          <h1>Education</h1>
          <p>He studied in different schools and almost all curricullums</p>
          <br/>
          <h1>curricullum</h1>
          <p>ICSC,CBSE,Samacheer</p>
        </div>
        <div className="note">
          <h1>Area of intrest</h1>
          <p>He is not specific to anything in particular instead he likes the thing he does and tries to expertise it</p>
          <br/>
          <ul>
            <li>3D modelling</li>
            <li>Problem solving</li>
            <li>content writing</li>
          </ul>
        </div>
      </div>
  );
}
export default Note;