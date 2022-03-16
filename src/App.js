import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AddCard from "./views/AddCard";
import Error from "./views/Error";
import { useEffect, useState } from "react";

function App() {
  const [card, setCard] = useState({
    cardNumber: "card number",
    cardHolderName: "cardholder name",
    validThru: "YY/MM",
    ccv: "ccv",
    vendor: "Bitcoin Inc",
  });

  // **checking  LS and set start value of cardstack
  let cardsStartValue = "";
  let cardStackFromLS = localStorage.getItem("cardStack");
  let activeFromLS = localStorage.getItem("activeCard");
  let parsedAFromLS = JSON.parse(activeFromLS);

  let parsedCSFromLS = JSON.parse(cardStackFromLS);

  if (parsedCSFromLS) {
    cardsStartValue = parsedCSFromLS;
  } else {
    // if LS is Empty then start with an empty array
    cardsStartValue = [];
  }
  const [cardStack, setCardStack] = useState(cardsStartValue);

  // saving to localstorage after updating cardstack-state
  useEffect(() => {
    localStorage.setItem("cardStack", JSON.stringify(cardStack));
  }, [cardStack]);

  let activeValue = "";

  if (parsedAFromLS) {
    activeValue = parsedAFromLS;
  } else {
    activeValue = null;
  }
  const [activeCard, setActiveCard] = useState(activeValue);

  useEffect(() => {
    localStorage.setItem("activeCard", JSON.stringify(activeCard));
  }, [activeCard]);

  return (
    <div className="App">
      {/*here are the routes, one for homepage, one for addCard and then a third for any other path with a link back to home  */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cardStack={cardStack}
              setCardStack={setCardStack}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          }
        />
        <Route
          path="addCard"
          element={
            <AddCard
              setCardStack={setCardStack}
              cardStack={cardStack}
              card={card}
              setCard={setCard}
              activeCard={activeCard}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
