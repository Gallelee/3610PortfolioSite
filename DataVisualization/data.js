const canvas = /** @type {HTMLCanvasElement} */(document.getElementById("myCanvas")); //type casting so that i get help with intellisense
const ctx = canvas.getContext('2d')
const ctx2 = document.getElementById("myCanvas2").getContext('2d')

const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Ice Cream", "Pizza", "Sushi", "Tacos", "Pasta"],
        datasets: [
            {
                label: "votes(millions)",
                data: [15,32,30,15,23],
                backgroundColor: ["cream", "red", "green", "orange", "yellow"]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Popularity of various street foods by Gallelee Thimotus"
        }
    }
})

const myChart2 = new Chart(ctx2,{
   type: "doughnut",
   data: {
    labels: ["Ice Cream", "Pizza", "Sushi", "Tacos", "Pasta"],
    datasets: [
        {
            label: "votes(millions)",
            data: [15,32,30,15,23],
            backgroundColor: ["cream", "red", "green", "orange", "yellow"]
        }
    ]
},
options: {
    title: {
        display: true,
        text: "Popularity of various street foods by Gallelee Thimotus (Doughnut Version)"
    }
}
   }
)