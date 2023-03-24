# **3대 500을 위하여🚀**

🏋️‍♂️ 3대 운동(squat, benchpress, deadlift)의 훈련일지를 기록하고 차트로 수치화 하는 웹 애플리케이션입니다 !


## **💪개요**

 저는 3대 운동을 즐겨했지만 어느 순간 성장이 멈춰버리고 말았습니다.   
 이를 해결하기 위해 어떤 운동 루틴이 효과적이고 어떤 운동 루틴이 효과적이지 못 했는지를 탐구하고,  
 올바른 운동 방향을 잡을 수 있는 웹 애플리케이션을 만들게 되었습니다.    

## **📑주요 기능**

* **중량 설정**
  * 새 중량 갱신하기 버튼 클릭 시 아래 화면으로 이동   

  ![중량설정1](https://user-images.githubusercontent.com/101387557/227459433-a139b65d-a20f-4868-93e0-24ca49eb0d2e.png)

  * 중량 설정 완료하면 Home에서 차트로 날짜 별 중량 확인 가능   
  
  ![중량설정2](https://user-images.githubusercontent.com/101387557/227459451-e1b8a467-1bd1-49ef-abdc-9931f39e7ea1.png)

* **Create**
  * 훈련일지 작성 (선택한 날짜와 함께 저장)  
  
  ![Create](https://user-images.githubusercontent.com/101387557/227442552-7d99434b-7dc3-43fb-bc3c-2a3b50427851.gif)   



* **Read**
  * 저장한 훈련일지가 카드 형식으로 Home에서 확인 가능  
  
  ![Read](https://user-images.githubusercontent.com/101387557/227443867-25742f19-c93f-4382-ace1-08a2b22c931c.png)  


* **Update**
  * 카드 안에 수정 버튼 누르게 되면 훈련일지(recode)의 id와 일치하는 훈련일지를 불러와서 수정 가능

  ![Update](https://user-images.githubusercontent.com/101387557/227446209-56c61577-6d21-402d-964d-35de4c497baf.gif)   



* **Delete**
  * id와 일치하는 훈련일지 삭제 가능

  ![Delete](https://user-images.githubusercontent.com/101387557/227443062-f610ed87-45e9-4afd-b207-1f05f3ad22c5.gif)
   



* [react Router로 페이지 렌더링](https://github.com/youngeunkk/health-project/wiki/react-Router)   


   



* [redux-persist로 redux 상태값 유지](https://github.com/youngeunkk/health-project/wiki/redux-persist)


## **💻실행**

```
npm install 
npm start 
```
  
 ## **💡느낀 점**
   
      
  계획 없이 그저 머릿속으로만 상상한 것들을 바로 프로젝트로 만들려고 하니깐 여러가지 이슈가 발생했습니다.   

  그래서 앞으로 프로젝트를 만들 때는 구체적인 계획을 먼저 세운 다음 실행에 옮겨야겠다고 느꼈습니다.   

  그리고 하나의 기능을 구현하면 또 다른 무언가가 필요하고 또 다른 무언가가 부족해보여서 앞으로 이 프로젝트를 멈추지 않고 계속해서 만들어나갈 예정입니다.      
     
     

## **🛒추가할 사항**
* 페이지네이션
  * 운동일지가 많아질 때 정리하기 위함
* 바디체크기능
  * 체중 대비 최고 중량을 함께 볼 수 있게 하기 위함
  * 다이어트 효과나 벌크업 효과도 확인하기 위함