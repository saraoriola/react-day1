import "./PersonFunctional.css";

const PersonFunctional = (props) => {
  const { name, surname, age } = props;

  return (
    <div>Happy {age}, {name} {surname}!!!</div>
  );
};

export default PersonFunctional;
