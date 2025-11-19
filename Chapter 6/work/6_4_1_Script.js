
document.getElementById("thisisapicture").addEventListener("click",gimmeanalert)
function gimmeanalert(){
 let popup=alert("this is an external JavaScript file, so lets hope it doesnt suck ass.");
 if(document.getElementById("thisisapicture").src=="apicture.png")
 {
    document.getElementById("thisisapicture").src="anotherpicture.png"
 }
 else if (document.getElementById("thisisapicture").src="anotherpicture.png")
    {document.getElementById("Thisisapicture").src="apicture.png"}
}
