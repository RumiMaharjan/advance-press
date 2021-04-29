import React from 'react';
import Product from './Product';
import '../css/Home.css';

function Home() {
    return (
        <div className='home'>
       <div className="home__container">
       <img
       className="home__image"
       src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
       />

       <div className="home__row">
       <Product
       id="1"
       title="The lean startup"
       price= {29.99}
       image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
       rating={2}
       />
       <Product
       id="2"
       title="Kenwood kmix stand mixer for baking, Stylish Kitchen Mixer with k-beater, Dough Hook and whisk, 5 liter glass bowl"
       price ={ 239.0}
       rating={4}
       image="https://m.media-amazon.com/images/I/818XosuUHPL._AC_UY218_.jpg"
       />
      
       </div>

       <div className="home__row">
       <Product
       id="3"
       title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
       price={199.99}
       rating={3}
       image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
       />
       <Product
       id="4"
       title="Amazon Echo {3rd generation} | Smart speaker with Alexa, Charcoal Fabric"
       price={98.99}
       rating={5}
       image="https://m.media-amazon.com/images/I/618b7IUpXHL._AC_UL320_.jpg"
       />
       <Product
       id="5"
       title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) -Silver(4th Generation)"
       price={598.99}
       rating={4}
       image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg"
       />
      
       </div>

       <div className="home__row">
       <Product
       id="6"
       title="Samsung LC49RG0SSUZXEN 49' CUrved LED Gaming MOnitor - Super Ultra Wide Dual WQHD 5120 x 1440"
       price={1094.98}
       rating={4}
       image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
       />
       
       </div>
       </div>
            
        </div>
    )
}

export default Home;
