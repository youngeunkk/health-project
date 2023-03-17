import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateUser} from "../Slice/userSlice";

function SineUp() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [nickname, setNickname] = useState();
    const [id, setId] = useState();
    const [pw, setPw] = useState();

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    }
    const handleIdChange = (e) => {
        setId(e.target.value);
    }
    const handlePwChange = (e) => {
        setPw(e.target.value);
    }
    const onSubmit = (e) => {
        if (nickname.length < 1) {
            e.preventDefault();
            alert('닉네임은 2글자 이상 입력하셔야 합니다!');
        } else if (id.length < 4)  {
            e.preventDefault();
            alert('ID를 4글자에서 8글자 사이로 입력해주세요!');
        } else if (pw.length < 4) {
            e.preventDefault();
            alert('비밀번호를 4글자에서 8글자 사이로 입력해주세요!');
        } else {
            e.preventDefault();
            let data = {
                name: nickname,
                id: id,
                pw: pw
            }
            dispatch(CreateUser(data));
            alert('회원가입이 완료되었습니다')
            navigate('/')
        }
    }

    return (
        <div className="sineup">
            <form onSubmit={onSubmit}>
                <div>
                    <h1>회원가입</h1>
                </div>
                <div className="input-wrapper">
                    <label>
                        닉네임을 입력해주세요!<br></br>
                        <input type="text" name="nickname" onChange={handleNicknameChange} />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label>
                        아이디를 입력해주세요! (4-8자리 글자)<br></br>
                        <input type="text" maxLength='8' name="id" onChange={handleIdChange} />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label>
                        비밀번호를 입력해주세요 (4-12 글자)<br></br>
                        <input type="password" maxLength='12' name="password" onChange={handlePwChange} />
                    </label>
                </div>
                <div className="submit-wrapper">
                    <button type="sineup-submit">회원가입하기</button>
                </div>
            </form>
        </div>
    )
}

export default SineUp;