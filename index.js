const line = 20;
const column = 20;
// const maxSeats = 40;
var limitCt = 0;
window.onload = function() {
  setInterval("sprinkle()", 1000);

  selectChangeCt = Math.floor(Math.random()*10)+1

  let k = 1;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      const div = document.createElement('div');
      div.id='black_rectangele_' + k;
      div.classList.add('box');
      div.classList.add('flex');
      div.classList.add('change_ct_' + selectChangeCt);
      document.body.appendChild(div);
      k++;
    }
    const div2 = document.createElement('div');
    document.body.appendChild(div2);
  }
}

//現在時刻を表示する関数
function sprinkle(){
  console.log(Math.floor(Math.random()*10)+1);
  let attr = document.getElementById("black_rectangele_1");
  if (!attr.classList.contains('box_disappear')) {
    attr.classList.add("box_disappear");
  } else {
    attr.classList.remove("box_disappear");
  }
}

var setSheat = function(clickedButton) {
  let setCt = true;
  while(setCt  && limitCt < maxSeats){
    let seatCt = Math.floor(Math.random() * 40 + 1);
    let attr = document.getElementById("seat_" + seatCt);
    if (!attr.classList.contains('man') && !attr.classList.contains('woman')){
      attr.classList.add(clickedButton);
      setCt = false;
      limitCt++;
    }
  }
};

var reset = function() {
  for (let k = 1; k <= maxSeats; k++) {
      var attr = document.getElementById("seat_" + k);
      if (attr.classList.contains('man')){
        attr.classList.remove('man');
      }
      if (attr.classList.contains('woman')){
        attr.classList.remove('woman');
      }
  }
  limitCt = 0;
};
