import express from 'express';
import { addMovie } from '../controllers/movie-controller';
const movieRouter = express.Router();

movieRouter.get("/",getMovies);
movieRouter.post("/",addMovie);

export default movieRouter;