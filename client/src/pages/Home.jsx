import React from "react";

const Home = () => {
  return (
    <>
      <div className="home1">
        <h1>
          <u>Welcome to the Homepage</u>
        </h1>
        <p>
          This travel booking agency application was built by ~{" "}
          <b>Siddharth Ruria</b>. <br />
          This project was created as the first assessment for ~
          <b> The Inceptioners.</b>
        </p>
        <p>This is a generic and simple homepage, nothing fancy.</p>
      </div>

      <div className="home2">
        <h4>
          <u>List Downs of the tech used for this project</u>
        </h4>
        <ul>
          <li>
            <h5>Backend</h5>
            <div className="list-item">
              <p>
                <u>Server</u>: <b>express.js</b>
              </p>
              <p>
                <u>Database</u>: <b>mongodb</b>
              </p>
              <p>
                <u>Environment</u>: <b>Node.js</b>
              </p>
            </div>
          </li>
          <li>
            <h5>Frontend</h5>
            <div className="list-item">
              <p>
                <u>Client Pages and Components</u>: <b>React</b>
              </p>
              <p>
                <u>Routes</u>: <b>react-router-dom</b>
              </p>
              <p>
                <u>Sharing Data</u>: <b>Context API</b>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
