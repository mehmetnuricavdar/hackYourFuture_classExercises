import "./App.css";
//import userDb from "./userDb.json";
//import UserList from "./UserList";
import usersExpanded from "./usersExpanded.json";
import UserListExpanded from "./components/expanded-list/UserListExpanded";
import Counter from "./components/CounterButton";
import FibonacciCounter from "./components/fibonacci/FibonacciCounter";

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <UserListExpanded users={usersExpanded} />
      <h1>Counter Button</h1>
      <Counter />
      <FibonacciCounter/>
    </div>

  );
}

export default App;
