import {useState ,useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Info from "../components/Info.js";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
        setLoading(false);
        
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <div>
        {loading? 
        <h1>Loading...</h1>: 
        <div>
            <Info 
            coverImg={details.medium_cover_image} 
            title={details.title_long}
            rating={details.rating}
            description={details.description_full}
            />
            <button><Link to="/">Back to Home</Link></button>
            </div>}
        </div>}



export default Detail;