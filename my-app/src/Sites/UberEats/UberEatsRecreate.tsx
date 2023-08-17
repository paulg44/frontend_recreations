// Component for uber eats recreation
import uberEatsImage from "../../IMG/ubereats_homepage-PhotoRoom.png";
import "./UberEatsRecreate.css";

function UberEatsRecreate() {
  return (
    <div
      style={{
        background: `url(${uberEatsImage}) no-repeat center center/cover`,
        height: "100vh",
      }}
    >
      <nav>
        <div className="leftNav">
          <div className="burgerMenu"></div>
          <div className="pageName">
            Uber <span>Eats</span>
          </div>
        </div>

        <div className="rightNav">
          <button className="loginBtn">Log in</button>
          <button className="signupBtn">Sign up</button>
        </div>
      </nav>

      <section className="mainSection">
        <h2>Order food to your door</h2>
        <div className="enterAddress">
          <input placeholder="Enter delivery address"></input>
          <select>
            <option>Deliver Now</option>
            <option>Schedule for later</option>
          </select>
          <button className="foodBtn">Find Food</button>
        </div>
        <p>Sign in for your recent addresses</p>
      </section>
    </div>
  );
}

export default UberEatsRecreate;
