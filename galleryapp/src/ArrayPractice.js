import tachyons from "tachyons";
import { getImageUrl } from "./utils";

export default function ArrayPractice() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  //   const listItems = people.map((i) => <li>{i}</li>);
  const chemists = people.filter((i) => i.profession === "chemist");
  const finalChemists = chemists.map((i) => (
    <li key={i.id} >
      <img src={getImageUrl(i)} alt={i.name} />
      <p>
        <b>{i.name}:</b>
        <i>{" " + i.profession + " "}</i>
        known for {i.accomplishment}
      </p>
    </li>
  ));
  return <div className="tc mt5">{finalChemists}</div>;
}
