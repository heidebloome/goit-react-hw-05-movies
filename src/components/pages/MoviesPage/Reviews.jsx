import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { List, Text } from "./Reviews.styled";
import Loader from "components/Loader/Loader";
import { ApiService } from "services/api.service";
const apiService = new ApiService();

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        try {
            apiService.fetchMovieReviews(movieId).then(data => {
            setReviews(data);
        })
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }, [movieId]);

    return (
        <>
        {
            isLoading
                ?<Loader />
                : (<List>
                    {reviews.length === 0
                        ? <div>No reviews yet...</div>
                        : reviews.map(el => {
                            return (
                                <li key={el.id}>
                                    <Text b>{el.author}:</Text>
                                    <Text>{el.content}</Text>
                                </li>)
                        })}
                </List>)}
        </>
    )
}