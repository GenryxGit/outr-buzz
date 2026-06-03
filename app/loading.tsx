export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "var(--black)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "var(--acid)",
          textTransform: "uppercase",
          animation: "pulse 1.4s ease-in-out infinite",
        }}
      >
        Loading
      </span>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
