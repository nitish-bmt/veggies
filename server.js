import express from "express";
import data from "./resp.json" with {type: "json"};

const PORT = process.env.PORT || 3000;
const app = express();


app.listen(PORT, ()=>{
  console.log(`server started at: http://localhost:${PORT}`);
})

app.get("/", (req, res)=>{
  res.send("go to /vegetables for data");
});

app.get("/vegetables", (req, res)=>{
  res.send(data);
})