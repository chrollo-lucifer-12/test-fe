const About = () => {
  return (
    <button
      onClick={() => {
        console.log(import.meta.env.VITE_APP_NAME);
      }}
    >
      print
    </button>
  );
};

export default About;
