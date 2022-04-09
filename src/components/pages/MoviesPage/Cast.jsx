import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import { List, Img, Text } from "./Cast.styled";
import Loader from "components/Loader/Loader";
import { ApiService } from "services/api.service";
const apiService = new ApiService();

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        apiService.fetchMovieCast(movieId).then(info => {
            setCast(info.data.cast);
            setIsLoading(false);
        })
    }, [movieId]);

    return (
        <>{
            isLoading
                ? <Loader />
                : (<List>
                    {cast.map(el => {
                        return (
                            <li key={el.id}>
                                <Img src={el.profile_path
                                    ? `https://www.themoviedb.org/t/p/w440_and_h660_face${el.profile_path}`
                                    : 'https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg'
                                }
                                    alt="actor" />
                                <Text b><b>{el.name}</b></Text>
                                <Text>{el.character}</Text>
                            </li>)
                    })}
                </List>)
        }</>)
}