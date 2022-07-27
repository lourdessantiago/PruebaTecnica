import UserFillAdd from "./components/userFillAdd";
import "./App.scss";
import Header from "./components/header";
import Listcards from "./components/listCards";
import { useState } from "react";
import listEstudiantes from "./db/hp-students.json";
import listStaff from "./db/hp-staff.json";

function App() {
  const copyEstudiantes = [...listEstudiantes].map((e) => {
    e["favorito"] = false;
    return e;
  });
  const copyStaff = [...listStaff].map((e) => {
    e["favorito"] = false;
    return e;
  });
  
  const [listElement, setListElement] = useState(copyEstudiantes);
  const selection = (categoria) => {
    switch (categoria) {
      case "estudiantes":
        setListElement(copyEstudiantes);
        break;
      case "staff":
        setListElement(copyStaff);
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header mostrar={selection} />
        <Listcards dataList={listElement} />
        <UserFillAdd />
      </header>
    </div>
  );
}

export default App;
