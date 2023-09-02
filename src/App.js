import Button from "./components/Button";
import Input from "./components/Input";
import H2 from "./components/H2";
import Image from "./components/Image";
import { SlStar} from "react-icons/sl";
import CITE from "./assets/cite.png";
import RIGHT from "./assets/right.png";
import LEFT from "./assets/left.png";

export default function App(){
  
  return (
    <div className="card">

      <div className="container">
        <H2><SlStar />P2 Indiviual Act Part 2</H2>
        <div className="grid">
          <Image src={CITE} width={100} height={100} variant="circular" />
          <Image src={CITE} width={100} height={100} variant="circular" />
          <Image src={RIGHT} width={200} height={200} variant="rounded" />
          <Image src={LEFT} width={200} height={200} variant="rounded" />
        </div>
      </div>
      <div className="container">
          <Input variant="input1" placeholder="Textfield 1"/>
          <Input variant="input1" placeholder="Textfield 2"/>
          <Input variant="input2" placeholder="Textfield 3" />
          <Input variant="input2" placeholder="Textfield 4"/>
          <Button variant="button1">Cancel</Button>
          <Button variant="button2">Submit</Button>
      </div>
      
    </div>
  );
};



