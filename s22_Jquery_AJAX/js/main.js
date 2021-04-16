//let mentorObject = {}

/*const getInfo =()=> $("form input[type='text']").keyup(function(){
    let mentorObject = {}
    mentorObject[`${this.name}`] = this.value
    console.log (mentorObject)
    
    saveMentor(mentorObject)
})*/

//input:text
const getInfo = () => {
    let mentorObject = {}
    $("form input[type='text']").each(function (index) {
        let property = this.name
        let value = this.value

        mentorObject[property] = value

        console.log (mentorObject)
    });
    console.log (mentorObject)
    saveMentor(mentorObject)
}


const saveMentor = mentorInfo => {
    console.log (mentorInfo)
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/JavADv/mentors.json",
        data: JSON.stringify(mentorInfo),
        success : response => {
            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}

$(`button:button`).click (getInfo)

const bringData = () => {
    let mentorData;  
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/JavADv/mentors.json",
        success: response => {
            mentorData = response
            
        },
        error: error => {
            console.log(error)
        }
    })

    return mentorData
    //console.log (mentorData)
}

bringData()