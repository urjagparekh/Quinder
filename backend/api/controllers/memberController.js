import * as mongoose from "mongoose";
import { ObjectID } from "mongodb";
const Members = mongoose.model("Member");

const addMember1 = (req, res) => {
  // const mailId = req.body.email;
  // console.log(req, req.body);
  const member = new Members(req.body);
  member.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
  // Members.find({ email: mailId, active: true }, function(err, result) {
  //   if (err) {
  //     res.send(err);
  //   }
  //   if (result.length > 0) {
  //     console.log("email already exists", result);
  //     res.status(400).send("Email already exists!!");
  //   } else {

  //   }
  // });
  //   console.clear();
};

const updateMember1 = (req, res) => {
  const id = req.body._id;
  let ObjectId = new ObjectID(id);
  Members.updateOne({ _id: ObjectId }, req.body, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
  //   console.clear();
};

const searchMember1 = (req, res) => {
  //   console.clear();
  Members.find(req.query, function(err, member) {
    if (err) {
      res.send(err);
    }
    // mailUpdate(res);
    res.json(member);
  });
};

const deleteMember1 = (req, res) => {
  // console.clear();
  const id = req.query._id;
  let ObjectId = new ObjectID(id);
  Members.find({ _id: ObjectId, active: true }, function(err, result) {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      result[0].active = false;
      updateMember({ body: result[0] }, res);
    } else {
      res.send("USER NOT FOUND!");
    }
  });
};

export { addMember1, updateMember1, searchMember1, deleteMember1 };
