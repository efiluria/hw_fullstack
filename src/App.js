import Message from "./comps/message";
import "./App.css";
import Counter from "./comps/counter";
import InputVal from "./comps/inputVal";
import Gallery from "./comps/gallery";
import SelectColor from "./comps/selectColor";

function App() {
  return (
    <div class="container justify-content-center align-items-center">
      {/* חיבור בין קומפנינטה
      פשוט זימון שלה ממש כמו תגית יחידה */}
      {/* <Message txt="first 111111" /> */}
      {/* 
      let msg1 = new Message("first 1111")
      msg1.render()
      */}
      {/* <Message txt="last 22222"  /> */}
      <Counter />
      <Gallery />
      <SelectColor />
      <InputVal />
    </div>
  );
}

export default App;
