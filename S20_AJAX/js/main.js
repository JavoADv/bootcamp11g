let mentor = {
    name: "",
    age: ""
}


document.getElementById("mentor-input").addEventListener("keyup", (event)=> {
    let inputValue = event.target.value
    mentor.name= inputValue
    
    }
)




document.getElementById("btn-submit").addEventListener("click",()=> {
   
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log ("Sent...")
        }
    };
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/JavADv/mentors.json", true);
    xhttp.send(JSON.stringify(mentor));
})
    /*const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //let response = xhttp.responseText;
            console.log("Sent...")
     };

    xhttp.open("POST", `https://ajaxclass-1ca34.firebaseio.com/11g/JavADv/mentors.json`, true);
    xhttp.send(JSON.stringify(mentor));
    }Llave de más*/
//})

/*const saveMentor = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response )
            
            console.log (mentor)
            
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/JavADv/mentors.json", true);

    xhttp.send( JSON.stringify(mentor) );
    
}

saveMentor()*/

        