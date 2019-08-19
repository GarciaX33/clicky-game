// will import required files
import React from "react";
import Image from "./components/Image";
import "./App.css";
import friends from "./friends.json"



class App extends React.Component {
  // will set state with score,images is friends json, and images clicked open array
    state = {
        score: 0,
        images:friends,
        images_clicked:[]
    }
    // clickme function passing through the id
    clickme = (id) => {
      // will add +1 to score if clicked
        if (this.state.images_clicked.indexOf(id)===-1) {

            this.setState({
                score:this.state.score + 1,
                images_clicked: [...this.state.images_clicked, id],
                images: this.state.images.sort(() => Math.random() - 0.5)
            })

        } else {
            this.setState({
                score: 0,
                images_clicked: [],
                images: this.state.images.sort( () => Math.random() - 0.5)
            })
        }

    }

    // will then render div below with onclick function in it
    render() {
        return (
            <div>
                <div className="score">CLICKY GAME SCORE: {this.state.score}</div>
                {this.state.images.map( (img) => ( 
                    <Image id={img.id} alt={img.name} src={img.image} key={img.id} onclick={this.clickme} /> )
                )}
            </div>
        )
    }
}
// lastly export App file
export default App;