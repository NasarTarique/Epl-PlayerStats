import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home">
			  <h1 className="underline"><span className="Heading1">EPL STATS </span></h1>
			  <p>Adipisicing maiores magnam voluptates eligendi vero, quasi suscipit. Esse earum officia expedita consectetur maiores. Blanditiis voluptatem error iusto ut ipsam. Hic quae eos excepturi suscipit unde pariatur Explicabo vitae quisquam.</p>
        <Link to="/about">Know More</Link>
      </div>
    </div>
  );
}

export default Home;
