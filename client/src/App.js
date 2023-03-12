import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["hello-world"],
    () => axios.get("http://localhost:3001").then((res) => res.data)
  );

  return <div className="App">Hello</div>;
}

export default App;
