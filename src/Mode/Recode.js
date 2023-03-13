import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateRecode } from "../Slice/recodeSlice";


function Recode(props) {

    const recode = useSelector(state => {
        return state.recode;
    })

    const [date, setDate] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();


    const onCreate = (e) => {
        if (e.target.date.value === '' || e.target.body.value === '') {
            alert('날짜 선택과 글을 작성해주세요');
            e.preventDefault();
        } else {
            e.preventDefault();
            let data = {
                id: recode.length + 1,
                date: date,
                body: body
            }
            dispatch(CreateRecode(data));
            alert('글이 작성되었습니다');
            props.onChangeMyPageMode();
        }
    };

    return (
        <div className="recodeArea">
            <form onSubmit={onCreate}>
                <p><input type="date" name="date" id="date" onChange={(e) => {
                    setDate(e.target.value)
                }}></input></p>
                <p><textarea name="body" id="textarea" cols="80" row="40" maxLength="300" placeholder="운동일지를 적어주세용" onChange={(e) => {
                    setBody(e.target.value)
                }}></textarea></p>
                <button id="save" type="submit">저장</button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default Recode;