import "./progress_bar.css";

export default function ProgressBar(props) {
  let className = "progress-bar";
  if ("className" in props) {
    className += " " + props.className;
  }

  let progress_val = Math.floor((props.value / props.total) * 100);

  return (
    <div {...props} className={className}>
      <span className="progress-bar-text">{progress_val}%</span>
      <div
        style={{ width: progress_val + "%" }}
        className="progress-bar-inner"
      />
    </div>
  );
}
