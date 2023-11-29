import { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import OrderDetails from "./components/OrderDetails";
import OrderTable from "./components/OrderTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Header />
      <section className="reeco-section">
        <Container>
          <OrderDetails />
        </Container>
      </section>
      <section className="reeco-section">
        <Container>
          <OrderTable />
        </Container>
      </section>
    </>
  );
}

export default App;
