import React from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props: { name: string }) {
  const chapters = [
    "Introduction to Django",
    "Setting Up Your Environment",
    "Models and Databases",
    "Views and Templates",
    "Forms and Validation",
    "User Authentication",
    "REST APIs with Django",
    "Deployment and Production"
  ];

  return (
    <section style={{
      minHeight: "100vh",
      background: "#f5f5f5",
      padding: "40px 20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <button
          onClick={() => navigateToUrl("/")}
          style={{
            padding: "8px 16px",
            marginBottom: "24px",
            background: "white",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            color: "#666"
          }}
        >
          ← Back to Courses
        </button>
        
        <div style={{
          background: "white",
          padding: "32px",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
          marginBottom: "24px"
        }}>
          <h1 style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#1a1a1a",
            marginBottom: "8px"
          }}>Django Course</h1>
          <p style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "24px"
          }}>Master backend development with Django framework</p>
          
          <button
            style={{
              padding: "12px 32px",
              background: "#0066cc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "#0052a3"}
            onMouseOut={(e) => e.currentTarget.style.background = "#0066cc"}
          >
            Buy Now - $49
          </button>
        </div>

        <div style={{
          background: "white",
          padding: "32px",
          borderRadius: "8px",
          border: "1px solid #e0e0e0"
        }}>
          <h2 style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#1a1a1a",
            marginBottom: "16px"
          }}>Course Chapters</h2>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            {chapters.map((chapter, index) => (
              <li key={index} style={{
                padding: "16px",
                borderBottom: index < chapters.length - 1 ? "1px solid #e0e0e0" : "none",
                display: "flex",
                alignItems: "center"
              }}>
                <span style={{
                  display: "inline-block",
                  width: "32px",
                  height: "32px",
                  background: "#f0f0f0",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "32px",
                  marginRight: "16px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#666"
                }}>{index + 1}</span>
                <span style={{
                  fontSize: "16px",
                  color: "#1a1a1a"
                }}>{chapter}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
