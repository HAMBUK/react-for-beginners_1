import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Info ({coverImg, title, rating, description}){

    return  <div>
        <img src={coverImg} />
        <h1>
            {title}
        </h1>
        <div>
            {rating}
        </div>
        <p>
            {description}
        </p>
    </div>
    
}

export default Info;