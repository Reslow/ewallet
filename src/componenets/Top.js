import "./top.css";

export default function Top({ title, subtitle }) {
  return (
    <section className="top--section">
      <h1 className="title--heading">{title}</h1>
      <h2 className="subtitle--heading">{subtitle}</h2>
    </section>
  );
}
