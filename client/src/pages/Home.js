import React from "react";
import landingImg from "../undraw_personal_data.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_slogan">
          <h1>Welcome radiology innovation.</h1>
          <>
          </>
          <p>Step into the future of medical imaging with our revolutionary radiology app, where precision meets convenience.</p>
          <p>Transform the way you diagnose and analyze medical images.</p>
          <p>Say goodbye to traditional barriers and embrace a new era of radiology with our app, where accuracy, speed, and accessibility converge to redefine healthcare diagnostics.</p>
        </div>
        <div className="home_cta">
          <img src={landingImg} alt="undraw_img" />
        </div>
      </div>
      <div className="home_button">
        <button>go to exams</button>
      </div>
      <div className="home_reviews">
        <h3>Awards</h3>
        <div className="home_imgs">
        <img src="" alt="one" />
        <img src="" alt="one" />
        <img src="" alt="one" />
        <img src="" alt="one" />
        </div>
      </div>
    </div>
  );
}
