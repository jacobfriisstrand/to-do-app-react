import ListItem from "./ListItem";

export default function List({ items, deleteItem, toggleItem }) {
  return (
    <div className="border-4 rounded-lg p-4 border-blue-200 grid grid-cols-2 gap-10 col-span-2">
      <div>
        <h2 className="text-2xl font-bold">To Do</h2>
        <ul className="divide-y-2 divide-blue-200 border-blue-200">
          {items
            .filter((i) => !i.completed)
            .map((item) => (
              <ListItem {...item} deleteItem={deleteItem} toggleItem={toggleItem} key={item.id} />
            ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Done</h2>
        <ul className="divide-y-2 divide-blue-200 border-blue-200">
          {items
            .filter((i) => i.completed)
            .map((item) => (
              <ListItem {...item} deleteItem={deleteItem} toggleItem={toggleItem} key={item.id} />
            ))}
        </ul>
      </div>
    </div>
  );
}
