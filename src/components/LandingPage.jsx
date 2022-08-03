import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container landing-page container--py">
      <h1>Rent'a GirlFriend</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        accusantium facere in eum quia similique accusamus soluta eaque, ut
        suscipit recusandae! Voluptatum necessitatibus facilis obcaecati?
        Perspiciatis totam id sit illum?
      </p>

      <Link to="products">
        <button className="button button--solid-purple"> Browse Catalog</button>
      </Link>
    </div>
  );
}

export default LandingPage;
