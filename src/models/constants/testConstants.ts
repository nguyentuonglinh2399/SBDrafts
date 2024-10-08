import { ICard } from "../interfaces/card";
import { IProductMain } from "../interfaces/testInterface";

export const componentList: ICard[] = [
    {
        cardImg: "https://assets.justinmind.com/wp-content/uploads/2021/02/top-navigation-bar-mobile-apps.png",
        cardTitle: "Top Navbar",
        cardText: "Here's the top navbar",
        cardText2: "This is on top",
        redirect: 'top-nav'
    },
    {
        cardImg: "https://thewebsitearchitect.com/wp-content/uploads/2020/12/are-sliders-bad-or-good-for-user-experience.png",
        cardTitle: "Carousel",
        cardText: "Main Carousel of the page",
        cardText2: "This will be under the top nav bar",
        redirect: 'carousel'
    },
    {
        cardImg: "https://cdn.smartslider3.com/wp-content/uploads/2017/03/boxedproductcarousel-1.jpg",
        cardTitle: "Product Carousel",
        cardText: "Catalog View",
        cardText2: "Common Element will repeat",
        redirect: 'product-carousel'
    },
    {
        cardImg: "https://cdn.prod.website-files.com/605826c62e8de87de744596e/66aa22504cae209048d2b73d_65fa5951d0ef8a8f7bf33d3b_Creative%2520Ways%2520to%2520Display%2520eCommerce%2520Products%25204.webp",
        cardTitle: "Product Group Display",
        cardText: "How the products will be grouped",
        cardText2: "Very nice",
        redirect: 'product-group-display'
    }
]

export const testCardList2: ICard[] = [
      {
        cardImg: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png",
        cardTitle: "Sonyverse Spider-Man",
        cardText: "He's ok",
        cardText2: "He might not get another game lol"
      },
      {
        cardImg: "https://cdn.marvel.com/content/1x/005smp_ons_cut_dsk_01_5.jpg",
        cardTitle: "MCU Spider-Man",
        cardText: "He's alright",
        cardText2: "He's getting a new movie actually"
      },
      {
        cardImg: "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg",
        cardTitle: "The Amazing Spider-Man",
        cardText: "He's average"
      },
      {
        cardImg: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/how-strong-is-spider-man-in-comics-movies-and-beyond.jpg",
        cardTitle: "Sam Raimi's Spider-Man",
        cardText: "He's the best one!"
      }
]

export const productCards: IProductMain[] = [
    {
      productName: "8'x8' Pop Up Display Fabric Backdrop with Stand",
      productImg: "https://stickersbanners.com/imgs/pop-up-display-set-up.gif",
      price: "$455.00",
      prevPrice: "$480.00",
      sales: true,
      review: "Cool"
    },
    {
      productName: "10'x8' Pop Up Display Fabric Backdrop with Stand",
      productImg: "https://stickersbanners.com/imgs/pop-up-display-set-up.gif",
      price: "$549.00",
      sales: false,
      review: "Kinda Cool"
    },
    {
      productName: "8'x8' Pop Up Display Fabric Backdrop with Stand and Red Carpet",
      productImg: "https://stickersbanners.com/imgs/pop-up-display-set-up.gif",
      price: "$489.00",
      sales: false,
      review: "Very Cool"
    },
    {
      productName: "10'x8' Pop Up Display Fabric Backdrop with Stand and Red Carpet",
      productImg: "https://stickersbanners.com/imgs/pop-up-display-set-up.gif",
      price: "$599.00",
      sales: false,
      review: "Super Cool"
    }

]