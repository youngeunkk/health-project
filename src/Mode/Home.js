import { useNavigate } from "react-router-dom";
import image1 from "../img/image1.jpg"
import image2 from "../img/image2.jpg"
import image3 from "../img/image3.jpg"
import image4 from "../img/image4.jpg"



function Home() {

    const navigate = useNavigate();

    const images = [
        { id: 1, src: image1, alt: "1" },
        { id: 2, src: image2, alt: "2" },
        { id: 3, src: image3, alt: "3" },
        { id: 4, src: image4, alt: "4" },
    ];

    return (
        <div className="home">
            <h1>POWER AND BUILDING</h1>
            <h2>강력하고 건강하게!</h2>
            <p> 웨이트 트레이닝에서 가장 중요한 3대 운동(스쿼트, 벤치프레스, 데드리프트)을 통해
                몸을 보다 더 강력하고 건강하게 가꾸어 나가고 수치 변화를 매번 기록하고 피드백하며
                보다 더 빠르게 성장하는 것을 목표로 합니다.
            </p>
            <div className="btnarea">
                <button id="mypagebtn" onClick={() => {
                    navigate('/mypage');
                }}>My Page</button>
                <button id="loginbtn" onClick={() => {
                    navigate('/login');
                }}>LOG IN</button>
            </div>
            <div className="images">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
            <div className="footerparent">
                <footer>
                        instagram : xpkye
                </footer>
            </div>          
        </div>
    )
}

export default Home;