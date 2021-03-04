const Arrow = ({ left }) => (
  <svg
    style={{
      transform: `rotate(${left ? "180deg" : "0deg"})`,
      cursor: "pointer",
      opacity: 0.8,
    }}
    width="19"
    height="14"
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.25 0.25L11.2 1.3L16.075 6.25H0.25V7.75H16.075L11.2 12.7L12.25 13.75L19 7L12.25 0.25Z"
      fill="white"
    />
  </svg>
);

export default Arrow;
