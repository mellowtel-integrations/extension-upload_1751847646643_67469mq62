const scpInput = document.getElementById("scpNumber");
var scpNumber = scpInput.value;

function fixInputNumber(input) {
	const stringInput = input.toString();
	
	return stringInput.padStart(3, '0');
}

scpInput.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        goToSCP();
    }
})

function goToSCP() {
	//Updates scpNumber var
	scpNumber = scpInput.value;
	
	console.log("SCP " + fixInputNumber(scpNumber));
	window.open("http://www.scp-wiki.wikidot.com/scp-"+fixInputNumber(scpNumber));
}

document.getElementById('findButton').addEventListener("click", function() {
	goToSCP();
});

//stops non-number input
scpInput.addEventListener('input', e=> {
	e.target.value = e.target.value.replace(/\D+/g, '')
});