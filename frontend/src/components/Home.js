import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import "./home.css";
import axios from "axios";
import { getQueryArg } from "../utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeName: []
    };
  }

  componentDidMount = () => {
    axios.get("http://3.133.5.150:8080/search-college").then(res => {
      let collegeName = res.data || [];
      this.setState({
        collegeName: collegeName
      });
    });
  };

  openCollege = id => {
    window.location.assign("http://localhost:3000/college/" + id);
  };
  openAddMember = id => {
    window.location.assign("http://localhost:3000/registration");
  };
  render() {
    const collegeName = this.state.collegeName || [];
    console.log(collegeName);
    return (
      <div>
        <div class="row-fluid sideBar">
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Colleges
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="list-group">
                  {collegeName.map(eachCollege => (
                    // console.log(eachCollege)
                    <a
                      onClick={() => this.openCollege(eachCollege.collegeId)}
                      class="list-group-item list-group-item-action list-group-item-primary list-cursor"
                    >
                      <p class="small">{eachCollege.collegeName}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <a href="#" class="btn btn-link">
                    {" "}
                    Events{" "}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* <span class="d-block p-1 bg-primary text-white">
          <p class="font-weight-bolder text-lg-center">QueerBook</p>
        </span> */}

        <div class="container-fluid" class="float-right">
          <div class="container" class="above">
            <div class="row">
              <div class="col-sm" class="w-auto p-3" class=".ml-1"></div>
            </div>
          </div>
          <div class="container-fluid" class="float-right ">
            <button
              type="button"
              class="float-right"
              class="btn btn-success"
              onClick={() => this.openAddMember()}
            >
              {" "}
              +ADD
            </button>
          </div>

          <div class="container-fluid" class="float-right">
            <img
              class="border border-primary"
              class="img-fluid"
              src="https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53E6/47AF/EADD/7216/1678/0A28/100B/0EEF/Gay_flag.png"
              class="w-auto p-3"
              class="h-auto p-3"
            ></img>

            <div class="container-fluid" class="float-down">
              <ul class="list-unstyled">
                <li>
                  {" "}
                  <p class="font-weight-bolder"> College: </p>
                  {collegeName.map(eachCollege => (
                    <p class="large">{eachCollege.collegeName}</p>
                  ))}
                </li>
                <li></li>
                <li>
                  <p class="font-weight-bolder">Sponsors: </p>
                  {}
                </li>
                <li></li>
                <li>
                  <p class="font-weight-bolder">News: </p>
                </li>
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
