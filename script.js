

var pos = 0, test, test_status, questions, question, valuea, valueb, valuec, choices, choices, answer, quiz, correct = 0;
var questions = [
	["Which famous shark from Shark Tank attended IU?","Mark Cuban","Lori Greiner","Kevin O'Leary","A"],
	["Which street is not located near the Bloomington campus?", "Jordan", "Granger", "Kirkwood", "B"],
	["What is IU’s mascot?", "Boilermaker","Beaver","Hoosier","C"],
	["What stone are most of IU’s buildings made out of?", "Granite","Limestone","Marble","B"]
	["Who is the famous president former IU president that just has an initial for a middle name?","John F Kennedy","Franklin C Jordan","Herman B Wells","C"],
	["Who is the current men’s basketball coach?", "Bob Knight", "Francis Underwood", "Tom Crean", "C"],
	["Which is a “must visit” restaurant in Bloomington?", "Mother Bears", "Buffalo Wild Wings", "Knights of Columbus", "A"],
	["What are IU’s colors?", "Scarlet & gray", "Cream & crimson", "Black & gold", "B"]
]; 
function _(x) {
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
	test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct!</h3>";
	_("test_status").innerHTML = "Test Completed";
	pos = 0;
	correct = 0;
	return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	valuea = questions[pos][1];
	valueb = questions[pos][2];
	valuec = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' id='valuea' value='A'> "+valuea+"<br>";
	test.innerHTML += "<input type='radio' name='choices' id='valueb' value='B'> "+valueb+"<br>";
	test.innerHTML += "<input type='radio' name='choices' id='valuec' value='C'> "+valuec+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
	choices=document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++) {
		if(choices[i].checked) {
			choice = choices[i].value;
			}
		}
		if(choice == questions[pos][4]) {
			correct++;
		}  
		pos++;
		renderQuestion();
}
window.addEventListener("load", renderQuestion, false);