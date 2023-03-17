import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRecode } from '../Slice/recodeSlice';


function Card() {

    const recode = useSelector(state => state.recode);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="read">
            <h2>운동일지🏃‍♀️</h2>
            {
                recode.map(card => (
                    <div className="card" key={card.id}>
                        <h4>{card.date}</h4>
                        <p>{card.body}</p>
                        <div className="deleteArea">
                            <button id="delete" onClick={() => { dispatch(deleteRecode(card.id)) }}>삭제</button>
                            <button id="update" onClick={()=>{navigate(`/update/${card.id}`)}}>수정</button>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}
export default Card;
