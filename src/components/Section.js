import "../styles/colors.css";

export default function Section({ title }) {
  return (
    <div className="container">
      <h3 className="main-theme bold d-flex justify-content-center align-items-center">
        <div className="seprarator"></div>
        <p className="section-title-main">{title}</p>
        <div className="seprarator"></div>
      </h3>
    </div>
  );
}
