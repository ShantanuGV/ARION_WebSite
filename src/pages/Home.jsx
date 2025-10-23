// ARION_WebSite/src/pages/Home.jsx
import React from "react";
import logo from "../assets/arion-logo.png"; // make sure this file exists
import aiBg from "../assets/ai-bg.jpg"; // background image

function Home() {
  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${aiBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "4rem 0",
      }}
    >
      {/* Hero Section */}
      <div className="text-box">
        <img src={logo} alt="ARION Logo" className="hero-logo" />
        <h1>ARION</h1>
        <h3>Autonomous Risk Intelligence & Optimization Network</h3>
        <p>Designed to think in probabilities and adapt to market volatility.</p>
      </div>

      {/* Project Summary */}
      <div className="text-box">
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

      {/* Core AI Engine */}
      <div className="text-box">
        <h2>🤖 Core AI Engine Components</h2>
        <ul>
          <li>Web Dashboard (React Interface)</li>
          <li>API Gateway (FastAPI)</li>
          <li>Core AI Engine (Multi-Agent System)</li>
          <li>Database (PostgreSQL / MySQL)</li>
        </ul>
      </div>

      {/* Architecture Diagram */}
      <div className="text-box">
        <h2>System Architecture</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>
{`Client (React UI)
   ↕
FastAPI Gateway
   ↕
Core AI Engine — Multi-Agent System
   ↕
Database (PostgreSQL/MySQL)
   ↕
External APIs (AlphaVantage, Yahoo, NewsAPI)`}
        </pre>
      </div>

      {/* Agents */}
      <div className="text-box">
        <h2>📊 Volatility Risk Agent</h2>
        <p>
          Analyzes market volatility patterns, calculates standard deviation, beta coefficients, and
          Value at Risk (VaR) metrics to assess portfolio exposure.
        </p>
      </div>

      <div className="text-box">
        <h2>📰 Sentiment Analysis Agent</h2>
        <p>
          Processes real-time news feeds, social media, and commentary using NLP to gauge sentiment and
          identify emerging risks.
        </p>
      </div>

      <div className="text-box">
        <h2>🔮 ML Forecast Agent</h2>
        <p>
          Employs ML models (LSTM, Random Forest) to predict price movements, trend reversals, and
          anomalies.
        </p>
      </div>

      <div className="text-box">
        <h2>⚡ Risk Aggregator</h2>
        <p>
          Synthesizes multi-agent insights into unified risk scores with confidence intervals and actionable
          alerts.
        </p>
      </div>

      {/* External Data */}
      <div className="text-box">
        <h2>📡 External Data Sources</h2>
        <ul>
          <li>AlphaVantage — Market Data</li>
          <li>Yahoo Finance — Historical Data</li>
          <li>News API — Sentiment Data</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="text-box team-section">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h4>Rakesh</h4>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h4>Person 2</h4>
            <p>Data Scientist</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h4>Person 3</h4>
            <p>AI Engineer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 4" />
            <h4>Person 4</h4>
            <p>Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
