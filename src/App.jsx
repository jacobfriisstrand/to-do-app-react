import Form from "./components/Form";
import List from "./components/List";

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    {
      task: "Do the dishes",
      completed: false,
      id: 1,
    },
    {
      task: "Walk the dog",
      completed: true,
      id: 2,
    },
  ]);
  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }
  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    console.log(id, "skal toggles");
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !item.completed;
          return copy;
        }
        return item;
      });
    });
  }
  return (
    <main className="space-y-4 max-w-6xl mx-auto grid grid-cols-2">
      <Form addItem={addItem} />
      <List deleteItem={deleteItem} toggleItem={toggleItem} items={items} />
    </main>
  );
}
