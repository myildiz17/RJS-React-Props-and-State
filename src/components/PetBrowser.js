import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {

  // renderPet=()=>{
  //   return this.props.pets.pets.map(pet=>{
  //     debugger
  //     return <Pet singlePet={pet}/>
  //   })
  // }
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.pets.map(pet=>{
          return <Pet {...pet} onAdoptPet={this.props.onAdoptPet}/>
        })}
      </div>
    );
  }
}

export default PetBrowser;
