import React from 'react';


class AddFishForm extends React.Component {

      nameRef= React.createRef();
      priceRef= React.createRef();
      statusRef= React.createRef();
      descRef= React.createRef();
      imageRef= React.createRef();


  createFish = (e) => {

    e.preventDefault();

    //console.log(this.nameRef.current.value)

    const fish = {

      name : this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,

    }

    this.props.addFish(fish);

    //refresh the form
    e.currentTarget.reset();



  }


  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
      <input name="name" ref={this.nameRef }  type="text"  placeholder="name" />
      <input price="price" ref={this.priceRef } type="text"  placeholder="price"/>
      <select status="status" ref={this.statusRef } type="text"  placeholder="status">
        <option value="available">Add</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea desc="desc" ref={this.descRef } type="text" placeholder="desc" />
      <input image="image" ref={this.imageRef } type="text"  placeholder="image"/>
      <button type="submit">Add Fish</button>

      <p>Hi</p>
      </form>
    )
  }
}

export default AddFishForm;
