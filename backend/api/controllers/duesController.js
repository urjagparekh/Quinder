import * as mongoose from "mongoose";
import { ObjectID } from "mongodb";
const Dues = mongoose.model("Dues");

const addDues1 = (req, res) => {
  const dues = new Dues(req.body);
  dues.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

const searchDues1 = (req, res) => {
  //   console.clear();
  Dues.find(req.query, function(err, dues) {
    if (err) {
      res.send(err);
    }
    res.json(dues);

    // if (req.query.uuid) {
    // } else {
    //   res.send("Search can only be done with userId !");
    // }
  });
};

//update dues logic  has to be modified to update isPaid and paidAmount as per the history.
// chronologically

const updateDues1 = (req, res) => {
  console.clear();
  const id = req.body._id;
  let ObjectId = new ObjectID(id);
  console.log(id, req);
  Dues.updateOne({ _id: ObjectId }, req.body, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
  //   console.clear();
};

export { addDues1, searchDues1, updateDues1 };
