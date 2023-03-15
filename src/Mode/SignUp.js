import { useState } from "react"

function SineUp() {

    const [mail, setMail] = useState();
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [pw, setPw] = useState();

    const handleMailChange = (e) => {
        setMail(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleIdChange = (e) => {
        setId(e.target.value);
    }
    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

    return (
        <div className="sineup">
            <form>
                <div>
                    <h1>회원가입</h1>
                </div>
                <div className="input-wrapper">
                    <label>
                        E-mail<br></br>
                        <input type="text" value={mail} onChange={handleMailChange} />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label>
                        Name<br></br>
                        <input type="text" value={name} onChange={handleNameChange} />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label>
                        ID<br></br>
                        <input type="text" value={id} onChange={handleIdChange} />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label>
                        Password<br></br>
                        <input type="text" value={pw} onChange={handlePwChange} />
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