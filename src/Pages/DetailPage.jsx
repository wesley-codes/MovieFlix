import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Styled from "styled-components";
import { FaStar, FaClock } from "react-icons/fa";

import Synopsis from "../Components/Synopsis";
const Styles = Styled.div`

margin-top: 2%;
color:white;
img{
    width: 100%;
    height: 80%;
}

.detail__container{
    text-align:center;
}
img{
  width:100%;
  height:400px;
  object-fit: cover;
}
h2{
    font-weight: 700;
}
hr{
    color:white;
}

.date__Container{
    
    justify-content:center;
    text-align:right;
}
.genre{
    display:flex;
}
.timer, .rating{
   display:flex;
}
.genre__Container{
    text-align:left;
}
.tile__Container{
  display:flex;
  justify-content:space-evenly;
}
`;

const DetailsPage = () => {
  const details = useSelector((state) => state.detail.detailsArr);
  
console.log(details);
  //const showGenre = details.genre.map((item) => <ShowGenre>{item}</ShowGenre>);

  return (
    <Styles>
      <Container>
        <Row>
          <Col lg={6} md={6} className="detail__container">
            <h2>{details.title}</h2>
            <div className="tile__Container">
              <div className="timer">
                {" "}
                <FaClock /> <p>{details.duration} mins</p>
              </div>
              <div className="rating">
                {" "}
                <FaStar /> <p>{details.rating}(IMDb)</p>
              </div>
            </div>
            <hr></hr>
            <Row>
              <Col ld={6} md={6} className="date__Container">
                <h6>Release date</h6>
                <p>{details.releaseDate}</p>
              </Col>
              <Col ld={6} md={6} className="genre__Container">
                <h6>Genre</h6>

                <div className="genre"></div>
              </Col>
            </Row>

            <hr></hr>
            <Synopsis />
          </Col>
          <Col lg={6} md={6}>
            <div className="img__Container">
              <img src={`https://image.tmdb.org/t/p/original/${details.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default DetailsPage;
