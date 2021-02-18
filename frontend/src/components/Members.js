import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";
import { getQueryArg } from "../utils";
import "./members.css";

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      college: [],
      members: [],
      currentMember: {},
      user: {},
      scraps1: ""
    };
  }

  componentDidMount = () => {
    axios.get("http://3.133.5.150:8080/search-user").then(res => {
      let members = res.data || [];
      let currentMember = members.find(a => a.email == getQueryArg("email"));
      let user = members.find(a => a.email == getQueryArg("user"));
      this.setState({
        members: members,
        currentMember: currentMember,
        user: user
      });
    });
  };

  handleChange = e => {
    const currentMember = this.state.currentMember || [];
    console.log(e, e.target);
    // currentMember.scraps.push(e.target.va+lue);
    this.setState({ scraps1: e.target.value });
  };

  submitScrap = () => {
    const { user, scraps1 } = this.state || {};
    let { scraps } = user || [];
    scraps.push(scraps1);
    console.log(user);
  };

  render() {
    const { currentMember, user, scraps1 } = this.state || {};
    console.log(currentMember);
    let { scraps } = user || [];
    // let scraps = [
    //   "hello, You are so adorable!!",
    //   "Like your hair!",
    //   "Let's Catchup sometime"
    // ];

    const classes = {
      card: {
        maxWidth: 345
      },
      media: {
        height: 500
      }
    };
    return (
      <div className="main">
        <div className="portfolio">
          <Card className={classes.card}>
            <CardActionArea>
              {/* <CardMedia
                className={classes.media}
                image="https://images.spot.im/v1/production/yupgrpkcftvrhpc5jff5"
                title="profile pic"
              /> */}
              <img src="https://www.billboard.com/files/styles/article_main_image/public/media/Kehlani-press-photo-2017-billboard-1548.jpg" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {user.name}
                </Typography>
                <div></div>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.aboutme}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.college}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.pronouns}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.interestedIn}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
              <Button size="small" color="primary">
                connect
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="oldScraps">
          {scraps &&
            scraps.map(item => <div className="oldScraps-1">{item}</div>)}
        </div>
        <div className="scrap">
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={scraps1 && scraps1}
              onChange={e => this.handleChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  Share your love with me...
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          <div className="Submit">
            <input
              type="Submit"
              name="submit"
              onClick={this.submitScrap}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
