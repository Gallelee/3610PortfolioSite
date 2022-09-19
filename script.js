const assignments = [
    {
        assignmentName: "Make a website",
        type: "",
        dueDate: "",
        description: ""
    }
]

const assignmentContainer = document.getElementById("assignment-container")
assignmentContainer.innerHTML = '<ul>'+ assignments.map(elm => {
    return `<li>${elm.assignmentName}</li>`
}).join('')
+ '</ul>'