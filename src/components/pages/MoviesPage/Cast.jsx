import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import { ApiService } from "services/api.service";
const apiService = new ApiService();

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiService.fetchMovieCast(movieId).then(info => {
            console.log(info.data.cast)
            setCast(info.data.cast);
        })
    }, [movieId]);

    return (
        // <p>Cast</p>
        <ul>
                {cast.map(el => {
                    return (
                        <li key={el.id}>
                            <p>{el.name}</p>
                        </li>)
                })}
        </ul>
    )
}