import "./card.css";
import vendors from "../assets/vendors.json";

export default function Card({
  card,
  setCardStack,
  number = 0,
  setActiveCard,
  isActive,
  inStack,
}) {
  // **get the right vendor that matches the card

  let chosenVendor = vendors.find((vendor) => vendor.name === card.vendor);

  // **devide cardnumber every third character
  let cardnumber;
  cardnumber = card.cardNumber;
  cardnumber = cardnumber.split("");
  let newarr = [];

  for (let i = 0; i < cardnumber?.length; i += 3) {
    let threedigits = cardnumber.slice(i, i + 3);
    newarr.push(" ");
    newarr.push(threedigits.join(""));
  }

  let a = newarr.join(" ");
  cardnumber = a.toString();

  //  **delete card
  function deleteCard() {
    setCardStack((prev) => {
      let arr = prev.filter((item) => item !== card);
      return arr;
    });
  }

  return (
    <article className="con">
      <section className="delete--section">
        {inStack ? (
          <button className="delete--btn" onClick={deleteCard}>
            x
          </button>
        ) : (
          ""
        )}
      </section>
      <section
        onClick={() => {
          if (card !== isActive) {
            setActiveCard(card);
          }
        }}
        className="card--article"
        style={{
          background: `linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%),${chosenVendor?.color}`,
          color: `${chosenVendor?.textcolor}`,
          transform: `translateY(${number * number + 10 * number}px)`,
        }}
      >
        <section className="card-logo--section">
          {chosenVendor?.color === "#FFAE34" ? (
            <img src="../images/chip-dark.svg" alt="chip" className="chip" />
          ) : (
            <img src="../images/chip-light.svg" alt="chip" className="chip" />
          )}
          <img
            src={`/images/${chosenVendor?.logo}`}
            alt="vendor-logo"
            className="vendor--logo"
          />
        </section>
        <section className="cardnumber--section">
          <p className="cardlabel"> Card Number</p>

          <p className="cardNumber--text">{cardnumber}</p>
        </section>
        <section className="information--section">
          <section className="name">
            <p className="cardlabel"> Carholder Name</p>
            <p className="card-name--text">{card.cardHolderName}</p>
          </section>
          <section className="Valid--section">
            <p className="cardlabel">Valid thru</p>
            <p className="card-valid--text">{card.validThru}</p>
          </section>
        </section>
      </section>
    </article>
  );
}
