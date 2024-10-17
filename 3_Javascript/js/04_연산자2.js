// 두 수가 같은지 비교

const cv1 = document.getElementById("compareValue1");
const cv2 = document.getElementById("compareValue2");
const result1 = document.getElementById("result1");

function compareFn(){
  const v1 = cv1.value;
  const v2 = cv2.value;

  //console.log(v1 == v2);

  result1.innerText = (v1 != v2);
}