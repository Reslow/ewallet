import Top from "../componenets/Top";
import Card from "../componenets/Card";
import Createcard from "../componenets/CreateCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./addCard.css";

export default function AddCard({
  setCardStack,
  cardStack,
  card,
  setCard,
  setActiveCard,
}) {
  let navigate = useNavigate();

  function redirectToStart() {
    navigate("/");
  }

  // Handle some input errors
  function clickHandler() {
    if (card.cardNumber && card.cardHolderName && card.validThru && card.ccv) {
      console.log(card.cardNumber.length);
      let alreadyExist = cardStack.find((item) => item.ccv === card.ccv);
      if (alreadyExist) {
        console.log("ccv already used");
      } else if (card.cardNumber.length < 10) {
        console.log("10 digits is required!");
      } else if (card.cardNumber.length > 10) {
        console.log("10 digits is required!!");
      } else if (card.cardHolderName.length < 3) {
        console.log("Cardholders full name is required, atleast 3 characters");
      } else if (card.validThru.length < 5) {
        console.log("YY/MM is required! ex: 05/22");
      } else if (card.ccv.length < 3) {
        console.log("3 digits is required");
      } else {
        // if user has fileld input correctly cardstack is updated and user gets rediracted

        setCardStack([...cardStack, card]);
        redirectToStart();
      }
    } else {
      console.log("invalid card credentials");
    }
  }
  return (
    <div className="addCard--section">
      <Link to="/" className="homelink">
        Back
      </Link>
      <Top title="add new card" subtitle="New card" />
      <section className="card--section">
        <Card
          card={card}
          setActiveCard={setActiveCard}
          setCardStack={setCardStack}
        />
      </section>
      <section className="createCard--section">
        <Createcard card={card} setCard={setCard} />
      </section>
      <section className="addCardBtn--section">
        <button className="add" onClick={clickHandler}>
          add card
        </button>
      </section>
    </div>
  );
}
