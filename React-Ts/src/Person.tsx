import { useState } from "react";

export interface persons {
  name: string;
  age: number;
  isMarried: boolean;
}
export const Person = (props: persons) => {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);
  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };
  return (
    <>
      {isShowInfo && (
        <>
          <p>Name :{props.name}</p>
          <p>Age : {props.age}</p>
          <p>This person is {props.isMarried ? " married" : " single"}</p>
        </>
      )}
      <button onClick={toggleInfo}>Toggle Info</button>
    </>
  );
};
