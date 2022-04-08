import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import { List, Text } from "./Reviews.styled";

import { ApiService } from "services/api.service";
const apiService = new ApiService();

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiService.fetchMovieReviews(movieId).then(info => {
            setReviews(info.data.results);
        })
    }, [movieId]);

    return (
        <List>
            {reviews.length === 0
                ? <div>No reviews yet...</div>
                : reviews.map(el => {
                return (
                    <li key={el.id}>
                        <Text b>{el.author}:</Text>
                        <Text>{el.content}</Text>
                    </li>)
            })}
        </List>
    )
}