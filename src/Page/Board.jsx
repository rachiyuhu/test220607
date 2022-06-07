
import { useNavigate, Link, Outlet, NavLink } from "react-router-dom";
import BoardList from "./BoardList";

const Board = () => {
    const navigate = useNavigate();
    const memo = [1,2,3,4,5];



    return (
        <div>
            <h1>Board</h1>
            <p>파라미터 및 중첩 라우터를 사용하여 아래 Board 내용이 보입니다.</p>

            <ul>
                {memo.map((num,index) => {
                    <li key={index}>
                        <NavLink to={`/board/${num}`}>
                            게시글 {num}
                        </NavLink>

                    </li>
                })}
            </ul>

            <Outlet></Outlet>




            <br></br>
            <button type="button" class="btn btn-warning"
            onClick={()=>{
                navigate("/");
            }}
            >뒤로가기</button>
        </div>
    )
};
export default Board;