import "./card.css";

export default function Card(props) {
  let className = "card-main";
  if ("className" in props) {
    className += " " + props.className;
  }

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
