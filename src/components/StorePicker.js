import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  //use component lib from react lib

  handleClick() {
    alert('hey!');
  }


  myInput = React.createRef();



  goToStore = event => {

    //long explanation

    //1 stop form submitting
    event.preventDefault();

    //2 get text from input
    console.log(this.myInput.current.defaultValue);

    const storeName = this.myInput.current.defaultValue;
    //input.value

    //3change the page to   /store/ value

    this.props.history.push(`/store/${storeName}`);


    //redirect to store/input.value

  };

  render() {
    //puts a method inside a component

    return (

        <div>

        <form className="store-selector" onSubmit={this.goToStore}>

        <button onClick={this.handleClick}>Click me!</button>

        <input type="text"
        ref={this.myInput}
        required
        placeholder="pick a store"
        defaultValue={getFunName()}
        ></input>
        <button type="submit">Visit Store</button>

        </form>

        </div>

    )
  }

}

export default StorePicker;

//in jsx {/* comment */} means im going into javascript and then can leave js comments
