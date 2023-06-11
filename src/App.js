import Message from "./comps/message";
import "./App.css";
import Counter from "./comps/counter";
import InputVal from "./comps/inputVal";
import Gallery from "./comps/gallery";
import SelectColor from "./comps/selectColor";
import Exchange from "./comps/exchange";
import SelectCake from "./comps/selectCake";
function App() {
  return (
    <div class="container justify-content-center align-items-center">
      <Counter />
      <Gallery />
      <SelectColor />
      <SelectCake />
      <Exchange />
    </div>
  );
}

export default App;
