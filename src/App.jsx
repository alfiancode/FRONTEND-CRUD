import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import UseAxios from "./hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
function App() {
  // react query for fetching data
  const url = "http://localhost:5000/users";
  const {
    data: dataUser,
    isLoading,
    isError,
  } = useQuery(["users"], () => UseAxios(url));

  // when feching
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // when error
  if (isError) {
    return <div>Error...</div>;
  }
  console.log(dataUser);

  return (
    <div className=" my-10 ">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-5xl text-center mb-10 ">CRUD USER EMAIL </h1>
        <div className=" flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          <div className="basis-1/2 ">
            <Table dataUser={dataUser} />
          </div>
          <div className="basis-1/2 ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
