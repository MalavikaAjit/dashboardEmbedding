
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

let port = process.env.PORT || 9000;

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));

app.get("/", (req, res) => {

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dashboard - Sidebar</title>
        <!----CSS link----->        
    
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    min-height: 100vh;
    background: #dce3e7;
  }
  .top-bar{
    border-top: 10px;
    border-style: solid;
    border-color: #004A91;
  }
  .navigation {
    position: fixed;
    top: 15px;
    bottom: 10px;
    width: 300px;
    border-bottom-right-radius: 10px;
    box-sizing: initial;
    background: #fff;
    transition: width 0.5s;
    overflow-x: hidden;
  }
  .navigation.active{
    width: 300px;
  }
  .navigation ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 40px;
  }
  .brand-logo{
      margin-left: 20px;
      margin-bottom: 50px;
      padding: 10px;
      display: flex;
      justify-content: center;
  }
  .brand-img{
    width: 50%;
  }
  .navigation ul li {
    position: relative;
    list-style: none;
    width: 90%;
    border-radius: 20px;
  }
  .navigation ul li.active {
    background: #135bcf;
  }
  .navigation ul li b:nth-child(1) {
    position: absolute;
    top: -20px;
    height: 20px;
    width: 100%;
    background: #004A91;
    display: none;
  }
  .navigation ul li b:nth-child(1)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .navigation ul li b:nth-child(2) {
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 100%;
    background: #004A91;
    display: none;
  }
  .navigation ul li b:nth-child(2)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .navigation ul li.active b:nth-child(1),
  .navigation ul li.active b:nth-child(2) {
    display: block;
  }
  .navigation ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color:#3177e8;
  }
  .navigation ul li.active a{
    color: #fff;
  }
  .navigation ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
  }
  .navigation ul li a .icon ion-icon{
    font-size: 1.5em;
  }
  .navigation ul li a .title{
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: normal;
  }
  
  .info-link{
    text-align: center;
      margin-top: 130px;
  }
  .info-link a:hover{
    
      /* background-color: #ddd; */
      color: #353d7f;
    
  }
  .nav {
      background-color: #dce3e7;
      overflow: hidden;
    padding-left: 320px;
    border: 1px solid grey;
  }
  
  .nav a {
      float: left;
      display: block;
      color: #000;
      font-size: 17px;
      padding: 14px 16px;
      text-align: center;
      text-decoration: none;
  }
  
  .nav a:hover {
      background-color: #ddd;
      color: #000;
  }
  
  .nav a.active {
      background-color: #04AA6D;
      color: #fff;
  }
  
  .nav .search-container {
      float: left;
  }
  
  .nav input[type=text] {
      padding: 6px;
      font-size: 17px;
      /* margin-top: 8px; */
      border: none;
  }
  
  .nav .search-container button {
    float: right;
    padding: 7px 9px;
    font-size: 15px;
    /* margin-top: 8px; */
    /* margin-right: 16px; */
    border: none;
    background-color: #90a9dd;
    /* border-radius: 10px; */
    cursor: pointer;
  }
  .search-bar{
    border: 1px solid grey;
    /* border-radius: 10px; */
    margin: 15px;
  }
  .username{
    float: right;
    padding: 2px;
    /* margin: 9px; */
  
  }
  .username .title{
    font-size: 20px;
    color: #353d7f;
    float: inherit;
    padding: 10px;
  }
  .usericon{
    width: 40px;
    border-radius: 25px;
  }
  
  /* .nav .search-container button:hover {
   
  } */
  
  @media screen and (max-width: 600px) {
      
      .nav .search-container {
          float: none;
      }
      
      .nav a,
      .nav input[type=text],
      .nav .search-container button {
          float: none;
          display: block;
          text-align: left;
          width: 100%;
          margin: 0;
          padding: 14px;
      }
      
      .nav input[type=text] {
          border: 1px solid #ccc;
      }
      
  }
  
    </style>
    <title>Heroku Project 33</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/bipp"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  
<div class="top-bar"></div>
<div class="nav">

      <div class="search-container">
          <form class="search-bar">
              <input type="text" name="search" placeholder="Search..">
              <button type="submit"><ion-icon name="search-outline"></ion-icon></button>
          </form>
      </div>
 <div class="username">
  <a href="#">
  <span><img class="usericon" src="imgfe.jpg" alt=""></span> 
    <span class="title">Jane Doe</span>
  </a>
 </div>
  </div>
<div class="navigation">
  <ul>
    <li class="nav-item mr-auto">
      <a href="#" target="_self">
          <span class="brand-logo">
              <img class="brand-img" src="c-mart logo.jpg" alt="logo" class="">
          </span>
      </a>
    </li>
    <li class="list active">
      <b></b>
      <b></b>
      <a href="#">
        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
        <span class="title">Home</span>
      </a>
    </li>
    <li class="list">
      <b></b>
      <b></b>
      <a href="#">
        <span class="icon"><ion-icon name="grid-outline"></ion-icon></span>
        <span class="title">Dashboard</span>
      </a>
    </li>
    <li class="list">
      <b></b>
      <b></b>
      <a href="#">
        <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
        <span class="title">Customers</span>
      </a>
    </li>
    <li class="list">
      <b></b>
      <b></b>
      <a href="#">
        <span class="icon"><ion-icon name="bar-chart-outline"></ion-icon></span>
        <span class="title">Analytics</span>
      </a>
    </li>      
    <li class="list">
      <b></b>
      <b></b>
      <a href="#">
        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
        <span class="title">Settings</span>
      </a>
    </li>
    <li class="list">
      <b></b>
      <b></b>
      <a href="#">
        <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
        <span class="title">Sign Out</span>
      </a>
    </li>
    <li class="info-link">
      <b></b>
      <b></b>
      <a href="https://bipp.io/platform/embedded-analytics/">
        
        <span class="info-title">To know more about bipp's Embedded Analytics, click here.</span>
      </a>
    </li>
  </ul>
  
</div>
<div class="dashboard">
  <div id='container'></div>
</div>
  <script>


      const width = window.innerWidth;
      const height = window.innerHeight;

      //let url = "https://ketaki-desale.app.bipp.io/embed/68cc77a6-fc72-497d-bbb9-0b1ffe01e579?id=707b84b7-7a5c-47a5-9847-a163319daa95&cid=f570dc6573a6478cb954e82fa603ae97.ketaki-desale.app.bipp.io&secret=MNTGHrqSnWBQ0zonnyfphbJn3!mFM!@RP!davQJi!lXkUFEz";
      //let url = "https://ketaki-desale.app.bipp.io/embed/443c2551-937f-44c6-8252-88f3d4739ebc?id=a8c75ef8-d90a-404f-a5de-5139952513ab&cid=16cc46c2c9054fdeac09ea1f6385b380.ketaki-desale.app.bipp.io&secret=r6hXP@nwPUmDFeRO9R@b25dyrfTIv65mOsVPPKEtPJRQncPF";    
      let url = "https://ketaki-desale.app.bipp.io/embed/9c3cd476-1cb8-4ef9-8b6d-cd8c1f095103?id=a8c75ef8-d90a-404f-a5de-5139952513ab&cid=16cc46c2c9054fdeac09ea1f6385b380.ketaki-desale.app.bipp.io&secret=r6hXP@nwPUmDFeRO9R@b25dyrfTIv65mOsVPPKEtPJRQncPF";
      let config = { id : 'container', width: "100%",height: height, style: 'border:none; padding-left:305px' }
      
      let bipp = new Bipp();
      bipp.load(url, config);

      let navigation = document.querySelector('.navigation')

// enable active class in selected list item
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function() {
    let j = 0;
    while(j < list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}
      
  </script>
  
  </body>
  </html>`)

});



app.listen(port, function () {
    console.log("Running node server", "on port " + port);
});
