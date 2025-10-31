"use client";

import { useState, useEffect } from "react";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Your actual password - CHANGE THIS!
  const CORRECT_PASSWORD = "Chameleon328";

  // Check if user is already authenticated (using sessionStorage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem("portfolioAuth");
    if (authStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("portfolioAuth", "authenticated");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "400px",
          margin: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
            color: "#1a202c",
            textAlign: "center",
          }}
        >
          Portfolio Access
        </h1>
        <p
          style={{
            color: "#718096",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Please enter the password to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#4a5568",
                marginBottom: "0.5rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: error ? "2px solid #f56565" : "2px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                if (!error) e.target.style.borderColor = "#667eea";
              }}
              onBlur={(e) => {
                if (!error) e.target.style.borderColor = "#e2e8f0";
              }}
              autoFocus
            />
            {error && (
              <p
                style={{
                  color: "#f56565",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.875rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(102, 126, 234, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Access Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
