import "./page_template.css";

export default function PageTemplate(props) {
  return (
    <div id="page-template">
      <div id="page-template-inner">
        <div id="page-template-content-layer">{props.children}</div>
      </div>
    </div>
  );
}
