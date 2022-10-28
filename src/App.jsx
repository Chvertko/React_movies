
import { Component } from 'react';
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import { Main } from './layouts/Main';


class App extends Component{
  
  
  render(){
    return(
      <>
        <Header/>
        <Main/> 
        <Footer/>
      </>
    )
  }
  
}

export default App;
