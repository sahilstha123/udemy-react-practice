import "./app.css";
import Coreconcept from "./components/Coreconcept";
import Header from "./components/Header";
import componentImg from "./assets/components.png";

function App() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center p-4 w-full hides">
      <Header />
      <main className="mt-8 w-[90%] sm:w-[80%] lg:w-[70%] bg-black min-h-full p-4 rounded-lg">
        <h2 className="text-center mt-4 text-4xl text-white font-bold">Core Concept</h2>
        <ul className="flex flex-wrap gap-5 justify-center group">
          <Coreconcept title="Component 1" image={componentImg} />
          <Coreconcept title="Component 2" image={componentImg} />
          <Coreconcept title="Component 3" image={componentImg} />
        </ul>
      </main>
    </div>
  );
}

export default App;
