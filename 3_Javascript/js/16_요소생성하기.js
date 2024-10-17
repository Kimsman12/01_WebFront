const createBox = document.querySelector("#createBox"); // button
const container = document.querySelector(".container"); // div

// createBox 버튼 클릭 시 div.box를 생성하여 
// container 의 마지막 자식으로 추가

createBox.addEventListener("click", ()=>{
  // 1. div요소를 생성, 만들어 졌지만 화면에는 안보임
  const box = document.createElement("div");

  // 2. 만들어진 div요소에 "box" 클래스 추가
  box.classList.add("box"); // => <div class="box"></div>

  // 3. container 의 마지막 자식으로 div요소 추가
  container.append(box);

  // 4. input 요소 생성
  const input = document.createElement("input"); 

  // 5. input 에 속성 넣기
  input.type="text"; // <input type="text">

  // 6. 생성된 input을 box의 마지막 자식으로 추가
  box.append(input);

});
  /*
  요소.classList : 요소의 클래스 목록
  -> 클래스 존재여부, 추가, 제거 등을 할 수 있음.

  * 요소.classList
  -> 요소 목록이 배열 형식으로 반환

  * 요소.classList.contains("클래스명")
  -> 클래스가 있으면 true, 없으면 false

  * 요소.classList.add("클래스명")
  -> 클래스 추가

  * 요소.classList.remove("클래스명")
  -> 클래스 제거
  
  */

// innerHTML로 요소 추가
const innerHTMLBox = document.querySelector("#innerHTMLBox");
innerHTMLBox.addEventListener("click", ()=>{

  container.innerHTML += "<div class='box'><input type='text'></div>"

});
