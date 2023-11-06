import ListItem from "./ListItem";

export default function List() {
  return (
    <div className="border-4 rounded-lg p-2 border-blue-200">
      <h2>To Do</h2>
      <ul className="divide-y-2 divide-blue-200 border-blue-200">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
      <div>
          <h2>Done</h2>
          <ul>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
      </div>
    </div>
  );
}
