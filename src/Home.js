import React from 'react';
import './Home.css';
import Product from './Product';
import home_backgroundImage from './images/home_backgroundImage.jpg';
import maggipack from './images/maggi_fivepack.png';
import colgatemaxfresh from './images/colgate_maxfresh_tenpack.png';
import dovesoap from './images/dovesoap.png';
import tomatoes from './images/tomato_250gm.png';
import bananas from './images/banana_dozen.png';
import atta from './images/atta_bigbag.png';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                {/* Later dont forget to replace this Image with your Team Name
                  Dipshit Name: Pocket mein Rocket BC*/}
                <img className='home_image'
                     src={home_backgroundImage} alt='Logo'/>

            <div className="home_row">
                <Product
                    id="12321341"
                    title="Nestle Maggi 5 Pack "
                    price={60}
                    rating={5}
                    image={maggipack}
                />
                <Product
                    id="49538094"
                    title="Colgate Max Fresh 10 Pack"
                price={200}
                rating={4}
                image={colgatemaxfresh}
                />
            </div>
            <div className="home_row">
              <Product
                id="4903850"
                title="Dove Soap"
                price={20}
                rating={3}
                image={dovesoap}
                />
              <Product
                id="23445930"
                title="Fresh Tomatoes 250 Grams"
                price={50}
                rating={5}
                image={tomatoes}
               />
              <Product
                id="3254354345"
                title="Banana One Dozen (12) Pack"
                price={100}
                rating={4}
                image={bananas}
              />
            </div>
            <div className="home_row">
                <Product
                    id="90829332"
                    title="Ashirvaad Atta 1 KG Bag"
                    price={500}
                    rating={4}
                    image={atta}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
