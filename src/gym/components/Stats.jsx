import { useEffect, useState, useRef } from "react";
import React from "react"

const Counter = ({ end, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = 20;
    const increment = Math.ceil(end / 100);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2 style={{ color: "#F3903E", fontSize: "50px", fontWeight: "bold" }}>
        {count}+
      </h2>
      <p style={{ fontSize: "20px" }}>{text}</p>
    </div>
  );
};

const Stats = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Dejar de observar después de activarse
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} style={{ minHeight: "200px", background: "black", padding: "50px" }}>
      {isVisible && (
        <div className="stats" style={{ display: "flex", justifyContent: "space-around" }}>
          <Counter end={20} text="Entrenadores" />
          <Counter end={1800} text="Metros" />
          <Counter end={700} text="Inscritos" />
          <Counter end={300} text="Máquinas" />
        </div>
      )}
    </div>
  );
});

export default Stats;
