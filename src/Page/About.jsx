
import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>About</h1>
            <p>과제 제출을 위한 이랙트 프론트엔드</p>
            
            
            <br></br>
            <button type="button" class="btn btn-warning"
            onClick={()=>{
                navigate("/");
            }}
            >뒤로가기</button>
        </div>
    )
};
export default About;