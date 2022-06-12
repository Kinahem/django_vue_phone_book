<template>
    <body>
        <div id="nav">
            <router-link :to="{name: 'Home'}" id='router_link'>Home</router-link>
            <router-link :to="{name: 'SignIn'}" id='router_link'>Sign In</router-link>
            <router-link :to="{name: 'SignUp'}" id='router_link'>Sign Up</router-link>
            <router-link :to="{name: 'Profile'}" id='router_link'>Profile</router-link>
            <router-link :to="{name: 'About'}" id='router_link'>About</router-link>
        </div>
        <router-view/>
    </body>
</template>

<style>

#router_link {
    margin: 5px
}

body {
    margin: 0;
    padding: 0;
    font-family: "TimesNewRoman";
    background: url(../images/background.jpg) fixed;
    background-size: 100%;
    width: 100%;
}

input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #41BE7Aaa;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: red;
}

#nav {
    background-color: #41BE7Aaa;
    text-align: center;
}

#nav a {
    font-size: 18px;
    color: #EBEBEB;
}

#nav a:hover {
    font-size: 18px;
    color: #9afcff;
}

div {
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
}

#err_bar {
    border-radius: 5px;
    background-color: #EB3941;
}

#submit_button {
    background-color: #195F48aa;
    border: none;
    color: #EBEBEB;
    padding: 2px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 70%;
    border-radius: 12px;
}

#submit_button:hover {
    background-color: #15624F;
    border: none;
    color: #EBEBEB;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
}

td button {
    border: none;
    cursor: pointer;
    padding: 0px;
    border-radius: 100%;
    background-color: transparent;
}

table{
    border-collapse: collapse;
    border: 2px solid #BDBA34aa;
    table-layout: fixed;
    width: 100%;
    white-space: pre-wrap;
    color: #EBEBEB;
}

thead{
    color: #EBEBEB;
}

td{
    border: 2px solid #BDBA34aa;
    padding: 2px;
    word-wrap: break-word;
    color: #EBEBEB;
}

h1, h5, p{
    color: #EBEBEB;
}
</style>