import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './gifts.css'

const TheTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        color: 'black',
        paddingTop: '20px',
        textAlign: 'center',
        margin: 'auto',
        fontFamily: 'Montserrat'
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '2rem',
        },
    }
}))(Typography);

export default class GiftsPage extends Component {
    render() {
        return (
            <div>
                <TheTitle>Gifts Collections</TheTitle>



                <div className="nggifts">
      <div className="nggiftContainer">

        <div className="nggiftItems">

          <div className="nggiftItem">
           
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5333.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These delicious creations are crafted in small batches and packed with care. Each one is loaded with simple, wholesome ingredients. Handmade in a peanut and tree nut free facility with natural ingredients and no preservatives. Kosher.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Milk Chocolate Shortbread Cookies (bag)</div>
                <div className="nggiftPrice">$5.75</div>
              </div>
          </div>

          <div className="nggiftItem">
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5328.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These delicious creations are crafted in small batches and packed with care. Each one is loaded with simple, wholesome ingredients. Handmade in a peanut and tree nut free facility with natural ingredients and no preservatives. Kosher.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">White Choc. Cranberry Shortbread Cookies (bag)</div>
                <div className="nggiftPrice">$5.75</div>
              </div>
          </div>

          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/SaltedCaramelShortbread.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    Tender shortbread with delectable butterscotch chips and a hint of salt. Handmade in a peanut free and tree nut free facility with natural ingredients and no preservatives. Kosher.  
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Salted Caramel Shortbread Cookies (box)</div>
                <div className="nggiftPrice">$6.50</div>
              </div>
            
          </div>          
          
          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/ChocolateShortbreadCookies.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These delicious creations are crafted in small batches and packed with care. Each one is loaded with simple, wholesome ingredients. Handmade in a peanut and tree nut free facility with natural ingredients and no preservatives. Kosher.  
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Chocolate Shortbread Cookies (box)</div>
                <div className="nggiftPrice">$6.50</div>
              </div>
            
          </div>          
          
          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5325.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    Keep hands clean and fresh smelling at home and away. These refreshing Clean Hand Sprays are formulated with 70% alcohol.  Scented with natural aromas from essential oils and fruit extracts.  2 fl oz travel size bottle.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Lemon Lime Sanitizer Spray</div>
                <div className="nggiftPrice">$8.25</div>
              </div>
            
          </div>

          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5354.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    Super soft bamboo face mask is double layered featuring bamboo ear loops and is great for sensitive skin. These masks are hypoallergenic and have UV protection and are 99.8% antibacterial. Available colours may vary.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Tie-Dyed Bamboo Face Mask</div>
                <div className="nggiftPrice">$25.00</div>
              </div>
            
          </div>

          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5350.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    Hit the reset button with this refreshing and soothing lemon and ginger infusion featuring Nova Scotia cranberries. Delicious hot or iced, this fine cut herbal tea packs a lot of flavour and is a Pluck top selling blend. A powerful digestive tea, and caffeine - free. 15 teabags per box.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Ctrl Alt Delete Loose Leaf Teabags</div>
                <div className="nggiftPrice">$9.95</div>
              </div>
            
          </div>

          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5322.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    Add a little sparkle to any celebration with Champagne flavoured gumdrops. This non-alcoholic flavour is fruity & refreshing with a tiny hint of floral. All organic and made with natural ingredients.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Champagne Gum Drops</div>
                <div className="nggiftPrice">$8.25</div>
              </div>
            
          </div>

          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/FraktalsMilkChoc.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    The velvety buttercrunch goodness made with real butter, organic maple syrup layered between sustainably sourced Belgian milk chocolate, topped with raw cashews! Need we say more? 100ml bag.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Belgian Chocolate Cashew Buttercrunch</div>
                <div className="nggiftPrice">$6.00</div>
              </div>
            
          </div>

          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/CottonSocks1.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    A super cozy combed cotton sock that is a great work from home sock or wear while relaxing at the cottage. This timeless classNameic look can be worn year round and will never go out of fashion. Custom designed message on bottom of feet.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">100% Cotton Socks - Gray & Black</div>
                <div className="nggiftPrice">$15.00</div>
              </div>
            
          </div>
          
          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/CottonSocks2.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    A super cozy combed cotton sock that is a great work from home sock or wear while relaxing at the cottage. This timeless classNameic look can be worn year round and will never go out of fashion. Custom designed message on bottom of feet.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">100% Cotton Socks - Gray & Black</div>
                <div className="nggiftPrice">$15.00</div>
              </div>
            
          </div>

          
          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/CottonSocks3.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    A super cozy combed cotton sock that is a great work from home sock or wear while relaxing at the cottage. This timeless classNameic look can be worn year round and will never go out of fashion. Custom designed message on bottom of feet.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">100% Cotton Socks - Gray & Black</div>
                <div className="nggiftPrice">$15.00</div>
              </div>
            
          </div>

                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/Bib1.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These two-toned infant premium jersey bandana bibs are perfect for your trendy newborn or toddler.  Made with 100% combed ringspun cotton premium jersey. Velcro closure. Natural white with custom designed message.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Baby Bandana Bib</div>
                <div className="nggiftPrice">$13.50</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/Bib2.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These two-toned infant premium jersey bandana bibs are perfect for your trendy newborn or toddler.  Made with 100% combed ringspun cotton premium jersey. Velcro closure. Natural white with custom designed message.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Baby Bandana Bib</div>
                <div className="nggiftPrice">$13.50</div>
              </div>
            
          </div>
          
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/Onesie1.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These super soft baby onesies are made with 100% combed ringspun cotton. Reinforced three-snap closure. White with custom designed message in gray.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">0-6 Month Baby Onesie</div>
                <div className="nggiftPrice">$14.95</div>
              </div>
            
          </div>
          
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/Onesie2.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    These super soft baby onesies are made with 100% combed ringspun cotton. Reinforced three-snap closure. White with custom designed message in gray.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">0-6 Month Baby Onesie</div>
                <div className="nggiftPrice">$14.95</div>
              </div>
            
          </div>
          
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/Onesie3.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   These super soft baby onesies are made with 100% combed ringspun cotton. Reinforced three-snap closure. White with custom designed message in gray.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">0-6 Month Baby Onesie</div>
                <div className="nggiftPrice">$15.00</div>
              </div>
            
          </div>
          
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5425.jpg"/>
                <div className="nggiftInfo">
                  <p>
                    Made entirely of 100% food-grade silicone, our Fringe is an easy-to-wear teething accessory that momma will enjoy wearing. The Fringe will help soothe your little one’s tender gums without sacrificing style. BPA free. No latex, phthalates, lead or cadmium.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Fringe Teething Necklace</div>
                <div className="nggiftPrice">$14.00</div>
              </div>
            
          </div>
          
          
          <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5468.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   Made entirely of 100% food-grade silicone, our Surfboard teether is essential for your little teething rom. Each Surfboard comes with a matching leash – a soft strap made of 100% organic cotton. 
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Surfboard Teething Toy</div>
                <div className="nggiftPrice">$18.00</div>
              </div>
            
          </div>
          
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/_DSC5529.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   A fresh, fruity floral blend of English freesia, Japanese honeysuckle, and plum. Balanced by amber and warm oriental wood notes. This natural botanical candle is blended with essential oils and pure extracts. Hand poured into white glass with an embossed chrome plated lid.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Japanese Honeysuckle Candle</div>
                <div className="nggiftPrice">$16.95</div>
              </div>
            
          </div>
          
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/WayofWillMaskSpray.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   Wearing a face mask can help you and loved ones stay safe and healthy, but the air you breathe in can get stale after a few hours.  Enjoy freshness in every breath you by using tea tree and lavender face mask spray.  130ml
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Face Mask Spray - Tea Tree / Lavender</div>
                <div className="nggiftPrice">$13.00</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/WayofWillSleepTight.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   A good night’s rest is essential to a healthy lifestyle. Say goodbye to sleepless nights and ease yourself into peaceful slumber the natural way with this essential oil blend of sandalwood, sweet marjoram,  geranium,  rose and bergamot. 15ml
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Sleep Tight - Aromatherapy Oil</div>
                <div className="nggiftPrice">$19.00</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/BuckNakedLotionBar.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   This extreme moisturizing bar is rich with shea butter and cocoa butter that soothe and nourish skin, while lavender and rosemary essential oils add an amazing scent. Surprisingly soft and light in texture, you can use it anywhere on your face or body.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Lotion Bars - Lavender Rosemary</div>
                <div className="nggiftPrice">$9.50</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/BuckNakedLipButter.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   Pucker with this perfect vegan lip balm that has amazing moisturizing capabilities and is long-lasting. Contains only the best and most luxurious oils and butters, including shea and aloe. It is soft, smooth, and subtly scented with vanilla and mint.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Lip Butters - Vanilla Mint</div>
                <div className="nggiftPrice">$4.00</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/BuckNakedCoffeeSoap.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   With all the elements of an artisan coffee, you will crave the moisturizing effects of this soap as it helps start your day. The ingredients help soothe dry, irritated skin often associated with eczema and minimize the look of fine lines. Ideal for normal, dry or mature skin.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Coffee Start Up Soap Bar</div>
                <div className="nggiftPrice">$8.50</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/MugQuarantine.jpg"/>
                <div className="nggiftInfo">
                  <p>
                   Let everybody know who rules the roost during lockdown with this stylish mug! White ceramic mug with stylish black type makes for a cheeky reminder of how crazy this past year has been.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Mug Quarantine Queen</div>
                <div className="nggiftPrice">$9.95</div>
              </div>
            
          </div>
          
                    <div className="nggiftItem">
            
              <div className="ngimageContainer">
                <img src="https://www.5amlemon.com/uStore/Images/FALVersionTWO/FaLimages/gifts/thumbs/MugSocialDistance.jpg"/>
                <div className="nggiftInfo">
                  <p>
                  A cheeky way to remind friends and family to maintain their distance while you enjoy your morning coffee or tea. White ceramic mug with stylish black type makes for a handy and humorous momento of an unprecedented year.
                  </p>
                </div>
              </div>
              <div className="nggiftDesciption">
                <div className="nggiftTitle">Mug Social Distancing</div>
                <div className="nggiftPrice">$9.95</div>
              </div>
            
          </div>
          
          
        </div>
      </div>
    </div>



                
            </div>
        )
    }
}
