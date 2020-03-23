function myFunction(){
    let newPothole = prompt("Enter new pothole name"); 

    let newPothole1 = prompt("Enter new pothole name"); 

    let newPothole2 = prompt("Enter new pothole name"); 

    let newPothole3 = prompt("Enter new pothole name"); 

    let newPothole4 = prompt("Enter new pothole name"); 
    
    document.getElementById("potholeList").innerHTML = "Thanks! We will add that to the list. ";
     document.getElementById(`logPothole0`).innerHTML = `${newPothole}`; 
     document.getElementById(`logPothole1`).innerHTML = `${newPothole1}`; 
     document.getElementById(`logPothole2`).innerHTML = `${newPothole2}`; 
     document.getElementById(`logPothole3`).innerHTML = `${newPothole3}`; 
     document.getElementById(`logPothole4`).innerHTML = `${newPothole4}`; 
    
}