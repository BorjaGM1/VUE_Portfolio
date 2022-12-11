<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import TopNav from "./components/TopNav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <TopNav></TopNav>
    <router-view />
  <Footer />
</template>

<script>
import cats from "./components/cats.json"
export default{
  data(){
    return{
      cats
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}
/* Header/Blog Title */
.header {
  padding: 30px;
  text-align: center;
  background: white;
}
.header h1 {
  font-size: 50px;
}
/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}
/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}
/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}
/* Fake image */
.resumen {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}
/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}
.dropdown:hover .dropdown-content {
  display: block;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}
</style>