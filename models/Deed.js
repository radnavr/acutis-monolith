import { Schema, models, model } from "mongoose";

const deedScheema = new Schema({
  deed: {
    type: String,
  },
});

const Deed = models.Deed || model("Deed", deedScheema);

export default Deed;
