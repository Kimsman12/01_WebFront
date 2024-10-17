const addBtn = document.getElementById("add");
const calcBtn = document.getElementById("calc");

const container = document.querySelector(".container");
// 최종적으로 만들어진 요소를 붙이는 요소

// 추가버튼 클릭 시
addBtn.addEventListener("click", ()=>{

  // 1. div 요소 생성하기
  const row = document.createElement("div");

  // 2. 요소에 class 추가하기
  row.classList.add("row");

  // 3. input요소 생성하기
  const input = document.createElement("input");

  // 4. type = "number" 추가하기
  //input.type = "number";
  input.setAttribute("type","number");

  // 5. 클래스 "input-number" 추가하기
  input.classList.add("input-number");

  // 6. span요소 생성하기

  const span = document.createElement("span");

  // 7. span 태그에 클래스 "remove-row" 추가

  span.classList.add("remove-row");

  // 8. 내용으로 &times; 추가 (innerHTML)

  span.innerHTML = "&times;";

  //--------------------------------------
  
  // 조립하기

  // div.row 요소에 자식으로 input 추가
  row.append(input, span);

  // 완성된 div.row 를 container의 마지막 자식으로 추가하기
  container.append(row);

  // ----------------------------------------

  // 클릭된 x버튼 부모요소(div.row)를 제거
  span.addEventListener("click", (e)=>{
    
    // 현재 이벤트가 발생한 요소(클릭된 x버튼)
    // 부모 요소를 선택
    const parent = e.target.parentElement; // == div.row

    // 부모 요소를 제거하기
    parent.remove();

  });

});


// 계산버튼 클릭 시
  calcBtn.addEventListener("click", ()=>{

    // 1. 모든 .input-number요소 얻어오기
    const numbers = document.querySelectorAll(".input-number");

    // 2. for문으로 모든 요소 접그나여
    // 작성된 값(value)을 얻어와
    // 숫자로 변경(Nymber()) 한 후
    // 합계 저장 변수 sum 누적

    let sum = 0;


    for(i=0; i<numbers.length; i++){
      sum += Number(numbers[i].value);
    }

    // 3. for문 끝나면 alert로 sum값 출력

    alert("결과 :" + sum);

  });