import React from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props: { name: string }) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
    }}>
      <div style={{
        maxWidth: "800px",
        width: "100%",
        padding: "40px"
      }}>
        <h1 style={{
          fontSize: "32px",
          fontWeight: "600",
          color: "#1a1a1a",
          marginBottom: "12px"
        }}>Course Catalog</h1>
        <p style={{
          fontSize: "16px",
          color: "#666",
          marginBottom: "32px"
        }}>Choose a course to begin learning</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <div
            onClick={() => navigateToUrl("/django")}
            style={{
              flex: 1,
              padding: "24px",
              background: "white",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#0066cc";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#e0e0e0";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2 style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1a1a1a",
              marginBottom: "8px"
            }}>Django Course</h2>
            <p style={{
              fontSize: "14px",
              color: "#666",
              margin: 0
            }}>Learn backend development with Django</p>
          </div>
          <div
            onClick={() => navigateToUrl("/react")}
            style={{
              flex: 1,
              padding: "24px",
              background: "white",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#0066cc";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#e0e0e0";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2 style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1a1a1a",
              marginBottom: "8px"
            }}>React Course</h2>
            <p style={{
              fontSize: "14px",
              color: "#666",
              margin: 0
            }}>Learn frontend development with React</p>
          </div>
        </div>
      </div>
    </section>
  );
}
