const express = require("express");
const app = express();
require('dotenv').config()

// app.json();

const port = 3000;

const githubData = {
    "login": "anonYmousFPP",
    "id": 116800506,
    "node_id": "U_kgDOBvY7-g",
    "avatar_url": "https://avatars.githubusercontent.com/u/116800506?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anonYmousFPP",
    "html_url": "https://github.com/anonYmousFPP",
    "followers_url": "https://api.github.com/users/anonYmousFPP/followers",
    "following_url": "https://api.github.com/users/anonYmousFPP/following{/other_user}",
    "gists_url": "https://api.github.com/users/anonYmousFPP/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anonYmousFPP/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anonYmousFPP/subscriptions",
    "organizations_url": "https://api.github.com/users/anonYmousFPP/orgs",
    "repos_url": "https://api.github.com/users/anonYmousFPP/repos",
    "events_url": "https://api.github.com/users/anonYmousFPP/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anonYmousFPP/received_events",
    "type": "User",
    "site_admin": false,
    "name": "ABHAY YADAV",
    "company": null,
    "blog": "",
    "location": "Noida",
    "email": null,
    "hireable": true,
    "bio": "I am Developer, Problem Solving Coder and Full Stack Developer and Lot of things to learn more :)",
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-10-27T09:24:06Z",
    "updated_at": "2024-01-19T12:09:24Z"
}

app.get("/", function(req, res){
    res.send("<h1>Welcome to Homepage</h1>");  
})
app.get("/login", function(req, res){
    res.send("<h2>Login with your email and password</h2>");  
})
app.get("/contact", function(req, res){
    res.send("<h2>Contact Me: abhay14122001@gmail.com</h2>");  
})

app.get("/github", function(req, res){
    // res.send(githubData);   //both are same
    res.json(githubData);
})

app.listen(process.env.PORT, ()=>{//now this backend run on the free port depend on the browser(after hosting)
    console.log(`Example app listening on port ${port}`)
});
