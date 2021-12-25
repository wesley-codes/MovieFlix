import Styled from "styled-components"
import {useSelector} from "react-redux"
const Style = Styled.div`
text-align: left;
`


const Synopsis = () => {
    const details = useSelector((state) => state.detail.detailsArr);

    return <Style>
        <h3>Synopsis</h3>
        <p>{details.description}</p>
    </Style>;
}
 
export default Synopsis;