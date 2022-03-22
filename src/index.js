const express = require("express");

const connect = require("./configs/db");




app.listen(2355, async () => {
    try {
      await connect();
    } catch (err) {
      console.error(err.message);
    }
    console.log("listening on port 2355");
  });