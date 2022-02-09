import React from "react";
import "../styles/header.module.css";
// import Button from "react-bootstrap/Button";

export default function About() {
  return (
    <div className="{style.header}">
      <h1>About Page</h1>
      <p>
        My previous experience was working with programming Smart tools in the
        manufacturing environmnet. Current programming languages i have been
        exposed to include HTML, CSS styles sheet and JAVAScript.
      </p>
      <p>
        I currently work as a product configuration engineeer. I am able to use
        my knowledge gain from full stack to be able to write code to configure
        the BOM for user to help the shop floor know exactly what to build.
      </p>

      <p>GITHUB PROJECT HIGHLIGHTS</p>
      <div className="card">
        <img
          id="profile-img"
          src={require("../Assets/teamprof.PNG")}
          alt="project-img"
        ></img>
        <div className="card-body">
          <h1 className="card-title">Team Profile Generator</h1>
          <p className="card-text">
            This is a Node.js command-line application that takes in information
            about employees on a software engineering team, then generates an
            HTML webpage that displays thier information the project is link
            below,{" "}
            <a href="https://github.com/oyindami/teamprofilegenerator.git">
              click here.
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          id="profile-img"
          src={require("../Assets/weather.PNG")}
          alt="project-img"
          
        ></img>
        <div className="card-body">
          <h1 className="card-title">Weather App</h1>
          <p className="card-text">
            This application is used to view the weather for a loaction. This
            was built requesting data from a weather API
            <a href="https://github.com/oyindami/WeatherApp.git">click here.</a>
            To view the page,{" "}
            <a href="https://oyindami.github.io/WeatherApp/">click here.</a>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          id="profile-img"
          src={require("../Assets/note-take.png")}
          alt="project-img"
        ></img>
        <div className="card-body">
          <h1 className="card-title">Note Taker</h1>
          <p className="card-text about-mes">
            This application is used to write and save notes. This application
            was written using the package Express.js back end to save and
            retrieve note data from a JSON file. To learn more about this
            project,{" "}
            <a href="https://github.com/oyindami/Notetaker.git">click here.</a>{" "}
            To deploy the page,{" "}
            <a href="https://powerful-spire-31893.herokuapp.com/">
              click here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
