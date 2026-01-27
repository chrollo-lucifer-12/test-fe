import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ color: "white" }}>
      hgiud
      <button
        onClick={() => {
          console.log(import.meta.env.VITE_APP_NAME);
        }}
      >
        print
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        about
      </button>
    </div>
  );
};

export default Home;
