
import React from "react";
import logo from "../assets/arion-logo.png"; // make sure this file exists
import aiBg from "../assets/ai-bg.jpg"; // background image
import RiskGrid from "../components/RiskGrid";


function Home() {
  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${aiBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        
      }}
    >
      {/* Hero Section */}
<div className="text-box hero-box" style={{ width: "50%", maxWidth: "1200px" }}>
  <div className="hero-content">
    <img src={logo} alt="ARION Logo" className="hero-logo" />
    <div className="hero-text">
      <h1 className="hero-title">ARION</h1>
      <h3 className="hero-subtitle">Autonomous Risk Intelligence & Optimization Network</h3>
      <p className="hero-tagline">Designed to think in probabilities and adapt to market volatility.</p>
    </div>
  </div>
</div>



      {/* Project Summary */}
      <div className="text-box" style={{ width: "auto" }}>

        <h2>Project Summary</h2>
        <p>
          Markets are dynamic, and risk tends to show up where no one anticipates. One surprise move,
          one misplaced signal, can propagate through a portfolio before human teams have time to react.
          That's where ARION comes in.
        </p>
        <p>
          ARION is an agential AI system designed to watch, discern, and foresee. Each agent addresses a
          different facet of risk — market direction, changes in liquidity, or new correlations — and they
          collectively create a network that constantly tracks portfolios.
        </p>
        <p>
          Rather than responding once losses are realized, ARION detects early warning signs of trouble,
          notes areas of vulnerability, and proposes thoughtful action.
        </p>
      </div>

      <div
  className="row-container"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch", // equal height
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
    margin: "2rem auto",
  }}
>
  {/* Risk Grid Section */}
  
  <RiskGrid title="" />

  {/* External Data */}
  <div
    className="text-box"
    style={{
      flex: 1, // narrower
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    }}
  >
    <h2>📡 External Data Sources</h2>
    <ul style={{ listStylePosition: "inside", padding: 0,width:"245px" }}>
      <li>AlphaVantage — Market Data</li>
      <li>Yahoo Finance — Historical Data</li>
      <li>News API — Sentiment Data</li>
    </ul>
  </div>
</div>

      {/* Team Section */}
      <div className="text-box team-section" style={{ width: "100%" }}>
        <h2>Our Team</h2>
        <div
          className="team-container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        
          }}
        >

          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h4>Shantanu</h4>
            
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h4>Bhavik</h4>
            
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h4>Snehal</h4>
            
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 4" />
            <h4>Bhumi</h4>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
