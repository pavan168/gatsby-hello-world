import React from 'react'
import Layout from "../components/layout"
import * as CLayer from 'commercelayer-react'

const ProductPage = () => {

    return (
        <Layout>
            <div>

                <h3>Product details page </h3>

                <h1>Black Baby Onesie Short Sleeve with Pink Logo (New born)</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <img
                    width="200"
                    src="https://img.commercelayer.io/skus/BABYONBU000000E63E74.png?fm=jpg&q=90"
                />

                <div className="clayer-price" data-sku-code="BABYONBU000000E63E74NBXX">
                    Amount: <span className="amount"></span>
                    <br />
                    Compare At Price: <span className="compare-at-amount"></span>
                </div>

                <br />
                <input
                    id="add-to-bag-quantity-BABYONBU000000E63E74NBXX"
                    type="number"
                    value="1"
                    className="clayer-add-to-bag-quantity"
                    data-sku-code="BABYONBU000000E63E74NBXX"
                />

                <a
                    href="#"
                    className="clayer-add-to-bag"
                    data-sku-code="BABYONBU000000E63E74NBXX"
                    data-sku-name="Black Baby Onesie Short Sleeve with Pink Logo (6 Months)"
                    data-sku-reference="Any reference"
                    data-sku-image-url="https://img.commercelayer.io/skus/BABYONBU000000E63E74NBXX.png?fm=jpg&q=90&w=400"
                    data-availability-message-container-id="availability-message-BABYONBU000000E63E74NBXX"
                >
                    Add to bag
                </a>

                <br />
                <br />

                <h3>Your Cart</h3>
                <h3>Cart Items #<span className="clayer-shopping-bag-items-count">0</span></h3>
                <div id="clayer-shopping-bag-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th colspan="2">SKU</th>
                                <th>Reference</th>
                                <th>Unit price</th>
                                <th>Q.ty</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="clayer-shopping-bag-items-container">
                        </tbody>
                        <table id="clayer-shopping-bag-item-template">
                            <tr>
                                <td>
                                    <img className="clayer-shopping-bag-item-image"></img>
                                </td>
                                <td className="clayer-shopping-bag-item-name"></td>
                                <td className="clayer-shopping-bag-item-reference"></td>
                                <td className="clayer-shopping-bag-item-unit-amount"></td>
                                <td className="clayer-shopping-bag-item-qty-container">

                                    <span className="clayer-shopping-bag-item-availability-message-container"></span>
                                </td>
                                <td className="clayer-shopping-bag-item-total-amount"></td>
                                <td>
                                    <a href="#" className="clayer-shopping-bag-item-remove">remove</a>
                                </td>
                            </tr>
                        </table>
                    </table>

                    <h3>Checkout</h3>

                    <table className="table is-fullwidth">
                        <tr>
                            <td>Subtotal</td>
                            <td className="clayer-shopping-bag-subtotal"></td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td className="clayer-shopping-bag-shipping"></td>
                        </tr>
                        <tr>
                            <td>Payment</td>
                            <td className="clayer-shopping-bag-payment"></td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td className="clayer-shopping-bag-discount"></td>
                        </tr>
                        <tr>
                            <td>Taxes</td>
                            <td className="clayer-shopping-bag-taxes"></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td className="clayer-shopping-bag-total"></td>
                        </tr>
                    </table>
                </div>


                <CLayer.Config
                    baseUrl={process.env.COMMERCELAYER_BASE_URL}
                    clientId={process.env.COMMERCELAYER_CLIENT_ID}
                    marketId={process.env.COMMERCELAYER_MARKET_ID}
                    countryCode="US"
                    languageCode="en"
                    cartUrl="http://localhost:8000/product-page/"
                    returnUrl="https://example.com/return"
                    privacyUrl="https://example.com/privacy"
                    termsUrl="https://example.com/terms" />
            </div>
        </Layout >
    )
}

export default ProductPage;