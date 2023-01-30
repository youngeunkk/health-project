function NewPR({onCreate}) {

    return (
        <div className="freeweightBox">
          <h2>3대 중량을 입력해주세요!</h2>
          <form onSubmit={onCreate}>
            <ul>
              <li>스쿼트 <input type="text" id="squat" name="squat" maxLength="3" size="4"
              ></input> kg</li>
              <li>벤치프레스 <input type="text" id="benchpress" name="benchpress" maxLength="3" size="4"
  
              ></input> kg</li>
              <li>데드리프트 <input type="text" id="deadlift" name="deadlift" maxLength="3" size="4"
              ></input> kg</li>
            </ul>
            <button type="submit" id="sbd" name="sbd">확인</button>
          </form>
        </div>
    )
}

export default NewPR;