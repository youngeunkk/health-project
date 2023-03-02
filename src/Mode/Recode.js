import { useState } from "react";
import { useDispatch } from "react-redux";
import { onCreateRecode } from "../Slice/recodeSlice";


function Recode(props) {

    const [date, setDate] = useState('');

    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    const onCreate = (e) => {
        if (e.target.date.value === '' || e.target.body.value === '') {
            alert('날짜 선택과 글을 작성해주세요');
            e.preventDefault();        
        } else {
            e.preventDefault();
            const finalResult = Object.assign(date, body);
            dispatch(onCreateRecode(finalResult));
            alert('글이 작성되었습니다');
            props.onChangeHomeMode();
        }
    };

    return (
        <div className="recodeArea">
            <form onSubmit={onCreate}>
                <p><input type="date" name="date" id="date" onChange={(e)=>{
                    let date2 = {...date};
                    date2 = {date : e.target.value};
                    setDate(date2)
                }}></input></p>
                <p><textarea name="body" id="textarea" cols="80" row="40" maxLength="300" placeholder="운동일지를 적어주세용" onChange={(e)=>{
                    let body2 = {...body};
                    body2 = {body : e.target.value};
                    setBody(body2)
                }}></textarea></p>
                <button type="submit">저장</button>
            </form>
            <div>
                
            </div>
        </div>
    )
}

export default Recode;