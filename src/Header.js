import React from 'react';
import './style.css';
import { FaFire, FaCheck, FaUtensilSpoon, FaStar } from 'react-icons/fa';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#fdf2e9', height: '800px' }}>
      <div
        style={{
          display: 'flex',
          cursor: 'pointer',
        }}
      >
        <img
          style={{ height: '3vh', marginTop: '3vh', marginLeft: '2.5vw' }}
          src="https://omnifood.dev/img/omnifood-logo.png"
          alt=""
        />
        <h3
          className="head-hov"
          style={{ marginLeft: '38vw', marginTop: '3vh' }}
        >
          How It Works
        </h3>
        <h3
          className="head-hov"
          style={{ marginLeft: '3vw', marginTop: '3vh' }}
        >
          Meals
        </h3>
        <h3
          className="head-hov"
          style={{ marginLeft: '3vw', marginTop: '3vh' }}
        >
          Testimonoals
        </h3>
        <h3
          className="head-hov"
          style={{ marginLeft: '3vw', marginTop: '3vh' }}
        >
          Pricing
        </h3>
        <button
          style={{
            marginLeft: '3vw',
            marginTop: '2vh',
            width: '9vw',
            height: '5vh',
            borderRadius: '9px',
            color: 'fff',
            backgroundColor: '#e67e22',
            color: 'white',
            fontSize: '20px',
          }}
        >
          Try for free
        </button>
      </div>
      <div
        style={{
          fontSize: '1.9rem',
          lineHeight: '0.3',
          marginBottom: '1.2rem',
          marginTop: '15vh',
          marginLeft: '10vw',
        }}
      >
        <h1>A healthy meal</h1>
        <h1>delivered to your door,</h1>
        <h1>every single day</h1>
      </div>
      <div
        style={{
          fontSize: '24px',
          lineHeight: '0.5',
          marginBottom: '3.2rem',
          marginTop: '9vh',
          marginLeft: '10vw',
        }}
      >
        <p> The smart 365-days-per-year food subscription that will </p>{' '}
        <p> make you eat healthy again. Tailored to your personal tastes</p>{' '}
        <p> and nutritional needs.</p>
      </div>
      <div style={{ marginLeft: '10vw', marginTop: '7vh' }}>
        <button
          style={{
            backgroundColor: '#e67e22',
            color: 'white',
            height: '5vh',
            width: '15vw',
            fontWeight: '600',
            fontSize: '24px',
            borderRadius: '9px',
          }}
        >
          Start eating well
        </button>
        <button
          style={{
            marginLeft: '2vw',
            backgroundColor: 'white',
            color: 'black',
            height: '5vh',
            width: '15vw',
            fontWeight: '600',
            fontSize: '24px',
            borderRadius: '9px',
          }}
        >
          Learn more &#8595;
        </button>
      </div>

      <div style={{ display: 'flex', marginTop: '8vh', marginLeft: '10vw' }}>
        <img
          style={{ borderRadius: '50%', height: '6vh' }}
          src="https://omnifood.dev/img/customers/customer-1.jpg"
          alt=""
        />
        <img
          style={{
            borderRadius: '50% ',
            height: '6vh',
            marginLeft: '-1vw',
          }}
          src="https://omnifood.dev/img/customers/customer-2.jpg"
          alt=""
        />
        <img
          style={{ borderRadius: '50%', height: '6vh', marginLeft: '-1vw' }}
          src="https://omnifood.dev/img/customers/customer-3.jpg"
          alt=""
        />
        <img
          style={{ borderRadius: '50%', height: '6vh', marginLeft: '-1vw' }}
          src="https://omnifood.dev/img/customers/customer-4.jpg"
          alt=""
        />
        <img
          style={{ borderRadius: '50%', height: '6vh', marginLeft: '-1vw' }}
          src="https://omnifood.dev/img/customers/customer-5.jpg"
          alt=""
        />
        <img
          style={{ borderRadius: '50%', height: '6vh', marginLeft: '-1vw' }}
          src="https://omnifood.dev/img/customers/customer-6.jpg"
          alt=""
        />
        <h3
          style={{
            color: 'orange',
            marginTop: '1.7vh',
            marginLeft: '2vw',
            fontSize: '24px',
            fontWeight: '1000',
          }}
        >
          25000+
        </h3>
        <h3
          style={{
            color: 'black',
            marginTop: '1.5vh',
            marginLeft: '0.2vw',
            fontSize: '24px',
            fontWeight: '500',
          }}
        >
          meals delivered last year!
        </h3>
      </div>
      <div style={{ marginTop: '-70vh' }}>
        <img
          style={{ height: '75vh', width: '40vw', marginLeft: '53vw' }}
          src="https://omnifood.dev/img/hero.webp"
          alt=""
        />
      </div>

      <div
        style={{ backgroundColor: 'white', height: '1000px', width: '100%' }}
      >
        <h4 style={{ textAlign: 'center', marginTop: '15vh' }}>
          AS FEATURED IN
        </h4>
        <div style={{ marginTop: '-15vh', marginLeft: '20vw' }}>
          <img
            style={{
              height: '5vh',
              marginTop: '15vh',
              width: '20vh',
              marginRight: '3vw',
            }}
            src="https://omnifood.dev/img/logos/techcrunch.png"
            alt=""
          />
          <img
            style={{
              height: '5vh',
              marginTop: '15vh',
              width: '20vh',
              marginRight: '3vw',
            }}
            src="https://omnifood.dev/img/logos/business-insider.png"
            alt=""
          />
          <img
            style={{
              height: '5vh',
              marginTop: '15vh',
              width: '20vh',
              marginRight: '3vw',
            }}
            src="https://omnifood.dev/img/logos/the-new-york-times.png"
            alt=""
          />
          <img
            style={{
              height: '5vh',
              marginTop: '15vh',
              width: '20vh',
              marginRight: '3vw',
            }}
            src="https://omnifood.dev/img/logos/forbes.png"
            alt=""
          />
          <img
            style={{
              height: '5vh',
              marginTop: '15vh',
              width: '20vh',
              marginRight: '3vw',
            }}
            src="https://omnifood.dev/img/logos/usa-today.png"
            alt=""
          />
        </div>
        <div
          style={{ marginTop: '15vh', marginLeft: '10vw', lineHeight: '0.2' }}
        >
          <h4 style={{ color: 'orange' }}>HOW IT WORKS</h4>
          <h1 style={{ fontWeight: '1000', fontSize: '50px' }}>
            Your daily dose of health in 3 simple steps
          </h1>
        </div>
        <div style={{ marginTop: '2vh' }}>
          <h1
            style={{
              color: 'silver',
              fontWeight: '1000',
              fontSize: '100px',
              marginTop: '26vh',
              marginLeft: '10vw',
            }}
          >
            01
          </h1>
          <h1
            style={{
              fontWeight: '1000',
              fontSize: '34px',
              marginTop: '-9vh',
              marginLeft: '10vw',
            }}
          >
            Tell us what you like (and what not)
          </h1>
          <div
            style={{
              marginTop: '2vh',
              marginLeft: '10vw',
              fontWeight: '100',
              fontSize: '17px',
            }}
          >
            <p>
              Never again waste time thinking about what to eat! Omnifood AI{' '}
            </p>
            <p>
              {' '}
              will create a 100% personalized weekly meal plan just for you. It{' '}
            </p>{' '}
            <p>
              {' '}
              makes sure you get all the nutrients and vitamins you need, no
              matter{' '}
            </p>{' '}
            <p> what diet you follow!</p>
          </div>
          <div>
            <img
              style={{ height: '50vh', marginTop: '-50vh', marginLeft: '60vw' }}
              src="https://omnifood.dev/img/app/app-screen-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <img
          style={{ height: '50vh', marginTop: '-10vh', marginLeft: '20vw' }}
          src="https://omnifood.dev/img/app/app-screen-2.png"
          alt=""
        />
        <h1
          style={{
            color: 'silver',
            fontWeight: '1000',
            fontSize: '100px',
            marginTop: '-45vh',
            marginLeft: '50vw',
          }}
        >
          02
        </h1>
        <h1
          style={{
            fontWeight: '1000',
            fontSize: '34px',
            marginTop: '-9vh',
            marginLeft: '50vw',
          }}
        >
          Approve your weekly meal plan
        </h1>
        <div
          style={{
            marginTop: '2vh',
            marginLeft: '50vw',
            fontWeight: '100',
            fontSize: '17px',
          }}
        >
          <p>Once per week, approve the meal plan generated for you by</p>
          <p>Omnifood AI. You can change ingredients, swap entire meals, or</p>
          <p>even add your own recipes.</p>
        </div>
      </div>
      <div style={{ marginTop: '2vh' }}>
        <h1
          style={{
            color: 'silver',
            fontWeight: '1000',
            fontSize: '100px',
            marginTop: '26vh',
            marginLeft: '10vw',
          }}
        >
          03
        </h1>
        <h1
          style={{
            fontWeight: '1000',
            fontSize: '34px',
            marginTop: '-9vh',
            marginLeft: '10vw',
          }}
        >
          Receive meals at convenient time
        </h1>
        <div
          style={{
            marginTop: '2vh',
            marginLeft: '10vw',
            fontWeight: '100',
            fontSize: '17px',
          }}
        >
          <p>Best chefs in town will cook your selected meal every day, and</p>
          <p>
            we will deliver it to your door whenever works best for you. You
          </p>
          <p>can change delivery schedule and address daily!</p>
          <img
            style={{ height: '50vh', marginTop: '-50vh', marginLeft: '60vw' }}
            src="https://omnifood.dev/img/app/app-screen-3.png"
            alt=""
          />
        </div>

        <div style={{ marginTop: '19vh' }}>
          <h3 style={{ textAlign: 'center', color: 'orange' }}>MEALS</h3>
          <h1
            style={{
              fontWeight: '1000',
              fontSize: '40px',
              marginTop: '-2vh',
              marginLeft: '25vw',
            }}
          >
            Omnifood AI chooses from 5,000+ recipes
          </h1>
        </div>
        <div
          style={{
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            width: '23vw',
            height: '70vh',
            borderRadius: '10px',
            marginTop: '12vh',
            marginLeft: '13vw',
          }}
        >
          <img
            style={{
              borderRadius: '5px 5px 0 0',
              width: '23vw',
              height: '35vh',
            }}
            src="https://omnifood.dev/img/meals/meal-1.jpg"
            alt=""
          />
          <button
            style={{
              backgroundColor: '#51cf66',
              marginLeft: '3vw',
              marginTop: '2vh',
              borderRadius: '10px',
              fontWeight: '1000',
            }}
          >
            VEGETARAIAN
          </button>
          <h1 style={{ marginLeft: '3vw', marginTop: '-0.2vh' }}>
            Japanese Gyozas
          </h1>
          <div
            style={{ display: 'flex', marginLeft: '3vw', marginTop: '-1vh' }}
          >
            <h3 style={{ color: 'orange', marginRight: '1vw' }}>
              <FaFire />
            </h3>
            <h3>650 calories</h3>
          </div>
          <div
            style={{ display: 'flex', marginLeft: '3vw', marginTop: '-1vh' }}
          >
            <h3 style={{ color: 'orange', marginRight: '1vw' }}>
              <FaUtensilSpoon />
            </h3>
            <h3>NutriScore ® 74</h3>
          </div>
          <div
            style={{ display: 'flex', marginLeft: '3vw', marginTop: '-1vh' }}
          >
            <h3 style={{ color: 'orange', marginRight: '1vw' }}>
              <FaStar />
            </h3>
            <h3>4.9 rating (537)</h3>
          </div>
        </div>
        <div
          style={{
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            width: '23vw',
            height: '70vh',
            borderRadius: '10px',
            marginTop: '-70vh',
            marginLeft: '40vw',
          }}
        >
          <img
            style={{
              borderRadius: '5px 5px 0 0',
              width: '23vw',
              height: '35vh',
            }}
            src="https://omnifood.dev/img/meals/meal-2.jpg"
            alt=""
          />
          <button
            style={{
              backgroundColor: '#94d82d',
              marginLeft: '3vw',
              marginTop: '2vh',
              borderRadius: '10px',
              fontWeight: '1000',
            }}
          >
            VEGAN
          </button>
          <button
            style={{
              backgroundColor: '#ffd43b',
              marginLeft: '1vw',
              marginTop: '2vh',
              borderRadius: '10px',
              fontWeight: '1000',
            }}
          >
            PALEO
          </button>

          <h1 style={{ marginLeft: '3vw', marginTop: '-0.2vh' }}>
            Avocado Salad
          </h1>
          <div
            style={{ display: 'flex', marginLeft: '3vw', marginTop: '-1vh' }}
          >
            <h3 style={{ color: 'orange', marginRight: '1vw' }}>
              <FaFire />
            </h3>
            <h3>400 calories</h3>
          </div>
          <div
            style={{ display: 'flex', marginLeft: '3vw', marginTop: '-1vh' }}
          >
            <h3 style={{ color: 'orange', marginRight: '1vw' }}>
              <FaUtensilSpoon />
            </h3>
            <h3>NutriScore ® 92</h3>
          </div>
          <div
            style={{ display: 'flex', marginLeft: '3vw', marginTop: '-1vh' }}
          >
            <h3 style={{ color: 'orange', marginRight: '1vw' }}>
              <FaStar />
            </h3>
            <h3>4.8 rating (441)</h3>
          </div>
        </div>
        <div
          style={{
            height: '70vh',
            borderRadius: '10px',
            marginTop: '-72vh',
            marginLeft: '70vw',
          }}
        >
          <h1>Works with any diet:</h1>
          <div style={{ display: 'flex', fontSize: '24px', fontWeight: '100' }}>
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '1.3vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '1.3vh' }}>Vegetarian</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-1.5vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-1.5vh' }}>Vegan</p>
          </div>
          <div style={{ display: 'flex', fontSize: '24px', fontWeight: '100' }}>
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-2vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-2vh' }}>Pescatarian</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-2vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-2vh' }}>Gluten-free</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-1.5vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-1.5vh' }}>Lactose-free</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-2vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-2vh' }}>Keto</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-2vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-2vh' }}>Paleo</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-2vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-2vh' }}>Low FODMAP</p>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: '100',
            }}
          >
            <h3
              style={{
                color: 'orange',
                marginRight: '2vw',
                marginTop: '-2vh',
              }}
            >
              <FaCheck />
            </h3>
            <p style={{ marginTop: '-2vh' }}>Kid-friendly</p>
          </div>
        </div>

        <h3
          style={{
            color: 'orange',
            textAlign: 'center',
            marginTop: '10vh',
            marginBottom: '5vh',
          }}
        >
          See all recipes &rarr;
        </h3>
      </div>

      <div style={{ backgroundColor: '#fdf2e9', height: '800px' }}></div>
    </div>
  );
};
export default Header;
