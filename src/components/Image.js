    import React from "react";
import "./image.css";
// will start image function with props passed through as parameter
function Image(props) {
    // will return images with onclick function
    return(
        <span>
            <img 
                src={props.src} 
                alt={props.alt} 
                id={props.id} 
                key={props.id}
                onClick={() => props.onclick(props.id)}
            />
        </span>
    )
}
// will lastly export Image file
export default Image;