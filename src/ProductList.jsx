import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total count of plants in cart
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night and removes toxins such as formaldehyde.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/05/16/00/spider-plant-3518588_1280.jpg',
          description: 'Filters carbon monoxide and creates clean, breathable indoor air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Elegant white blooms that remove benzene, trichloroethylene, and ammonia.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/55/boston-fern-5114414_1280.jpg',
          description: 'Restores natural humidity to indoor air while removing pollutants.',
          cost: '$16',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Stately glossy leaves that effectively eliminate toxins from living spaces.',
          cost: '$20',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Natural air purifier that soothes skin and indicates air quality.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic & Culinary Fragrant Plants',
      plants: [
        {
          name: 'English Lavender',
          image: 'https://cdn.pixabay.com/photo/2016/07/11/15/45/lavender-1510001_1280.jpg',
          description: 'Calming floral aroma known to ease anxiety and promote restful sleep.',
          cost: '$22',
        },
        {
          name: 'Fresh Jasmine',
          image: 'https://cdn.pixabay.com/photo/2019/07/16/18/18/jasmine-4342377_1280.jpg',
          description: 'Sweet, intoxicating scent that uplifts mood and relieves tension.',
          cost: '$24',
        },
        {
          name: 'Rosemary Herb',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Fragrant culinary herb that boosts focus, memory, and concentration.',
          cost: '$14',
        },
        {
          name: 'Sweet Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/13/mint-1126282_1280.jpg',
          description: 'Invigorating refreshing scent perfect for herbal infusions and kitchens.',
          cost: '$11',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2017/06/15/10/15/lemon-balm-2404768_1280.jpg',
          description: 'Citrusy aromatic leaves used for soothing herbal relaxation.',
          cost: '$13',
        },
        {
          name: 'Garden Thyme',
          image: 'https://cdn.pixabay.com/photo/2016/07/28/19/43/thyme-1549405_1280.jpg',
          description: 'Earthy, warm scent with excellent culinary versatility.',
          cost: '$12',
        },
      ],
    },
    {
      category: 'Low Maintenance & Succulents',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/29/18/23/zamioculcas-5961775_1280.jpg',
          description: 'Thrives in low light conditions and needs very infrequent watering.',
          cost: '$25',
        },
        {
          name: 'Pothos (Golden Devil\'s Ivy)',
          image: 'https://cdn.pixabay.com/photo/2021/04/05/14/49/pothos-6153664_1280.jpg',
          description: 'Hardy trailing vine that adapts effortlessly to almost any lighting.',
          cost: '$14',
        },
        {
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2019/02/14/09/26/crassula-3996225_1280.jpg',
          description: 'Classic succulent symbolizing good fortune with plump fleshy leaves.',
          cost: '$17',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2020/07/04/10/24/aspidistra-5369018_1280.jpg',
          description: 'Extremely durable botanical that survives neglect, dust, and deep shade.',
          cost: '$28',
        },
        {
          name: 'Haworthia Zebra Succulent',
          image: 'https://cdn.pixabay.com/photo/2017/08/07/19/07/succulent-2607908_1280.jpg',
          description: 'Striking striped mini succulent ideal for desktop decor.',
          cost: '$9',
        },
        {
          name: 'Chinese Evergreen (Aglaonema)',
          image: 'https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505_1280.jpg',
          description: 'Vibrant patterned leaves requiring minimal light and simple care.',
          cost: '$19',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    if (e) e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navigation Bar that appears on both Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          <span className="navbar-logo">🌿</span>
          <div className="navbar-title-container">
            <h1 className="navbar-title">Paradise Nursery</h1>
            <p className="navbar-tagline">Where Green Dreams Come True</p>
          </div>
        </div>

        <div className="navbar-links">
          <button className="nav-link-btn" onClick={onHomeClick}>
            Home
          </button>
          <button className="nav-link-btn" onClick={handlePlantsClick}>
            Plants
          </button>
          <button className="nav-link-btn cart-icon-btn" onClick={handleCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cart-svg-icon"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">{totalCartCount}</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area: either CartItem or Product List */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <div className="product-grid-container">
          {plantsArray.map((categorySection, catIndex) => (
            <div key={catIndex} className="category-section">
              <div className="category-header-wrap">
                <h2 className="category-title">{categorySection.category}</h2>
                <div className="category-divider"></div>
              </div>
              <div className="plant-cards-grid">
                {categorySection.plants.map((plant, plantIndex) => {
                  const isAdded = addedNodes[plant.name] || cartItems.some((item) => item.name === plant.name);
                  return (
                    <div className="plant-card" key={plantIndex}>
                      <div className="plant-image-container">
                        <img className="plant-image" src={plant.image} alt={plant.name} />
                        <span className="plant-price-tag">{plant.cost}</span>
                      </div>
                      <div className="plant-info">
                        <h3 className="plant-name">{plant.name}</h3>
                        <p className="plant-description">{plant.description}</p>
                        <button
                          className={`product-button ${isAdded ? 'disabled' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={isAdded}
                        >
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
