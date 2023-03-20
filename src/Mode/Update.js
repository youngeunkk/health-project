import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UpdateRecode } from "../Slice/recodeSlice";




function Update(props) {

    const recode = useSelector(state=>{
        return state.recode;
    })
    const {id} = useParams();

    const [date, setDate] = useState(recode[id-1].date);
    const [body, setBody] = useState(recode[id-1].body);

    const dispatch = useDispatch();

    const onUpdate = (e) => {
        if (e.target.date.value === '' || e.target.body.value === '') {
            alert('날짜 선택과 글을 작성해주세요');
            e.preventDefault();        
        } else {
            e.preventDefault();
            let data = {
                id : Number(id),
                date: date,
                body: body
            }
            dispatch(UpdateRecode(data));
            alert('글이 수정되었습니다');
            props.onChangeMyPageMode();
        }
    };

    return (
        <div className="recodearea">
            <form onSubmit={onUpdate}>
                <p><input type="date" name="date" id="date" value={date} onChange={(e)=>{
                    setDate(e.target.value)
                }}></input></p>
                <p><textarea name="body" id="textarea" value={body} cols="80" row="40" maxLength="300" placeholder="운동일지를 적어주세용" onChange={(e)=>{
                    setBody(e.target.value)
                }}></textarea></p>
                <button type="submit" id="update-submit-btn">저장</button>
            </form>
        </div>
    )
}

export default Update;