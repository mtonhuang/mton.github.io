"use strict";!function(){var t;document.querySelector("#back-top-btn").addEventListener("click",(t=!1,function(){if(!t){t=!0;var o=document.documentElement.scrollTop||document.body.scrollTop;if(o<=10)return document.documentElement.scrollTop=0,document.body.scrollTop=0,void(t=!1);var e=Math.ceil(10*o/200),c=setInterval(function(){(o=document.documentElement.scrollTop||document.body.scrollTop)<=e?(document.documentElement.scrollTop=0,document.body.scrollTop=0,t=!1,clearInterval(c)):(document.documentElement.scrollTop=o-e,document.body.scrollTop=o-e)},10)}}),!1)}();