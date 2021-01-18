import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

state = {
  fishes: {},
  order: {},
};

addFish = (fish) => {
  //1.take a copy of existing state
  const fishes = {...this.state.fishes};
  //2.add new fish to that fishes variable
  fishes[`fish${Date.now()}`] = fish;

  //3 set the new state

  this.setState({
    fishes: fishes
    //can also just say fishes if value and property are the same , even on one line this.setState({ fishes });
  });

  console.log('Adding a Fish!');
}

loadSampleFishes =() => {

  this.setState({fishes:sampleFishes});

}

render() {

  return (

    <div className="catch-of-the-day">
          <p>Hello</p>

    <div className="menu">


    <p>Hello</p>

    <ul className="fishes">

      <Fish/>

      {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}>{key}</Fish>)}



    </ul>

      <Header tagline="Hi"/>

      <Header tagline="Hi2"/>

    {/* tagline = is an attribute (prop) - custom attribute - that's why its my g here */}

    {/*feeds in to here*/}

    {/* $r . This is the current one - the current instance .*/}

    </div>


      <Order/>

      <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>


    </div>


    )
}

}

export default App;
