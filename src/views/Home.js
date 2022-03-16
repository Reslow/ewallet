import Top from "../componenets/Top";
import Card from "../componenets/Card";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home({
  cardStack,
  setCardStack,
  activeCard,
  setActiveCard,
}) {
  // display cardstack (all except active card)

  let displayCards;
  if (cardStack.length > 0 && activeCard) {
    displayCards = cardStack.filter((card) => card.ccv !== activeCard.ccv);
  } else {
    displayCards = cardStack;
  }

  return (
    <section className="home--section">
      <Top title="E-Wallet" subtitle="active card" />
      <section className="active-card--section">
        {/* ACTIVE CARD*/}
        {/* if I have not select and active card I show text instead*/}

        {activeCard ? (
          <Card
            card={activeCard}
            setCardStack={setCardStack}
            setActiveCard={setActiveCard}
            isActive={activeCard}
          />
        ) : (
          <p>[click on card to activate]</p>
        )}
      </section>

      <section className="cardstack-container--section">
        {/*CARDSTACK*/}
        {/* if I dont have any cards from beginning I show text*/}

        {displayCards.length ? (
          displayCards.map((card, index) => {
            return (
              <Card
                card={card}
                key={index}
                number={index}
                setActiveCard={setActiveCard}
                setCardStack={setCardStack}
                isActive={activeCard}
                inStack={true}
              />
            );
          })
        ) : (
          <p> [add a new card into the list]</p>
        )}
      </section>
      <section className="addBtn--section">
        <Link to="addCard" className="LinkToAddCard">
          Add a new Card
        </Link>
      </section>
    </section>
  );
}
