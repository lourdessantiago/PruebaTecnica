import { useState } from "react";
import "../styles/listCards.scss";
import CardBackground from "./cardBackground";

function Listcards(props) {


  const {dataList}=props;
  console.log(dataList)
  const listItems = dataList.map((element, index) => <CardBackground key={index} element={element} />);
  return (
    <div className="cards-container">
      
      {listItems}
    </div>
  );
}

export default Listcards;
