import logo from "./logo.svg";
import "./App.css";
import Calender from "./components/Calander.js";
import {useState} from "react"
function App() {
  const [show,setshow]=useState(false)
  return (
    <div className="App">
      <div className="mainconteiner">
        <div className="sidebar">
          <div style={{ height: "auto", width: "70%", margin: "auto" }}>
            <h4>Home</h4>
            {/* <select>
            <option>Library</option>
            <option>Syncs</option>
            <option>Uploads</option>
          </select> */}
            <div onClick={()=>setshow(!show)}>library ></div>
            {
              show &&  <div>
              <p>Syncs</p>
              <p>Uploads</p>
            </div>
            }
           
          </div>
        </div>
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
              </div>
              <div className="calander">
                <Calender />

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
                <h3> Music</h3>
                <div className="event">
                  <p>Ronald Rich track</p>
                  <p>1</p>
                </div>
                <div className="event">
                  <p>Ronald Rich track</p>
                  <p>1</p>
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
