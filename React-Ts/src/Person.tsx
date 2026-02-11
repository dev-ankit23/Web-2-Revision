import { useState } from "react";

export interface persons {
  name: string;
  age: number;
  isMarried: boolean;
}
export const Person = (props: persons) => {
  // const [isShowInfo, setShowInfo] = useState<boolean>(false);
  // const toggleInfo = () => {
  //   setShowInfo((prev) => !prev);
  // };
  const [personBio, setPersonBio] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };
  return (
    <>
      <div>
        <h2>Name :{props.name}</h2>
        <h2>Age : {props.age}</h2>
        <h2>This person is {props.isMarried ? " married" : " single"}</h2>
        <h2>
          {props.name}-Bio: {!personBio ? "No bio" : personBio}
        </h2>

        <p>Type in input box below to add person bio</p>
        <input onChange={handleChange} type="text" name="" id="Bio" />
        {/* <button onClick={toggleInfo}>Toggle Info</button> */}
      </div>
    </>
  );
};
