export default function ListItem({ completed, id, task, deleteItem, toggleItem }) {
  return (
    <li className={"py-4 flex justify-between gap-4"}>
      <p className={completed ? "line-through" : ""}>{task}</p>
      <div className="text-center space-y-2">
        <button onClick={() => toggleItem(id)} className="flex place-items-center justify-between gap-2 w-full border-2 border-violet-300 px-3 py-1 rounded-md hover:border-violet-600">
          {completed ? "Undo" : "Done"}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square fill-violet-400" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
          </svg>
        </button>
        <button onClick={() => deleteItem(id)} className="flex place-items-center justify-between gap-2 w-full border-2 border-violet-300 px-3 py-1 rounded-md hover:border-violet-600">
          Delete
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle fill-violet-400" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
