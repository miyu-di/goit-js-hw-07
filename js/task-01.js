'use strict';

const allCategories = document.querySelectorAll("h2");
console.log("Number of categories: " + allCategories.length);

const categoryList = document.getElementById("categories");

const categoryItems = categoryList.querySelectorAll('.item');

categoryItems.forEach(categoryItem => {
    
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('li');

    console.log("Category: " + categoryTitle);
    console.log("Elements: " + categoryElements.length);
})