import Footer from "@components/layout/Footer";
import { User, UserContext } from "@context/UserContext";
import Navbar from "@layout/Navbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const App = () => {
  const [userState, setUserState] = useState<User | undefined>(undefined);

  return (
    <>
      <Navbar />
      <UserContext.Provider value={{ userState, setUserState }}>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </UserContext.Provider>
      <Footer />
    </>
  );
};

export default App;
