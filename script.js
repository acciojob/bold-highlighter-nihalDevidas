function highlight() {
    //Write your code here
    let elementCollection = document.getElementsByTagName("strong");
	
     let elementArr = Array.from(elementCollection);

	elementArr.forEach((element)=>{
		element.style.color = "green";
	});
}


function return_normal() {
    //Write your code here
	let elementCollection = document.getElementsByTagName("strong");
	
     let elementArr = Array.from(elementCollection);

	elementArr.forEach((element)=>{
		element.style.color = "black";
	});

    
}
