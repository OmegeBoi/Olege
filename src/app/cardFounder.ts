import { Injectable } from '@angular/core';

import { FoodCard } from './productCard';

@Injectable({
  providedIn: 'root'
})
export class FoodservService {


  protected foodList: FoodCard[] = [
        {
            name: "Spaghetti Bolognese",
            imgSrc: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
            description: "Classic Italian pasta dish with a savory meat sauce",
            price: 12.99,
            category: "pasta",
            id: 1
        },
        {
            name: "Margarita Pizza",
            imgSrc: "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
            description: "Traditional Italian pizza topped with tomato sauce, mozzarella cheese, and basil",
            price: 10.99,
            category: "pizza",
            id: 2
        },
        {
            name: "Chicken Parmesan",
            imgSrc: "https://hips.hearstapps.com/hmg-prod/images/delish-202102-airfryerchickenparm-184-ls-1612561654.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
            description: "Breaded chicken topped with marinara sauce and melted cheese, served with pasta",
            price: 14.99,
            category: "entree",
            id: 3
        },
        {
            name: "Caesar Salad",
            imgSrc: "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
            description: "Fresh romaine lettuce, croutons, and Caesar dressing topped with shaved parmesan cheese",
            price: 8.99,
            category: "salad",
            id: 4
        },
        {
            name: "Beef Burger",
            imgSrc: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
            description: "Juicy beef patty served on a toasted bun with lettuce, tomato, and cheese",
            price: 9.99,
            category: "burger",
            id: 5
        },
        {
            name: "Fish and Chips",
            imgSrc: "https://www.thespruceeats.com/thmb/sdVTq0h7xZvJjPr6bE2fhh5M3NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-best-fish-and-chips-recipe-434856-hero-01-27d8b57008414972822b866609d0af9b.jpg",
            description: "Crispy battered fish served with French fries and tartar sauce",
            price: 11.99,
            category: "seafood",
            id: 6
        },
        {
            name: "Tiramisu",
            imgSrc: "https://kulinaria.ge/media/recipe-images/2017/06/tiramisu.jpg",
            description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream",
            price: 6.99,
            category: "dessert",
            id: 7
        },
        {
            name: "Chicken Alfredo",
            imgSrc: "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21-400x525.jpg",
            description: "Creamy pasta dish with grilled chicken, parmesan cheese, and Alfredo sauce",
            price: 13.99,
            category: "pasta",
            id: 8
        },
        {
            name: "Cheeseburger",
            imgSrc: "https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg",
            description: "Classic cheeseburger with lettuce, tomato, onion, pickles, and special sauce",
            price: 8.99,
            category: "burger",
            id: 9
        },
        {
            name: "Shrimp Scampi",
            imgSrc: "https://hips.hearstapps.com/hmg-prod/images/shrimp-scampi-lead-644c0add32530.jpg",
            description: "Garlic butter shrimp served over pasta with lemon and parsley",
            price: 16.99,
            category: "seafood",
            id: 10
        },
        {
            name: "Greek Salad",
            imgSrc: "https://noshingwiththenolands.com/wp-content/uploads/2023/05/IMG_7196.jpg",
            description: "Crisp lettuce, tomatoes, cucumbers, olives, feta cheese, and Greek dressing",
            price: 9.99,
            category: "salad",
            id: 11
        },
        {
            name: "BBQ Ribs",
            imgSrc: "https://www.grillseeker.com/wp-content/uploads/2022/06/sauced-pork-ribs-on-a-baoking-sheet-768x1024.jpg",
            description: "Tender pork ribs smothered in barbecue sauce, served with coleslaw and cornbread",
            price: 17.99,
            category: "entree",
            id: 12
        },
        {
            name: "Clam Chowder",
            imgSrc: "https://thecozycook.com/wp-content/uploads/2022/10/Clam-Chowder-2.jpg",
            description: "Creamy New England clam chowder with tender clams and potatoes",
            price: 10.99,
            category: "soup",
            id: 13
        },
        {
            name: "Key Lime Pie",
            imgSrc: "https://hips.hearstapps.com/hmg-prod/images/key-lime-pie-index-final-64d5367ec666b.jpg?crop=0.8894202032277346xw:1xh;center,top&resize=1200:*",
            description: "Tangy and sweet pie made with key lime juice, graham cracker crust, and whipped cream",
            price: 7.99,
            category: "dessert",
            id: 14
        }

    ]
    
    constructor() { }


    getAllCards() : FoodCard[] {
        return this.foodList
    }

    getAllById(id:Number): FoodCard | undefined {
        return this.foodList.find(foodList => foodList.id ===id)
    }
}