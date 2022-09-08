import logo from "@assets/svg/logo.svg";
import Button from "react-bootstrap/Button";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles["home"]}>
      <header>
        <img alt="logo" className={styles["home-logo"]} src={logo} />
        <p>
          <Button onClick={() => setCount((c) => c + 1)} type="button">
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles["home-link"]}
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          {" | "}
          <a
            className={styles["home-link"]}
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
          <br />
          <a
            className={styles["home-link"]}
            href="https://react-bootstrap.github.io/getting-started/introduction/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Bootstrap Docs
          </a>
          {" | "}
          <a
            className={styles["home-link"]}
            href="https://reactrouter.com/docs/en/v6/getting-started/overview"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Router 6 Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;
