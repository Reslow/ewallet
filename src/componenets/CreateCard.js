import "./createCard.css";
export default function CreateCard({ card, setCard }) {
  // When input change, card-state is updated
  function handlechange(e) {
    const value = e.target.value;
    setCard({
      ...card,
      [e.target.name]: value,
    });
  }

  // on input focus -> reset value
  function resetInputField(e) {
    e.target.value = "";
  }

  return (
    <form className="form--section">
      <label name="cardNumber" className="label">
        Card number
      </label>
      <input
        type="text"
        maxLength="10"
        name="cardNumber"
        className="input"
        value={card.cardNumber}
        onChange={handlechange}
        onFocus={(e) => resetInputField(e)}
      />

      <label name="cardHolderName" className="label">
        Cardholder name
      </label>
      <input
        type="text"
        maxLength="20"
        name="cardHolderName"
        className="input"
        value={card.cardHolderName}
        onChange={handlechange}
        onFocus={(e) => resetInputField(e)}
      />

      <section className="validAndCcvSection">
        <section className="valid--section">
          <label name="validThru" className="label">
            Valid Thru
          </label>
          <input
            name="validThru"
            type="text"
            maxLength="5"
            className="input"
            value={card.validThru}
            onChange={handlechange}
            onFocus={(e) => resetInputField(e)}
          />
        </section>
        <section className="cvv--section">
          <label name="cvv" className="label">
            CVV
          </label>
          <input
            name="ccv"
            type="text"
            maxLength="3"
            className="input"
            value={card.ccv}
            onFocus={(e) => resetInputField(e)}
            onChange={handlechange}
          />
        </section>
      </section>

      <label name="Vendor" className="label">
        Vendor
      </label>

      <select
        name="vendor"
        id="vendor-select"
        className="input"
        value={card.vendor}
        onChange={handlechange}
      >
        <option value="Block Chain Inc">Block Chain Inc</option>
        <option value="Ninja Bank">Ninja Bank</option>
        <option value="Evil Corp">Evil Corp</option>
        <option value="Bitcoin Inc">Bitcoin Inc</option>
      </select>
    </form>
  );
}
