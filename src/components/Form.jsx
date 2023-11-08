export default function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const data = new FormData(e.target);
    console.log(data.get("task"));
    props.addItem({
      task: data.get("task"),
      completed: false,
      id: Math.random(),
    });
  }
  return (
    <form onSubmit={onSubmit} className="border-4 p-2 rounded-lg border-blue-200 grid space-y-4 col-span-1">
      <label htmlFor="task">Add To-Do</label>
      <input required id="task" name="task" className="hover:border-violet-600 focus:border-violet-600 border-2 p-2 rounded-md" type="text" placeholder="Enter a to do" />
      <button type="submit" className="border-2 p-2 rounded-md border-violet-300 hover:border-violet-600">
        Add task
      </button>
    </form>
  );
}
