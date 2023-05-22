import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    //x 는 해당 경로의 파라미터가 됨.
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        //console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, [])

    return <div>
        <h1>Detail</h1>
        <div>
            {movies.like_count}
        </div>

    </div>


}

export default Detail;