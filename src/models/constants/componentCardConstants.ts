import { ICard } from "../interfaces/card"

export const componentList: ICard[] = [
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
    },
    {
      cardImg: "https://assets.justinmind.com/wp-content/uploads/2021/02/top-navigation-bar-mobile-apps.png",
      cardTitle: "Header",
      cardText: "Top of the landing page",
      redirect: 'header'
    },
    {
      cardImg: "https://www.bootstrapdash.com/blog/wp-content/uploads/2023/07/Bootstrap-4-Navbar-and-Parallax-1024x588.png",
      cardTitle: "Jumbotron",
      cardText: "Big area of website that stands out to attract user to special deals/features",
      redirect: 'jumbotron'
    },
    {
      cardImg: "https://media.licdn.com/dms/image/D5612AQH4PpWh0PKr3g/article-cover_image-shrink_720_1280/0/1687960984733?e=2147483647&v=beta&t=nDEGFeWFZYuLc6fZ4xogS8egwbF9SdlxdDNfWmJUBEg",
      cardTitle: "Navbar",
      cardText: "Area of the landing page to provide the full catalog",
      redirect: 'navbar'
    },
    {
      cardImg: "https://cdn.cmsfly.com/635bcad9b8a74e0091632998/website-footer-examples-thumbnail-QA87vx.png",
      cardTitle: "Footer",
      cardText: "Bottom area of the landing page",
      redirect: 'footer'
    },
    {
      cardImg: "https://www.shutterstock.com/image-vector/new-feature-banner-speech-bubble-260nw-2186051519.jpg",
      cardTitle: "Feature",
      cardText: "Big area to provide further information",
      redirect: 'feature'
    },
    {
      cardImg: "https://blog.magezon.com/wp-content/uploads/2022/12/product-page.png",
      cardTitle: "Product Detail",
      cardText: "Detailed view of each product",
      redirect: 'product-detail-section'
    },
    
]

export const pageList: ICard[] = [
  {
    cardImg: "https://cdn.prod.website-files.com/605826c62e8de87de744596e/66aa22504cae209048d2b73d_65fa5951d0ef8a8f7bf33d3b_Creative%2520Ways%2520to%2520Display%2520eCommerce%2520Products%25204.webp",
    cardTitle: "Landing Page",
    cardText: "How the products will be grouped",
    cardText2: "Very nice",
    redirect: 'landing-page'
  },
  {
    cardImg: "https://cdn.prod.website-files.com/605826c62e8de87de744596e/66aa22504cae209048d2b73d_65fa5951d0ef8a8f7bf33d3b_Creative%2520Ways%2520to%2520Display%2520eCommerce%2520Products%25204.webp",
    cardTitle: "Product Detail",
    cardText: "How the products will be viewed in detail",
    cardText2: "Very nice",
    redirect: 'product-detail'
  }
]