import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Simple Manga Reader</h1>
      <div>
        {/* Add route to imgur pages later */}
        <Link to="/mangadex">
          <button>Read from MangaDex</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
