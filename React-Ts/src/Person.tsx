export interface persons {
  name: string;
  age: number;
  isMarried: boolean;
}
export const Person = (props: persons) => {
  return (
    <>
      <p>Name :{props.name}</p>
      <p>Age : {props.age}</p>
      <p>
        This person is{" "}
        {props.isMarried ? "yes he is married" : "no he is single"}
      </p>
    </>
  );
};
