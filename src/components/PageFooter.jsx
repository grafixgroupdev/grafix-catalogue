export default function PageFooter({ right }) {
  return (
    <footer>
      <div>Grafix Group · Product Catalogue · Internal tool</div>
      <div>{right || "wireframe"}</div>
    </footer>
  );
}
