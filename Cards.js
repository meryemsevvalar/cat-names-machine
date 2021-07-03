import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h2>Kedinize uygun isim bulamadıysanız, size önerebiliriz.</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/cat.jpg" 
                        path="services"
                        text="Onu ne kadar sevdiğinizi biliyoruz."
                        />
                        <CardItem
                        src="images/kitty.jpg" 
                        path="services"
                        text="Yeni dostunuzun rahatı ve sağlığı için de önerilerimize ulaşabilirsiniz."
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards