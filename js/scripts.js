//front-end code
$(document).ready(function(){
  $("#test").click(function(){

    var score=0;
    var answer=[];
    var answer1 = $("input[name='Q1']:checked").val();
    answer.push(answer1);
    var answer2 = $("input[name='Q2']:checked").val();
    answer.push(answer2);
    var answer3 =$("input[name='Q3']:checked").val();
    answer.push(answer3);
    var answer4 =$("input[name='Q4']:checked").val();
    answer.push(answer4);
    var answer5 =$("input[name='Q5']:checked").val();
    answer.push(answer5);
    var answer6 =$("input[name='Q6']:checked").val();
    answer.push(answer6);
    var answer7 =$("input[name='Q7']:checked").val();
    answer.push(answer7);

    function addition(answer1,answer2,answer3,answer4,answer5,answer6,answer7){
      return answer1+answer2+answer3+answer4+answer5+answer6+answer7;
    }
    addition(answer1,answer2,answer3,answer4,answer5,answer6,answer7);

    console.log(answer);
    $("#form1").hide(function(event){
      $("#display").html("You have scored"  + parseInt(score) + "/7");
    });

    //Business logic
    if (answer[0]=="10"){
      score++;
    }
    if (answer[1]=="10"){
      score++;
    }
    if(answer[2]=="10"){
      score++;
    }
    if (answer[3]=="20"){
      score++;
    }
    if(answer[4]=="20"){
      score++;
    }
    if(answer[5]=="20"){
      score++;
    }
    if(answer[6]=="10"){
      score++;
    }
  });
});
