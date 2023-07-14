import { people } from './data.js';
import { getImageUrl } from './utils.js';
import tachyons from 'tachyons';

export default function FinalChemists() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const finalChemists = chemists.map(person =>  {
      return <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        <i>{' ' + person.profession + ' '}</i>
        known for {person.accomplishment}
      </p>
    </li>
 } )
  const nonChemists = people.filter((person) => person.profession !== "chemist");

const finalNonChemists = nonChemists.map((person) => {
  return (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        <i>{" " + person.profession + " "}</i>
        known for {person.accomplishment}
      </p>
    </li>
  );
});
 
  return (
    <article className='tc'>
        <h1>Scientists</h1>
      <ul style={{listStyle: 'none'}}>{finalChemists}</ul>
      <ul style={{listStyle: 'none'}}>{finalNonChemists}</ul>
    </article>
  );
}