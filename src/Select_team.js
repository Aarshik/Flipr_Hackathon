import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Select_team.css';

const teams = [
  { label: "CSK", value: 355 },
  { label: "KxiP", value: 54 },
  { label: "RCB", value: 43 },
  { label: "MI", value: 61 },
  { label: "SRH", value: 965 },
  { label: "KKR", value: 46 },
  { label: "RR", value: 58 },
  { label: "DC", value: 35}
];

class Teams extends Component {
  render() {
    return (
      <div className="container">
      <h2>
          SELECT TEAMS
      </h2>
        <div className="row">
          <div className="dropdown"></div>
            <div className="col-md-3">
                <Select options={teams} />
                <h6>Select captain</h6>
                <Select options={teams} />
                <h6>Select Vice-Captain</h6>
                <Select options={teams} />
            </div>
          <h3>vs</h3>
          <div className="col-md-3">
            <Select options={teams} />
            <h6>Select Captain</h6>
            <Select options={teams} />
            <h6>Select Vice-Captain</h6>
            <Select options={teams} />
          </div>
        </div>
       
            <button className="start_button"> Start</button>
      </div>
    );
  }
}

export default Teams;
