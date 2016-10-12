// general functions to be used in tasks below

var toPx = function(int) {
	return int + "px";
}

var reverseArray = function(arrToReverse) {
	var reversedArray = []
	for(var i = arrToReverse.length - 1; i > -1; i--){
		reversedArray.push(arrToReverse[i])
	}
	return reversedArray;
}


document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerBoxText = document.querySelector(".answer-box #compoundInvestment")
  var answerBoxInt = parseInt(answerBoxText.innerHTML)
  answerBoxText.innerHTML = answerBoxInt *= 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var answerBoxCircle = document.querySelector("#circle-bw")
  if(answerBoxCircle.style.backgroundColor !== "black"){
  	answerBoxCircle.style.backgroundColor = "black"
  } else {
  	answerBoxCircle.style.backgroundColor = "white"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var blowUp = function(intToIncrease){
  	if (intToIncrease < 320){
  		return intToIncrease * 2;
  	} else {
  		return 40;
  	}
  }

  var circleClass = document.querySelector(".answer-box .circle-red")
  	  circleStyles = window.getComputedStyle(circleClass),
	  origCircleDiameter = parseInt(circleStyles.width),
	  newCircleDiameter = blowUp(origCircleDiameter)
  circleClass.style.width = toPx(newCircleDiameter)
  circleClass.style.height = toPx(newCircleDiameter)
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var clearInactiveUsers = function(userList) {
  	var userListArray = userList.children
  	for(var i =0; i < userListArray .length; i++){
  		var userActiveStatus = userListArray[i]
  		if(userActiveStatus.classList.contains("inactive")){
  			userList.removeChild(userActiveStatus)
  			i--
  		}
  	}
  }
  var userListActivity = document.querySelector(".answer-box #userList")
  clearInactiveUsers(userListActivity)
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6


  var squares = document.querySelector("#reverse-squares .answer-box")
  var reversedSquaresChildren = reverseArray(squares.children)
  for(var i = 0; i < reversedSquaresChildren.length; i++){
  	var newChild = reversedSquaresChildren[i]
  	squares.appendChild(newChild)
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var tasksToReverse = document.querySelector("#pig-latin .answer-box #tasks")
  var tasksToReverseArray = tasksToReverse.children
  for(var i = 0; i < tasksToReverseArray.length; i++){
  	var task = tasksToReverseArray[i].innerHTML
  	var splitReversedTask = reverseArray(task.split(""))
  	var joinReversedTask = splitReversedTask.join("")
  	tasksToReverseArray[i].innerHTML = joinReversedTask
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var cyclingImage = document.querySelector("#cycle-image .answer-box img"),
  	  cyclingImageSource = cyclingImage.src,
  	  cyclingImageSourceNumber = parseInt(cyclingImageSource.slice(-1))
  if (cyclingImageSourceNumber % 9 === 0){
  	cyclingImageSourceNumber = 1
  } else {
  	cyclingImageSourceNumber += 1
  }
  cyclingImage.src = cyclingImage.src.slice(0,-1) + cyclingImageSourceNumber
})