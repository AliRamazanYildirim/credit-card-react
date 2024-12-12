import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
const CreditCardForm = () => {
    const [card, setCard] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCard((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleFocusChange = (e) => {
        setCard((prev) => ({
            ...prev,
            focus: e.target.name
        }));
    };
  return (
    <>
    <Cards number={card.number} name={card.name} expiry={card.expiry} cvc={card.cvc} focused={card.focus} />
    <div className="mt-3">
        <form action="">
            <div className="mb-3">
                <input type="number" name="number" className="form-control" placeholder="Card Number" value={card.number} onChange={handleInputChange} onFocus={handleFocusChange} required />
            </div>
            <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="Name" onChange={handleInputChange} onFocus={handleFocusChange} required />
            </div>
            <div className="row">
                <div className="col-6 mb-3">
                    <input type="number" name="expiry" className="form-control" placeholder="Valid Thru" pattern="\d\d/\d\d" value={card.expiry} onChange={handleInputChange} onFocus={handleFocusChange} required />
                </div>
            </div>
            <div className="mb-3">
                <input type="number" name="cvc" className="form-control" placeholder="CVC" pattern="\d{3,4}" value={card.cvc} onChange={handleInputChange} onFocus={handleFocusChange} required />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary">Confirm</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default CreditCardForm