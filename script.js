var arr = [
    {
        Name: "Dalai Lama",
        Quote: "The purpose of our lives is to be happy.",
        Image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
    },

    {
        Name: "John Lennon",
        Quote: "Life is what happens when you’re busy making other plans.", 
        Image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }
    ,

    {
        Name: "Stephen King",
        Quote: "Get busy living or get busy dying.", 
        Image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },

    {
        Name: "Mae West",
        Quote: "You only live once, but if you do it right, once is enough.",
        Image: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80"
    },

    {
        Name: "Thomas A. Edison",
        Quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up",
        Image: "https://images.unsplash.com/photo-1531734510209-2da4a139a53a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },

    {
        Name: "Babe Ruth",
        Quote: "Never let the fear of striking out keep you from playing the game",
        Image: "https://images.unsplash.com/photo-1489980869433-d1f7c7ac0fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },

    {
        Name: "Will Smith",
        Quote: "Money and success don’t change people; they merely amplify what is already there.",
        Image: "https://images.unsplash.com/photo-1483381616603-8dde934da56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },

    {
        Name: "Steve Jobs",
        Quote: "Your time is limited, so don’t waste it living someone else’s life.",
        Image: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },

    {
        Name: "Seneca",
        Quote: "Not how long, but how well you have lived is the main thing",
        Image: "https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        Name: "anuone",
        Quote: "Not how long, but how well you have lived is the main thing",
        Image: "https://images.unsplash.com/photo-1428932021471-d172cfe9955b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
    }
];

var btn = document.querySelector("#show")
var nxt = document.querySelector("#nxt")




function show(){
    var randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    
    var temp = ``
    temp += ` <div id="container">
    <div id="profile">
        <img src="${arr[randomNumber].Image}">
        
    </div>
    <p id="nme">Name: ${arr[randomNumber].Name}</p>
        <p id="qte">quote: ${arr[randomNumber].Quote}</p>
        <button id = "nxt">Next</button>
    </div>`
        
        document.querySelector("#main").innerHTML = temp
        document.querySelector("#nxt").addEventListener("click", function(){
            show();
        })
        
    
}


btn.addEventListener("click", function(){
    show();
})

// printval()
