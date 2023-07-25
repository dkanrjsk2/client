const Main = (props) => {
  return (
    <main style={{ margin: "0 auto", color: props.color }}>
      <h1>{props.name}</h1>
      {props.children}
    </main>
  );
};
export default Main;
