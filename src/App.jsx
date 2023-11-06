import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  // const [items, setItems] = useState([
  //   {
  //     task: "Fodre katten",
  //     completed: false,
  //     id: 1,
  //   },
  //   {
  //     task: "Mælke katten",
  //     completed: true,
  //     id: 2,
  //   },
  // ]);
  return (
    <body className="space-y-4 max-w-sm mx-auto">
      <h1 className="text-4xl text-red-700">This is app</h1>
      <Form />
      <List />
    </body>
  );
}
