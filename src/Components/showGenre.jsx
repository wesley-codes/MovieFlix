
import Styled from "styled-components"


const Style = Styled.div`
border: 1px solid white;
border-radius: 15px;
padding: 5px;
width:auto;
font-size: 0.8em;
margin-right: 10px

`

const ShowGenre = (props) => {
    return <Style>{props.children}</Style> ;
}
 
export default ShowGenre;