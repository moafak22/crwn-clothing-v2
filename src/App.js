import "./categories.styles.scss"
import Home from "./routes/home/home.component";
import {Routes,Route} from "react-router-dom"
import Navigatoin from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.compnent";

const Shop = ()=>{

  return <h1>hello world</h1>
}



const App = () => { 
  return(
  <Routes>
    <Route path="/" element={<Navigatoin />}>
      <Route index element = {<Home />} />
      <Route path = '/shop' element = {<Shop />} />
      <Route path = '/sign-in' element = {<SignIn />} />      
    </Route>
  </Routes>
  )
}
export default App;

