import Styled from "styled-components";
import { FaRegStar } from "react-icons/fa";
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {favoritesActions} from "../../Store/Favorites-Slice"
const Styles = Styled.div`
border: 1px solid white;

width: 100%;
position:relative;



.descp{
   position: absolute;
   background: rgba(0,0,0,0.6);
 
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  color:white;
  opacity:0;
  transition: 0.25s;
}

.descp > *{
    transform:translateY(20px);
    transition:transform 0.25s
}


.descp > *{
    transform:translateY(20px);
    transition:transform 0.25s
}

img{
 width:100%;
 height:300px;
 object-fit: cover;

}
.img__Container{
  position:relative;

}

p{
  color: white;
  margin:0px;
}

.title__container{
    display:flex;
  padding:5px;
  align-items: center;
    justify-content:space-between;

}

.icon{
    color: white;
}

.descp:hover{
opacity:1;
}

`;

const MovieItem = (props) => {

   const dispatch = useDispatch()
  

  const descp = `${props.description}`;
  let newStr;
  if (descp.length > 20) {
    newStr = descp.slice(0, 80);
  }

  const sendDetails=()=>{
   const details = {
     id: props.id,
     title: props.title,
     movieImg : props.img,
     description: props.description,
     duration: props.duration,
     rating:props.rating,
     releaseDate: props.releaseDate,
     genre: props.genre

   }
console.log(details);
  dispatch(favoritesActions.DisplayToDetails(details))
  }

  return (
    <Styles>
      <div className="img__Container">
        <img src={`https://image.tmdb.org/t/p/original/${props.img}`} alt="" />
      </div>
      <div className="title__container">
        <p>{props.title}</p>
        <FaRegStar className="icon" />
      </div>
      <div className="descp">
        <p>
          {newStr}.<Link to={`/Moviedetail/${props.id}`} onClick={sendDetails}>ReadMore</Link>
        </p>
      </div>
    </Styles>
  );
};

export default MovieItem;
