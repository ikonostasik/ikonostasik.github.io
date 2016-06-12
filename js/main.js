function snake_game() {
      var mas = document.getElementsByTagName('td');
      var action = "right";
      var count = 0;
      var s;
      var m;
      var k = 0;
      var score = 0;
      for (var i = 1; i<=10;i++){
      	for(var j =1;j<=10;j++){
        	mas[count].id = i.toString() + '|' + j.toString();
          count++;
        }
      }

      function include(arr,obj) {
          return (arr.indexOf(obj) != -1);
      }

      document.body.onkeydown = function(e){
          switch(e.keyCode){
          case 37: if(action != "right") action = "left";
          	break;
          case 38: if(action != "down") action = "up";
          	break;
          case 39: if(action != "left") action = "right";
          	break;
          case 40: if(action != "up") action = "down";
          	break;
          }
      };

      function integ(min,max){ 
       	return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      	var snake = ["1|1","1|2","1|3","1|4","1|5"];
       
        snake.forEach(function(item,snake){
         		s = document.getElementById(item);
        		s.style.backgroundColor = "green";
        });
        var point;
       function Point(){
       var x = integ(1,10);
       var y = integ(1,10);
       while((include(snake,x+'|'+y))){
        x = integ(1,10);
        y = integ(1,10);
       }
       point = document.getElementById(x +'|'+y);
       point.style.backgroundColor = "red";
       };
       Point();
       j = 5,i = 1;
      var timerId = setInterval(function() {

          
       
      	m = document.getElementById(snake[k]);
       
        
        m.style.backgroundColor = "#fff";
        switch(action){
        case "left": 
              if(j==1)   j = 10;
              
              else j--;
              break;
        case "up": 
              if(i==1)   i = 10;
              
              else i--;
              break;
       case "right": 
              if(j==10)  j = 1;
          
              else j++;
              break; 
       case "down": 
              if(i==10)  i = 1;
              
              else i++;
              break;       
        }
      if(include(snake,(i+'|'+j))) {
      		 alert("your scrore:" + score);
           snake.forEach(function(item,snake){
                s = document.getElementById(item);
                s.style.backgroundColor = "#fff";
       })
          	score=0,i = 1,j = 5,k=0,action = "right",snake = ["1|1","1|2","1|3","1|4","1|5"];
       			snake.forEach(function(item,snake){
                s = document.getElementById(item);
                s.style.backgroundColor = "green";
               
       }) 
        return 0;
       };

        s = document.getElementById(i +'|'+j);
       	s.style.backgroundColor = "green";
        snake[k] = i + "|" + j;
          if (k==snake.length-1) k=0;
        
        else k++;
          if(snake[k] == point.id) {
        score++;
        snake.length++;
        var st = snake.length-1;
        while(st != k+1) {
        	snake[st] = snake[st-1];
          st--;
        }
        snake[k+1] = point.id;
         Point();
        }
      }, 300)
}