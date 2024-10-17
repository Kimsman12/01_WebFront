// break 확인

function check1() {

  // 1부터 10까지 1씩 증가하다가 5가되면 멈춤
  for(let i = 1; i <= 10; i++) {
    console.log("i : " , i);

    if(i == 5) break;
  }

}
// 무한 반복하는 while문 멈추기
function check2() {

  let i = 1;
  while(true){
    console.log(i++);

    if(i > 10) break;
  }
}

// continue 확인
function check3() {
  // 1부터 20까지 1씩 증가하며 출력
  // 단, 3의 배수는 건너뛰기

  for(let i = 1; i <= 20; i++){

    // 3의 배수인 경우
    if(i % 3 == 0) continue;

    // 3의 배수인 경우 아래 코드를 수행하지 않음

    console.log("i :", i);
  }
}
function check4() {

  // 1부터 30까지 1씩 증가하며 출력
  // 단, 홀수 또는 10의 배수는 건너뛰기

  for(let i = 1; i <= 30; i++){

    if(i % 2 == 1 || i % 10 == 0) continue;
 
 
    console.log("i :",i)
  }


}

// break, continue 둘다 적용해 보기

/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기


  최종적으로 아래처럼 출력되어야 함
 
  01235679
  01235679
  01235679
*/

function check5() {

  for(let y = 1; y <= 5; y++) {
    
    let str = " ";
    
    for(let x = 0; x <= 9; x++){

      if (x != 0 && x % 4 == 0) continue;

      str += x;

      
        }
      console.log(str);

      if(y == 3) break;

    }
  }


//-----------------------------------------------

  const answer = Math.floor(Math.random() * 200) + 1;

  function startGame() {
    
    



  }