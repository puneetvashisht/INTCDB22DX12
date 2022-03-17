let courseElement = document.getElementById('courses');

fetch("http://localhost:8000/courses")
.then(res => res.json())
.then((arr) => {
    arr.map( (course) => {
        let courseEle = document.createElement("div")
        courseEle.innerHTML = `<div> <img src = ""/> <h3>${course.title}</h3> <p>${course.summary}</p> <button onclick = "updateCourse( ${course.id} )"> Update</button> <button onclick = "deleteCourse( ${course.id} )"> Delete</button>`
        courseElement.append(courseEle)
    })
})


function updateCourse(id){
    fetch("http://localhost:8000/courses/" + id, {
        method: 'PATCH',
        body: JSON.stringify({
            title: "NOdeJS",
            summary: "run time environment"
        }),
        headers: {
            'Content-type': 'application/json',
        }
    } )
}


function deleteCourse(id){
    fetch("http://localhost:8000/courses/" + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(res => res.json())
    .then((res) => console.log(res))
}



function addData() {
    let input1 = document.getElementById("in1").value
    let input2 = document.getElementById("in2").value
    fetch('http://localhost:8000/courses', {
        method: 'POST',
        body: JSON.stringify({
            title: input1,
            summary: input2,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}