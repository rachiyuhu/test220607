import { useParams } from "react-router-dom";

const BoardList = () => {
    const { id } = useParams();

    return (
        <div>
        <h3>{id} 페이지입니다.</h3>
    </div>
    )
};

export default BoardList;