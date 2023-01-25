import "../styles/App.css";
import "../styles/gridlist.css";
import "../styles/quiz.css";
import Layout from "./Layout";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Quiz />
    </Layout>
  );
}

export default App;
