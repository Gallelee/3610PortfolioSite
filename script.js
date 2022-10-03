const assignments = [
    {
        assignmentName: "Make a website",
        type: "",
        dueDate: "",
        description: "",
        link: "#"
    },
    {
        assignmentName: "HW1 Cartoon",
        type: "HW",
        dueDate: "9/29",
        description: "",
        link: "CartoonAssignment/cartoon.html"
    }
    ,
    {
        assignmentName: "Lab1",
        type: "lab",
        dueDate: "N/A",
        description: "N/A",
        link: "Lab1/lab1.html"
    }
]

const assignmentContainer = document.getElementById("assignment-container")
assignmentContainer.innerHTML = '<ul>'+ assignments.map(elm => {
    return `<li><a href=${elm.link}>${elm.assignmentName}</a></li>`
}).join('')
+ '</ul>'