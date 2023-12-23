import React from 'react'
import "./BestSelling.css"
const BestSelling = () => {
    return (
        <div>
            <section id="best-selling" className="leaf-pattern-overlay">
                <div className="corner-pattern-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-8">

                            <div className="row">

                                <div className="col-md-6 left">
                                    <figure className="products-thumb">
                                        <img src="https://covers.openlibrary.org/b/id/11447888-L.jpg" alt="book" className="single-image"/>
                                    </figure>
                                </div>

                                <div className="col-md-6 right">
                                    <div className="product-entry">
                                        <h2 className="section-title divider">Best Selling Book</h2>

                                        <div className="products-content">
                                            <div className="author-name">By Timbur Hood</div>
                                            <h3 className="item-title">Birds gonna be happy</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                                                libero ipsum enim pharetra hac.</p>
                                            <div className="item-price">$ 45.00</div>
                                            <div className="btn-wrap">
                                                <a href="#" className="btn-accent-arrow">shop it now <i
                                                    className="icon icon-ns-arrow-right"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BestSelling