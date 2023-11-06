export default function Form() {
  return (
    <form className="border-4 p-2 rounded-lg border-blue-200 grid space-y-4">
      <label htmlFor="task">Add To-Do</label>
      <input id="task" className="hover:border-violet-600 focus:border-violet-600 border-2 p-2 rounded-md" type="text" placeholder="Enter a to do" />
      <button type="submit" className="border-2 p-2 rounded-md border-violet-300 hover:border-violet-600">
        Submit to do
      </button>
    </form>
  );
}
