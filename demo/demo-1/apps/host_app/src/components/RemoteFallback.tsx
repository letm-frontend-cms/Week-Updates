import type { ComponentType } from "react";

interface RemoteFallbackProps {
  error?: Error;
  remoteName?: string;
  onRetry?: () => void;
}

const REMOTE_STANDALONE_URL =
  (typeof process !== "undefined" && process.env.PUBLIC_REMOTE_HOME_PAGE_URL) ||
  "http://localhost:4001";

export const RemoteFallback: ComponentType<RemoteFallbackProps> = ({
  error,
  remoteName = "Home Page",
  onRetry,
}) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div
      className="remote-fallback"
      style={{
        padding: "24px",
        margin: "16px",
        border: "1px solid #ffa39e",
        borderRadius: "8px",
        backgroundColor: "#fff1f0",
        color: "#cf1322",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0", fontSize: "1.125rem" }}>
        Micro App Failed to Load
      </h3>
      <p style={{ margin: "0 0 12px 0", lineHeight: 1.5 }}>
        The {remoteName} could not be loaded. This may happen if the remote app
        is not running or there is a network issue.
      </p>
      {error && (
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "0.875rem",
            opacity: 0.9,
          }}
        >
          {error.message}
        </p>
      )}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={handleRetry}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #cf1322",
            backgroundColor: "#fff",
            color: "#cf1322",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Retry
        </button>
        <a
          href={REMOTE_STANDALONE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #cf1322",
            backgroundColor: "#fff",
            color: "#cf1322",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Open Standalone ({REMOTE_STANDALONE_URL})
        </a>
      </div>
    </div>
  );
};
