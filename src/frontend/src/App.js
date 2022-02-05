import {Button} from "antd";
import {Radio} from "antd";
import './App.css';
import {getAllStudents} from "./Client";

function App() {
    getAllStudents()
        .then(res => res.json())
        .then(console.log);

  return (
    <div className="App">
      <Button type='primary'>First Button</Button>
        <br/>
        <Radio.Group value='large'>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
    </div>
  );
}

export default App;
