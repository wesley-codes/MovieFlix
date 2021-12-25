import MovieItem from "./MovieItem";
import Styled from "styled-components";
import {useSelector} from "react-redux"
import { Container, Row, Col } from "react-bootstrap";
const Styles = Styled.div`

ul{
}

li{
    width: 100%;
    list-style-type: none:

}
`;

const Movies = () => {

  const MovieData = useSelector(state => state.detail.MoviesApi)

   
/*   const DUMMYDATA = [
    {
      id: "m1",
      movieTitle: "Spider Man",
      movieImg:
        "https://i.pinimg.com/564x/93/3a/27/933a27b7e07779fe6a2c4ead52207db9.jpg",

      description:
        "tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure"],
    },

    {
      id: "m2",
      movieTitle: "Man",
      movieImg:
        "https://i.pinimg.com/564x/71/fa/6c/71fa6cbd9e89db18f191370fea47ea1b.jpg",

      description:
        "Lorem ipsum dolor itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure"],
    },
    {
      id: "m3",
      movieTitle: "Man",
      movieImg:
        "https://i.pinimg.com/564x/b4/4b/72/b44b7293182a595c4030b2ab05903ccf.jpg",

      description:
        "Lorem ipsum dolor itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure", "Sci-fi"],
    },
    {
      id: "m4",
      movieTitle: "Man",
      movieImg:
        "https://i.pinimg.com/564x/b8/6f/3c/b86f3c36d711b23581b3aec6728041d3.jpg",

      description:
        "Lorem ipsum dolor itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure"],
    },
    {
      id: "m5",
      movieTitle: "Man",
      movieImg:
        "https://i.pinimg.com/564x/0b/7a/12/0b7a12e4901957e91341b490616ad994.jpg",

      description:
        "Lorem ipsum dolor itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure"],
    },
    {
      id: "m6",
      movieTitle: "Man",
      movieImg:
        "https://i.pinimg.com/564x/93/3a/27/933a27b7e07779fe6a2c4ead52207db9.jpg",

      description:
        "Lorem ipsum dolor itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure"],
    },
    {
      id: "m7",
      movieTitle: "Man",
      movieImg:
        "https://i.pinimg.com/564x/93/3a/27/933a27b7e07779fe6a2c4ead52207db9.jpg",

      description:
        "Lorem ipsum dolor itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru.",
      duration: 152,
      rating: 5.0,
      releaseDate: "December 4, 2039",
      genre: ["Action", "Adventure"],
    },
  ]; */

  const items = MovieData.map((item, index) => (
    <Col lg={3} md={4} sm={6}>
      <li key={item.id}>
        <MovieItem
          id={item.id}
          img={item.poster_path}
          title={item.title}
          description={item.overview}
          duration={item.duration}
          rating ={item.vote_average}
          releaseDate={item.release_date}
          genre={item.genre}
        />
          
           

      </li>
    </Col>
  ));

  return (
    <Styles>
      <Container>
        <ul>
          <Row>{items}</Row>
        </ul>
      </Container>
    </Styles>
  );
};

export default Movies;
