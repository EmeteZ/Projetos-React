import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Yuri",
          email: "yurialberto@gmail.com",
          bio: "Sou atleta do Corinthians",
          role: "editor",
        }}
      />
    </div>
  );
}

export default App;
