import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./RiskGrid.css";

const items = [
  {
    id: 1,
    name: "Volatility Risk Agent",
    variant: "large",
    type: "line",
    data: [
      { time: "Jan", value: 20 },
      { time: "Feb", value: 35 },
      { time: "Mar", value: 25 },
      { time: "Apr", value: 40 },
      { time: "May", value: 30 }
    ]
  },
  { id: 2, name: "Liquidity Monitor", variant: "small", type: "bar", info: "Tracks asset liquidity." },
  { id: 3, name: "Credit Shield", variant: "medium", type: "pie", data: [{ name: "Safe", value: 60 }, { name: "Medium", value: 30 }, { name: "Risky", value: 10 }] },
  { id: 4, name: "Market Sentinel", variant: "wide", info: "Monitors global markets." },
  { id: 5, name: "Portfolio Analyzer", variant: "small", type: "pie", data: [{ name: "Stocks", value: 50 }, { name: "Bonds", value: 30 }, { name: "Cash", value: 20 }] },
  { id: 6, name: "Scenario Simulator", variant: "medium", info: "Simulates market conditions." },
  { id: 7, name: "Stress Tester", variant: "small", type: "line", data: [{ time: 1, value: 10 }, { time: 2, value: 25 }, { time: 3, value: 15 }] },
  { id: 8, name: "Correlation Mapper", variant: "wide", info: "Maps asset correlations." },
  { id: 9, name: "Risk Aggregator", variant: "large", info: "Combines multiple risk metrics." }
];

const COLORS = ["#00ffff", "#00ff99", "#ff00ff"];

export default function RiskGrid({ title = "Risk Modules" }) {
  return (
    <div className="risk-box">
      <div className="risk-box__header">
        <h3>{title}</h3>
      </div>

      <div className="risk-grid" role="list">
        {items.map((it) => (
          <article
            key={it.id}
            className={`risk-item risk-item--${it.variant}`}
            role="listitem"
            tabIndex={0}
            title={it.name}
          >
            <div className="risk-item__content">
              <div className="risk-item__title">{it.name}</div>

              {it.type === "line" && (
                <ResponsiveContainer width="100%" height={80}>
                  <LineChart data={it.data}>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              )}

              {it.type === "pie" && (
                <ResponsiveContainer width="100%" height={80}>
                  <PieChart>
                    <Pie
                      data={it.data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={15}
                      outerRadius={30}
                    >
                      {it.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              )}

              {it.info && <p className="risk-item__info">{it.info}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
