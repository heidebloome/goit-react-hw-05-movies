import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { List, Img, Text } from "./Cast.styled";
import Loader from "components/Loader/Loader";
import ImgNotAvaliable from '../../../images/01.jpg';
import { ApiService } from "services/api.service";
const apiService = new ApiService();

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        try {
            apiService.fetchMovieCast(movieId).then(data => {
                const cast = data.map(el => {
                    !el.profile_path
                        ? (el.profile_path = ImgNotAvaliable)
                        : (el.profile_path = `https://www.themoviedb.org/t/p/w440_and_h660_face${el.profile_path}`)
                    return el;
                    })
                setCast(cast);
            })
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }, [movieId]);

    return (
        <>
            {isLoading
                ? <Loader />
                : (<List>
                    {cast.map(actor => {
                        return (
                            <li key={actor.id}>
                                <Img src={actor.profile_path} alt="actor" />
                                <Text b>{actor.name}</Text>
                                <Text>{actor.character}</Text>
                            </li>)
                    })}
                </List>)
            }
        </>
    )
}

export default Cast;