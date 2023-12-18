import logo from "./logo.svg";
import "./App.css";
import Rocket from "./components/Rocket.js";
import Calender from "./components/Calander.js";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";
function App() {
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [dis, setdis] = useState(true);
  
 
  return (
    <div className="App">
      <div className="mainconteiner">
        {/* <div className="cross" onClick={handleclick}>
          <ImCross />
        </div> */}
        {dis && (
          <div className="sidebar">
            <div
              style={{
                height: "auto",
                width: "90%",
                border: "1px solid white",

                margin: "auto",
                marginTop: "90px",
              }}
            >
              <p style={{ marginLeft: "10px", color: "#ed7d15" }}>
                <IoHomeOutline /> Home
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "40px",
                  width: "90%",
                  border: "1px solid white",
                  padding: "4px",
                  margin: "auto",
                }}
                onClick={() => setshow(!show)}
              >
                <p>
                  <MdOutlineLibraryMusic /> library
                </p>
                <p>
                  {" "}
                  <FaAngleDown />
                </p>
              </div>
              {show && (
                <div style={{ marginLeft: "20px" }}>
                  <p>
                    <IoCloudUploadOutline /> Syncs
                  </p>
                  <p>
                    <IoCloudUploadOutline /> Uploads
                  </p>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "40px",
                  width: "90%",
                  border: "1px solid white",
                  padding: "4px",
                  margin: "auto",
                }}
                onClick={() => setshow2(!show2)}
              >
                <p>
                  <MdOutlineLibraryMusic /> library
                </p>
                <p>
                  <FaAngleDown />
                </p>
              </div>
              {show2 && (
                <div style={{ marginLeft: "20px" }}>
                  <p>
                    <IoCloudUploadOutline /> Tracks
                  </p>
                  <p>
                    <IoCloudUploadOutline /> Playlists
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="container">
          <div className="uppernav">
            <div className="searchbardiv">
              <div className="flex-container">
                <input
                  style={{ borderRadius: "5px", padding: "4px" }}
                  placeholder="Search for artists..."
                />
              </div>
            </div>
            <div className="userdiv">
              <div className="user-container">
                <p>Premium</p>
                <p>Pro</p>
                <p>User Name</p>
              </div>
            </div>
          </div>
          <div className="maincontainer1">
            <h2 style={{ marginLeft: "5px" }}>Calendar</h2>
            <hr />
            <div className="calanderdiv">
              <div className="screen">
                {/* <MySchedule /> */}
                {/* <Calendar1/> */}
                <Rocket />
              </div>
              <div className="calander">
                <div className="calander1">
                  <Calender />
                </div>

                {/* <div className="event-container">
                  <div className="event">
                    <p>Ronald Rich track</p>
                    <p>1</p>
                  </div>
                  <div className="event">
                    <p>Ronald Rich track</p>
                    <p>2</p>
                  </div>
                </div>
                <br />
                <div className="button-container">
                  <button className="share-button">Share</button>
                  <button className="remind-button">Remind Me</button>
                </div> */}
                <div className="musicdiv">
                  <h3> Music</h3>
                  <div className="event">
                    <p style={{ backgroundColor: "#f2f2f2", padding: "4px" }}>
                      Ronald Rich track
                    </p>
                    <p
                      style={{
                        color: "red",
                        padding: "4px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      <MdOutlineDelete />
                    </p>
                  </div>
                  <div className="event">
                    <p style={{ backgroundColor: "#f2f2f2", padding: "4px" }}>
                      Ronald Rich track
                    </p>
                    <p
                      style={{
                        color: "red",
                        padding: "4px",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      <MdOutlineDelete />
                    </p>
                  </div>
                  <div className="buttondiv">
                    <button>Share</button>
                    <button>Remind me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
