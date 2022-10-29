import { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
// Initialize Firebase

function App() {
  const [register, setRegister] = useState(false);
  const [department, setDepartment] = useState("");
  const [quota, setQuota] = useState("");
  const [rank, setRank] = useState("");
  const _handleRank = (e) => {
    setRank(e.target.value);
  };
  const options = [
    "Computer Science & Engineering (CSE)",
    "Electrical & Electronics Engineering (EEE)",
    "Electronics & Communication Engineering (ECE)",
    "Mechanical Engineering (MEC)",
    "Civil Engineering (CIV)",
    "Information Technology (INF)",
    "Computer Science & Engineering-Cyber Security (CSC)",
    "Computer Science & Engineering-Data Science (CSD)",
    "Computer Science & Engineering- AI & ML (CSM)",
    "Artificial Intelligence & Machine Learning (AIM)",
  ];
  const quotaOptions = ["Convener Quota", "Management Quota"];
  const _handleDepartment = (e) => {
    setDepartment(e.value);
  };
  const _handleRegister = () => {
    setRegister(true);
  };
  const _handleQuota = (e) => {
    setQuota(e.value);
  };

  // console.log(department);

  return (
    <div className="main" style={{ padding: "10px" }}>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <div className="header" style={{ textAlign: "center" }}>
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ maxWidth: "700px", width: "100%" }}
          />
          <h2>
            Welcome to the Orientation Day
            <br /> for the batch of 2022-26
          </h2>
          <div>
            <a
              className="social-button"
              type="submit"
              href="https://cmrcet.ac.in"
              target="_blank"
            >
              <i className="fa fa-info-circle"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://www.instagram.com/cmrcet_official/"
              target="_blank"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://m.facebook.com/cmrcetofficial/"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://www.linkedin.com/school/cmr-college-of-engineering-technology/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-button"
              href="https://www.youtube.com/channel/UCfORAqkwPeXIYcllELHecmw"
              type="submit"
              target="_blank"
            >
              <i className="fab fa-youtube-square"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://twitter.com/cmrcet_official"
              target="_blank"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          <div className="page_form">
            <label>
              <h3>Choose your Department</h3>
            </label>
            <Dropdown
              options={options}
              onChange={_handleDepartment}
              placeholder="Select an option"
            />
            {department === "Computer Science & Engineering (CSE)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Electrical & Electronics Engineering (EEE)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Electronics & Communication Engineering (ECE)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br>
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Mechanical Engineering (MEC)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br>
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Civil Engineering (CIV)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br> <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Information Technology (IT)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br> <br />
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ borderRadius: 33 }}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Computer Science & Engineering-Cyber Security (CSC)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br> <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Computer Science & Engineering-Data Science (CSD)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br> <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Computer Science & Engineering- AI & ML (CSM)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br> <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Artificial Intelligence & Machine Learning (AIM)" ? (
              <div>
                <h3>Please Download the files below</h3>
                <a href="#" style={{ textDecoration: "none" }}>
                  File 1 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 2 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br />
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  File 3 <i className="fa fa-download" aria-hidden="true" />
                </a>
                <br></br> <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : (
              <br />
            )}
            {register === true ? (
              <div>
                <h3>Please Enter Below Form To Complete Registration</h3>
                <br />
                <Dropdown
                  options={quotaOptions}
                  onChange={_handleQuota}
                  placeholder="Select an option"
                />
                <br />
                {quota === "Convener Quota" ? (
                  <div>
                    <h3>Convener Quota</h3>
                    <label>Please Enter Your Rank: </label>
                   {/* { <ReactSearchAutocomplete
                      styling={{
                        border: "1px solid #1e4160",
                        borderRadius: "5px",
                        padding: "10px",
                        boxShadow: "0px",
                        color: "#1e4160",
                        iconColor: "#1e4160",
                      }}
                    />} */}
                    <input type="number" onChange={_handleRank} />

                  </div>
                ) : quota === "Management Quota" ? (
                  <div>
                    <h3>Management Quota</h3>
                    <label>Please Enter Your Name: </label>
                    <ReactSearchAutocomplete
                      styling={{
                        border: "1px solid #1e4160",
                        borderRadius: "5px",
                        padding: "10px",
                        boxShadow: "0px",
                        color: "#1e4160",
                        iconColor: "#1e4160",
                      }}
                    />
                  </div>
                ) : (
                  <br />
                )}
              </div>
            ) : (
              <br />
            )}
          </div>
          {/* // end of page_form */}
          {student && (
            <div style={{ textAlign: "center" }}>
              <div class="card">
                <div class="header2">
                  <p style={{ margin: "0px" }}>Student Details</p>
                </div>
                <div class="container">
                  <table>
                    <tr>
                      <td>Name</td>
                      <td>{student.name}</td>
                    </tr>
                    {student.id.length >= 10 && (
                      <tr>
                        <td>Mobile</td>
                        <td>{student.id}</td>
                      </tr>
                    )}
                    {student.id.length <= 10 && (
                      <tr>
                        <td>Rank</td>
                        <td>{student.id}</td>
                      </tr>
                    )}
                    <tr>
                      <td>Department</td>
                      <td>{student.branch}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{student.gender}</td>
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      <td>
                        <input type="number" onChange={_handleMobile} />
                      </td>
                    </tr>
                    <tr>
                      <td>Parent Mobile Number</td>
                      <td>
                        <input type="number" onChange={_handlePMobile} />
                      </td>
                    </tr>
                    <tr>
                      <td>No. of people attending (including student)</td>
                      <td>
                        <select onChange={_handlePeople}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        {
                          people==="other" && <input type="number" onChange={_handleOtherPeople} />
                        }
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              {!success && parent !== "" && mobile != "" && count !== 0 && (
                <button onClick={execute}>Submit</button>
              )}
              <br />
              {success && (
                <div
                  style={{
                    "max-width": "400px",
                    margin: "20px auto",
                  }}
                >
                  <p>Registration Sucessfull!!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
