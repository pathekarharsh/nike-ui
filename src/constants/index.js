import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";
import customer3 from '../assets/images/charlie-lee.jpg'

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "2k+", label: "Brands" },
  { value: "800+", label: "Shops" },
  { value: "350k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$190.30",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$170.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$240.50",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$330.80",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Quick Delivery",
    subtext: "Experience fast shipping for your convenience.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Transactions",
    subtext: "Shop with confidence using our secure payment methods.",
  },
  {
    imgURL: support,
    label: "Dedicated Support",
    subtext: "Our friendly team is here to assist you at every step.",
  },
];
export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.1,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer3,
    customerName: "Lyon White",
    rating: 4.2,
    feedback: "I was impressed by the product's durability and stylish design. A great choice for anyone!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "infocr@nike.com", link: "mailto:infocr@nike.com" },
      { name: "+91 87708 46354", link: "tel:+91 87708 46354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
