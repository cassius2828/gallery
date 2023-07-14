export default function Clock({ time }) {
  let hours = time.getHours();
  let className;
  hours >= 0 && hours <= 6 ? (className = "night") : (className = "day");

  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
