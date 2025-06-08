import heroBannerImage from '../assets/Images/heroBannerMobile.png';
import versace from '../assets/Images/versace.png';
import zara from '../assets/Images/zara.png';
import gucci from '../assets/Images/gucci.png';
import prada from '../assets/Images/prada.png';
import calvinklein from '../assets/Images/ck.png';

import product1 from '../assets/ProductGallery/image1.png';
import product2 from '../assets/ProductGallery/image2.png';
import product3 from '../assets/ProductGallery/image3.png';
import product4 from '../assets/ProductGallery/image4.png';

import product5 from '../assets/ProductGallery/image5.png';
import product6 from '../assets/ProductGallery/image6.png';
import product7 from '../assets/ProductGallery/image7.png';
import product8 from '../assets/ProductGallery/image8.png';

import casual from '../assets/Images/casual.png';
import formal from '../assets/Images/formal.png';
import party from '../assets/Images/party.png';
import gym from '../assets/Images/gym.png';

const mockContentData = {
    status: 200,
    message: "Success",
    data: {
        homePage: {
            infobar: {
                text: 'Sign up and get 20% off to you first order.',
                ctaText: 'Sign Up Now',
                dismissIcon: 'dismiss',
                searchIcon: 'search'
            },
            navbar: {
                logo: 'SHOP.CO',
                downArrowIcon: 'downArrow',
                searchIcon: 'search',
                cartIcon: 'cart',
                profileIcon: 'profile',
                navItems: [
                    {
                        text: 'Shop',
                        isExpandable: true
                    },
                    {
                        text: 'On Sale',
                        isExpandable: false
                    },
                    {
                        text: 'New Arrivals',
                        isExpandable: false
                    },
                    {
                        text: 'Brands',
                        isExpandable: true
                    },
                ]
            },
            banner: {
                heading: 'FIND CLOTHES THAT MATCHES YOUR STYLE',
                subHeading: 'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
                ctaText: 'Shop Now',
                bannerImageURL: heroBannerImage,
                internationalBrands: {
                    count: '200+',
                    caption: 'International Brands'
                },
                highQualityProducts: {
                    count: '2,000+',
                    caption: 'High-Quality Products'
                },
                happyCustomers: {
                    count: '30,000+',
                    caption: 'Happy Customers'
                }
            },
            brands: [
                {
                    name: 'Versace',
                    logo: versace
                },
                {
                    name: 'Zara',
                    logo: zara
                },
                {
                    name: 'Gucci',
                    logo: gucci
                },
                {
                    name: 'Prada',
                    logo: prada
                },
                {
                    name: 'Calvin Klein',
                    logo: calvinklein
                },
            ],
            newArrivals: {
                heading: 'NEW ARRIVALS',
                ctaText: 'View All',
                defaultCurrency: '$',
                products: [
                    {
                        sku: '001',
                        name: 'T-shirt with Tape Details',
                        ratings: 4.5,
                        originalPrice: 120,
                        discountedPrice: 135,
                        productImages: [
                            {
                                url: product1,
                            },
                            {
                                url: product2,
                            },
                            {
                                url: product3,
                            },
                        ]
                    },
                    {
                        sku: '002',
                        name: 'Skinny Fit Jeans',
                        ratings: 3,
                        originalPrice: 260,
                        discountedPrice: 240,
                        productImages: [
                            {
                                url: product2,
                            },
                            {
                                url: product2,
                            }
                        ]
                    },
                    {
                        sku: '003',
                        name: 'Checkered Shirt',
                        ratings: 3.5,
                        originalPrice: 180,
                        discountedPrice: 180,
                        productImages: [
                            {
                                url: product3,
                            },
                            {
                                url: product2,
                            },
                            {
                                url: product4,
                            }
                        ]
                    },
                    {
                        sku: '004',
                        name: 'Sleeve Striped T-Shirt',
                        ratings: 5,
                        originalPrice: 160,
                        discountedPrice: 140,
                        productImages: [
                            {
                                url: product4,
                            }
                        ]
                    },
                ]
            },
            topSellings: {
                heading: 'TOP SELLING',
                ctaText: 'View All',
                defaultCurrency: '$',
                products: [
                    {
                        sku: '005',
                        name: 'Vertical Striper Shirt',
                        ratings: 5,
                        originalPrice: 232,
                        discountedPrice: 212,
                        productImages: [
                            {
                                url: product5,
                            }
                        ]
                    },
                    {
                        sku: '006',
                        name: 'Courage Graphic T-shirt',
                        ratings: 4,
                        originalPrice: 145,
                        discountedPrice: 145,
                        productImages: [
                            {
                                url: product6,
                            }
                        ]
                    },
                    {
                        sku: '007',
                        name: 'Loose Fit Bermuda Shorts',
                        ratings: 3,
                        originalPrice: 80,
                        discountedPrice: 80,
                        productImages: [
                            {
                                url: product7,
                            },
                            {
                                url: product2,
                            }
                        ]
                    },
                    {
                        sku: '008',
                        name: 'Faded Skinny Jeans',
                        ratings: 4.5,
                        originalPrice: 160,
                        discountedPrice: 140,
                        productImages: [
                            {
                                url: product8,
                            }
                        ]
                    },
                    {
                        sku: '001',
                        name: 'T-shirt with Tape Details',
                        ratings: 4.5,
                        originalPrice: 120,
                        discountedPrice: 135,
                        productImages: [
                            {
                                url: product1,
                            },
                            {
                                url: product2,
                            },
                            {
                                url: product3,
                            },
                        ]
                    },
                    {
                        sku: '002',
                        name: 'Skinny Fit Jeans',
                        ratings: 3,
                        originalPrice: 260,
                        discountedPrice: 240,
                        productImages: [
                            {
                                url: product2,
                            },
                            {
                                url: product2,
                            }
                        ]
                    },
                    {
                        sku: '003',
                        name: 'Checkered Shirt',
                        ratings: 3.5,
                        originalPrice: 180,
                        discountedPrice: 180,
                        productImages: [
                            {
                                url: product3,
                            },
                            {
                                url: product2,
                            },
                            {
                                url: product4,
                            }
                        ]
                    },
                    {
                        sku: '004',
                        name: 'Sleeve Striped T-Shirt',
                        ratings: 5,
                        originalPrice: 160,
                        discountedPrice: 140,
                        productImages: [
                            {
                                url: product4,
                            }
                        ]
                    },
                ]
            },
            browse: {
                heading: 'BROWSE BY DRESS STYLE',
                categories: [
                    {
                        title: 'Casual',
                        cardImage: casual,
                        cardType: 'square'
                    },
                    {
                        title: 'Formal',
                        cardImage: formal,
                        cardType: 'rectangle'
                    },
                    {
                        title: 'Party',
                        cardImage: party,
                        cardType: 'rectangle'
                    },
                    {
                        title: 'Gym',
                        cardImage: gym,
                        cardType: 'square'
                    },
                ]
            }
        }
    },
};

export default mockContentData;
