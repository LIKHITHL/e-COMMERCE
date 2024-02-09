import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Slider = () => {
  return (
    <div className='container-fluid slider-bg'>
      <div id="largestslider" className="carousel slide">
        <div className="carousel-inner">
        {/* first slide of men */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://www.aristobrat.in/cdn/shop/products/CS_ClassicWhite_06_1024x1024.jpg?v=1614938700" height={300} className="card-img-top" alt="White Dress" />
                  <div className="card-body text-center">
                    <h4 className="card-title">White Shirt</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3  d-none d-md-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16269610/2021/11/27/5e4fb0c8-213e-4ebe-9f13-d0f535c53d061637986277865HIGHLANDERMenGreySweatshirt1.jpg" height={300} className="card-img-top" alt="Red Dress" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Gray Hoodi</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>23$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11361160/2020/2/24/6e48c2a4-5d44-48a1-9e89-ef45e60a6a671582535979796-WROGN-Men-Shirts-6061582535978238-1.jpg" height={300} className="card-img-top" alt="Black" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Black Shirt</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>17$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsc7MOCoAg45bDb8pdQHWsBQaZu-0L7qv5g&usqp=CAU" height={300} className="card-img-top" alt="Dress" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Casual Shoes </h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>29$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/*  second slide of women*/}
          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19076450/2022/7/22/e158832a-4fba-4a11-bcca-bd022ac503321658487852198-Libas-Women-Kurta-Sets-2351658487851381-1.jpg" height={300} className="card-img-top" alt="Red Kurta" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Red Kurta</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3  d-none d-md-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10265935/2019/7/26/2367e212-2ac8-4c42-98ed-6dc3c79261371564119180239-Jompers-Women-Green--Blue-Printed-Anarkali-Kurta-78215641191-1.jpg" height={300} className="card-img-top" alt="Jompers Kurtas" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Jompers Kurtas</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2472587/2019/7/2/7595a5b4-24c9-4c35-82e8-63197ea06f2c1562067468184-Anouk-Women-Yellow-Self-Design-Kurta-with-Palazzos-230156206-1.jpg" height={300} className="card-img-top" alt="Yellow Kurts" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Yellow Kurta</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>23$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18288422/2022/6/4/81b52f81-43db-44d8-bae0-852d299c84451654321605092-Bhama-Couture-Women-Off-White--Floral-Chanderi-Silk-Anarkali-1.jpg" height={300} className="card-img-top" alt="White Kurtas" />
                  <div className="card-body text-center">
                    <h4 className="card-title">White Kurta</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Third slide of both women and kids */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18645138/2022/11/4/afa682cf-9d77-4c88-9476-2e89bb17f3b91667558408886-Aj-DEZInES-Boys-Black--White-Shirt-with-Shorts-5501667558408-1.jpg" height={300} className="card-img-top" alt="Pants" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Kids</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>14$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3  d-none d-md-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23182032/2023/5/15/2e10a093-c2c7-4ecf-99fe-37f27f7ecbbf1684122015791PowerSutraWomenGreenComfortEasyWashTrousers1.jpg" height={300} className="card-img-top" alt="Formal Pants" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Formal Trouser</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>23$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://www.princessly.com/cdn/shop/products/ivory-lace-champagne-tulle-keyhole-back-wedding-party-flower-girl-dress-belt-688_400x.jpg?v=1669098215" height={300} className="card-img-top" alt="jeans" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Princess</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://i5.walmartimages.com/asr/d9915c88-a104-441e-9e16-ef907971d856.a59365b8c144f93d906e75596b224df3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" height={300} className="card-img-top" alt="Cargo" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Women Cargo Pants</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* fourth slide of skirts */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18759110/2023/1/9/dcaa3849-dd49-4980-88de-c2571b9463831673258013364-HERENOW-Women-Skirts-6311673258012648-1.jpg" height={300} className="card-img-top" alt="White Skirts" />
                  <div className="card-body text-center">
                    <h4 className="card-title">White Skirt</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>19$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-md-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11772772/2020/3/31/3b293521-2a66-4bfd-8b8c-db390c2a0a721585646504386TokyoTalkiesWomenBlueSolidStraightMiniDenimSkirt1.jpg" height={300} className="card-img-top" alt="Skirt" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Mini Denim Skirt</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23286068/2023/5/20/d44b973e-cacc-4013-b15c-54db6cff80981684559620115Skirts1.jpg" height={300} className="card-img-top" alt="Skirts" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Long Black Skirt</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>33$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center g-3 mb-3 d-none d-lg-block">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://rukminim1.flixcart.com/image/300/300/xif0q/skirt/0/g/9/xl-skrt-1016-aask-original-imagmfxsz2aajytx.jpeg" height={300} className="card-img-top" alt="Skirt" />
                  <div className="card-body text-center">
                    <h4 className="card-title">Dark Blue Pleated Skirt</h4>
                    <p className="card-text">Size-inclusive Style
                      <br />
                      35-55% OFF
                      <br />
                      Shop Now
                      <br />
                      <b>19$</b>
                    </p>
                    <a href="/" className="btn btn-secondary float-none">Add to cart
                      <FontAwesomeIcon className="cart" icon={faCartShopping} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#largestslider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#largestslider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Slider