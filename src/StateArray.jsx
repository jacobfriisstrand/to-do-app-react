import { useState } from "react";
export default function StateArray() {
  const [persons, setPersons] = useState([
    { name: "Jonas", id: 1 },
    { name: "Klaus", id: 2 },
    { name: "Peter", id: 3 },
  ]);
  const removePerson = (id) => {
    setPersons((prevState) => prevState.filter((person) => person.id !== id));
  };
  const addPerson = () => {
    setPersons((prevState) =>
      prevState.concat({
        name: "Dannie",
        id: 4,
      })
    );
  };
  return (
    <section>
      <h2 className="text-2xl">This is state array</h2>
      <ul>
        {persons.map((item) => {
          return (
            <li key={item.id}>
              {item.name} a.k.a {item.id}
              <button onClick={() => removePerson(item.id)}>
                Remove
              </button>
              <button onClick={addPerson}>
                Add Person
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
