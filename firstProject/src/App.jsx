import "./app.css";
import Coreconcept from "./components/Coreconcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS as Core } from "./components/data";

function App() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center p-4 w-full">
      <Header />
      <section className="flex justify-center core-conecpt">
      <main className="mt-8 w-full sm:w-[90%] md:w-[75%] lg:w-[92%] bg-black min-h-full p-4 rounded-lg">
        <h2 className="text-center text-color mt-4 text-4xl  font-bold">
          Core Concept
        </h2>
        <ul className="flex flex-wrap gap-4 group justify-center mt-3 xl:flex-nowrap lg:grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-1">
          {Core.map((item,index) => {
            return (
              <Coreconcept
                title={item.title}
                image={item.image}
                key={index} 
                desc={item.description}
              />
            );
          })}
        </ul>
      </main>
      </section>
      <section id="Example" className="flex flex-col ml-20 w-80 self-start">
        <h2 className="text-color mt-4 text-4xl font-bold  ">Examples</h2>
        <menu className="flex gap-0.5 mt-5">
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;
