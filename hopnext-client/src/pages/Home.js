import React, { useEffect } from "react";
import API from "../services/api";

function Home() {
  useEffect(() => {
    API.get("/auth")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);
  
  return <h1>Welcome to HopNest</h1>;
}

export default Home;

