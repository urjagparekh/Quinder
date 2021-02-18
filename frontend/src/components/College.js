import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import "./college.css";
import axios from "axios";
import { getQueryArg } from "../utils";

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      college: {},
      membersInfo: []
    };
  }

  componentDidMount = () => {
    axios.get("http://3.133.5.150:8080/search-user").then(res => {
      let url = window.location.href;
      let keyword = url.split("/").pop();
      let members = res.data || [];
      let users = members.filter(a => a.college == keyword);
      this.setState({
        membersInfo: users
      });
    });
  };

  openMember = id => {
    window.location.assign(
      `http://localhost:3000/member?user=${id}&&email=gya8asd9ns23@gmail.com`
    );
  };

  render() {
    const membersInfo = this.state.membersInfo || [];
    console.log(membersInfo);
    return (
      <div class=".container-fluid ">
        {/* <AppBar color="" position="static">
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  Logo
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  QueerBook
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </AppBar> */}
        <div className="container">
          <div className="jumbotron jumbotron-margin">
            <p> University of California</p>
          </div>

          <span>
            <div className="border border-info text-div-padding">
              <p>
                The University of California, Los Angeles (UCLA)[1] is a public
                research university in Los Angeles. It became the Southern
                Branch of the University of California in 1919, making it the
                fourth-oldest (after UC Berkeley, UC San Francisco, and UC
                Davis) of the 10-campus University of California system and
                oldest of the campuses in Southern California.[11] It offers 337
                undergraduate and graduate degree programs in a wide range of
                disciplines.[12] UCLA enrolls about 31,500 undergraduate and
                12,800 graduate students[7] and had 119,000 applicants for Fall
                2016, including transfer applicants, making the school the most
                applied-to of any American university.[13]
              </p>
            </div>
          </span>

          <div>
            <h1>
              {" "}
              <strong> Members</strong>{" "}
            </h1>
            <div class="row margin-row">
              {membersInfo.map(eachMember => (
                <div
                  class="col-lg-12"
                  style={{
                    border: "0.5px dotted black",
                    borderRadius: 10,
                    margin: 4,
                    padding: 4
                  }}
                  onClick={() => this.openMember(eachMember.email)}
                >
                  <div class="col-lg-6">
                    <p>
                      <strong>{eachMember.name}</strong>
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <p>Interested In: {eachMember.interestedIn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
