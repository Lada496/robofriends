import Card from "./Card";
const CardList = ({ robots }) => {
  if (true) {
    throw new Error("Noo");
  }
  return (
    <>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </>
  );
};
export default CardList;
