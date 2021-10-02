import React from 'react';
import './style.css';
import {
  FaFire,
  FaCheck,
  FaTimes,
  FaUtensilSpoon,
  FaStar,
  FaInfinity,
  FaApple,
  FaLeaf,
  FaPause,
  FaPlay,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

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

      <div
        style={{
          backgroundColor: '#fdf2e9',
          height: '1800px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ color: 'orange', marginLeft: '7vw', paddingTop: '15vh' }}>
          TESTIMONIALS
        </h3>
        <h1
          style={{
            marginLeft: '7vw',
            marginTop: '-3vh',
            fontSize: '50px',
            fontWeight: '1000',
          }}
        >
          Once you try it, you can't go
        </h1>
        <h1
          style={{
            marginLeft: '7vw',
            marginTop: '-3vh',
            fontSize: '50px',
            fontWeight: '1000',
          }}
        >
          back.
        </h1>

        <img
          style={{
            width: '6vw',
            height: '8vh',
            borderRadius: '50%',
            marginLeft: '7vw',
            marginTop: '6vh',
          }}
          src="https://omnifood.dev/img/customers/dave.jpg"
          alt=""
        />
        <h3
          style={{
            width: '20vw',
            marginLeft: '7vw',
            lineHeight: '2',
            fontSize: '23px',
            fontWeight: '120',
          }}
        >
          Inexpensive, healthy and great-tasting meals, without even having to
          order manually! It feels truly magical.
        </h3>
        <h4
          style={{
            width: '20vw',
            marginLeft: '7vw',
            marginTop: '-3vh',
            lineHeight: '2',
            fontSize: '18px',
            fontWeight: '10',
          }}
        >
          — Dave Bryson
        </h4>

        <img
          style={{
            width: '6vw',
            height: '8vh',
            borderRadius: '50%',
            marginLeft: '7vw',
            marginTop: '6vh',
          }}
          src="https://omnifood.dev/img/customers/steve.jpg"
          alt=""
        />
        <h3
          style={{
            width: '20vw',
            marginLeft: '7vw',
            lineHeight: '2',
            fontSize: '23px',
            fontWeight: '120',
          }}
        >
          Omnifood is a life saver! I just started a company, so there's no time
          for cooking. I couldn't live without my daily meals now!
        </h3>
        <h4
          style={{
            width: '20vw',
            marginLeft: '7vw',
            marginTop: '-3vh',
            lineHeight: '2',
            fontSize: '18px',
            fontWeight: '10',
          }}
        >
          — Steve Miller
        </h4>
        <img
          style={{
            width: '6vw',
            height: '8vh',
            borderRadius: '50%',
            marginLeft: '33vw',
            marginTop: '-93vh',
          }}
          src="https://omnifood.dev/img/customers/ben.jpg"
          alt=""
        />

        <h3
          style={{
            width: '20vw',
            lineHeight: '2',
            fontSize: '23px',
            fontWeight: '120',
            marginLeft: '33vw',
          }}
        >
          The AI algorithm is crazy good, it chooses the right meals for me
          every time. It's amazing not to worry about food anymore!
        </h3>
        <h4
          style={{
            width: '20vw',
            lineHeight: '2',
            fontSize: '23px',
            fontWeight: '120',
            marginLeft: '33vw',
            marginTop: '-2vh',
          }}
        >
          — Ben Hadley
        </h4>

        <img
          style={{
            width: '6vw',
            height: '8vh',
            borderRadius: '50%',
            marginLeft: '33vw',
            marginTop: '3vh',
          }}
          src="https://omnifood.dev/img/customers/hannah.jpg"
          alt=""
        />
        <h3
          style={{
            width: '20vw',
            lineHeight: '2',
            fontSize: '23px',
            fontWeight: '120',
            marginLeft: '33vw',
          }}
        >
          I got Omnifood for the whole family, and it frees up so much time!
          Plus, everything is organic and vegan and without plastic.
        </h3>
        <h4
          style={{
            width: '20vw',
            marginTop: '-3vh',
            lineHeight: '2',
            fontSize: '18px',
            fontWeight: '10',
            marginLeft: '33vw',
          }}
        >
          — Hannah Smith
        </h4>

        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-133vh',
            marginLeft: '59vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-1.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '72vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-2.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '85vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-3.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '3vh',
            marginLeft: '59vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-4.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '72vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-5.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '85vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-6.jpg"
          alt=""
        />

        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '3vh',
            marginLeft: '59vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-7.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '72vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-8.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '85vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-9.jpg"
          alt=""
        />

        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '3vh',
            marginLeft: '59vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-10.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '72vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-11.jpg"
          alt=""
        />
        <img
          style={{
            height: '28vh',
            width: '12vw',
            marginTop: '-28vh',
            marginLeft: '85vw',
          }}
          src="https://omnifood.dev/img/gallery/gallery-12.jpg"
          alt=""
        />
      </div>
      <div
        style={{ backgroundColor: 'white', height: '1000px', width: '100%' }}
      >
        <h3
          style={{
            marginTop: '-90vh',
            paddingTop: '10vh',
            marginLeft: '10vw',
            color: 'orange',
          }}
        >
          PRICING
        </h3>
        <h1
          style={{
            marginLeft: '10vw',
            fontWeight: '1000',
            fontSize: '50px',
            marginTop: '-3vh',
          }}
        >
          Eating well without breaking the bank
        </h1>

        <div
          style={{
            boxShadow: '0 0 1px 1px pink',
            marginTop: '20vh',
            marginLeft: '20vw',
            height: '70vh',
            width: '22vw',
            display: 'flex',
            borderRadius: '10px',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontWeight: '1000',
              fontSize: '20px',
              marginTop: '8vh',
              marginLeft: '8vw',
              color: '#cf711f',
            }}
          >
            STARTER
          </p>
          <div
            style={{ display: 'flex', marginTop: '13vh', marginLeft: '-7vw' }}
          >
            <h1>$ </h1>
            <h1
              style={{
                fontSize: '60px',
                marginTop: '-0.3vh',
                marginLeft: '1vw',
              }}
            >
              399
            </h1>
          </div>
          <p
            style={{
              fontSize: '14px',
              marginTop: '24vh',
              width: '18vw',
              marginLeft: '-12vw',
            }}
          >
            per month. That's just $13 per meal!
          </p>
          <div>
            <h2
              style={{
                color: 'orange',
                marginTop: '33vh',
                marginLeft: '-18vw',
              }}
            >
              <FaCheck />
            </h2>
            <p
              style={{
                marginTop: '-6.6vh',
                marginLeft: '-15vw',
                fontSize: '100',
                fontSize: '18px',
              }}
            >
              1 meal per day
            </p>
          </div>
          <div>
            <h2
              style={{
                color: 'orange',
                marginTop: '39vh',
                marginLeft: '-18vw',
              }}
            >
              <FaCheck />
            </h2>
            <p
              style={{
                marginTop: '-6.6vh',
                marginLeft: '-15vw',
                fontSize: '100',
                fontSize: '18px',
              }}
            >
              Order from 11am to 9pm
            </p>
          </div>
          <div>
            <h2
              style={{
                color: 'orange',
                marginTop: '45vh',
                marginLeft: '-18vw',
              }}
            >
              <FaCheck />
            </h2>
            <p
              style={{
                marginTop: '-6.6vh',
                marginLeft: '-15vw',
                fontSize: '100',
                fontSize: '18px',
              }}
            >
              Delivery is free
            </p>
          </div>
          <div>
            <h2
              style={{
                color: 'orange',
                marginTop: '51vh',
                marginLeft: '-18vw',
              }}
            >
              <FaTimes />
            </h2>
          </div>
          <button
            style={{
              backgroundColor: 'orange',
              marginTop: '60vh',
              marginLeft: '-16vw',
              height: '6vh',
              borderRadius: '10px',
              color: 'white',
              fontSize: '24px',
            }}
          >
            Start eating well
          </button>
        </div>
      </div>
      <div
        style={{
          boxShadow: '0 0 1px 1px pink',
          marginTop: '-92vh',
          marginLeft: '50vw',
          height: '70vh',
          width: '22vw',
          backgroundColor: '#fdf2e9',
          borderRadius: '10px',
        }}
      >
        <h3
          style={{
            color: '#cf711f',
            fontSize: '20px',
            marginTop: '-4vh',
            marginLeft: '6vw',
            paddingTop: '8vh',
          }}
        >
          COMPLETE
        </h3>

        <div style={{ display: 'flex', marginTop: '2vh', marginLeft: '5vw' }}>
          <h1>$ </h1>
          <h1
            style={{
              fontSize: '60px',
              marginTop: '-0.3vh',
              marginLeft: '1vw',
            }}
          >
            649
          </h1>
        </div>
        <p
          style={{
            fontSize: '14px',
            marginTop: '-4.7vh',
            width: '18vw',
            marginLeft: '4vw',
          }}
        >
          per month. That's just $11 per meal!
        </p>
        <div>
          <h2
            style={{
              color: 'orange',
              marginTop: '6vh',
              marginLeft: '4vw',
            }}
          >
            <FaCheck />
          </h2>
          <p
            style={{
              marginTop: '-6.6vh',
              marginLeft: '7vw',
              fontSize: '100',
              fontSize: '18px',
            }}
          >
            2 meals per day
          </p>
        </div>
        <div>
          <h2
            style={{
              color: 'orange',
              marginTop: '2vh',
              marginLeft: '4vw',
            }}
          >
            <FaCheck />
          </h2>
          <p
            style={{
              marginTop: '-6.6vh',
              marginLeft: '7vw',
              fontSize: '100',
              fontSize: '18px',
            }}
          >
            Order 24/7
          </p>
        </div>
        <div>
          <h2
            style={{
              color: 'orange',
              marginTop: '2vh',
              marginLeft: '4vw',
            }}
          >
            <FaCheck />
          </h2>
          <p
            style={{
              marginTop: '-6.6vh',
              marginLeft: '7vw',
              fontSize: '100',
              fontSize: '18px',
            }}
          >
            Delivery is free
          </p>
        </div>
        <div>
          <h2
            style={{
              color: 'orange',
              marginTop: '2vh',
              marginLeft: '4vw',
            }}
          >
            <FaCheck />
          </h2>
          <p
            style={{
              marginTop: '-6.6vh',
              marginLeft: '7vw',
              fontSize: '100',
              fontSize: '18px',
            }}
          >
            Get access to latest recipes
          </p>
        </div>
        <button
          style={{
            backgroundColor: 'orange',
            marginTop: '7vh',
            marginLeft: '6vw',
            height: '6vh',
            borderRadius: '10px',
            color: 'white',
            fontSize: '24px',
          }}
        >
          Start eating well
        </button>
      </div>
      <p style={{ marginTop: '9vh', marginLeft: '25vw' }}>
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>

      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '8vw' }}>
          <h1 style={{ color: 'orange', marginTop: '10vh' }}>
            <FaInfinity />
          </h1>
          <h1 style={{ fontSize: '25px' }}>Never cook again!</h1>
          <p style={{ width: '15vw', fontWeight: '400', lineHeight: '1.7' }}>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>

        <div style={{ marginLeft: '8vw' }}>
          <h1 style={{ color: 'orange', marginTop: '10vh' }}>
            <FaApple />
          </h1>
          <h1 style={{ fontSize: '25px' }}>Local and organic</h1>
          <p style={{ width: '15vw', fontWeight: '400', lineHeight: '1.7' }}>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div style={{ marginLeft: '8vw' }}>
          <h1 style={{ color: 'orange', marginTop: '10vh' }}>
            <FaLeaf />
          </h1>
          <h1 style={{ fontSize: '25px' }}>No waste</h1>
          <p style={{ width: '15vw', fontWeight: '400', lineHeight: '1.7' }}>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div style={{ marginLeft: '8vw' }}>
          <h1 style={{ color: 'orange', marginTop: '10vh' }}>
            <FaPause />
          </h1>
          <h1 style={{ fontSize: '25px' }}>Pause anytime</h1>
          <p style={{ width: '15vw', fontWeight: '400', lineHeight: '1.7' }}>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
      <div
        style={{
          boxShadow: '0 0 1px 1px pink',
          height: '60vh',
          width: '70vw',
          marginTop: '20vh',
          marginLeft: '14vw',
          backgroundColor: '#e67e22',
          borderRadius: '10px',
        }}
      >
        <div>
          <img
            style={{ height: '60vh', width: '25vw', marginLeft: '45vw' }}
            src="https://omnifood.dev/img/eating.jpg"
            alt=""
          />
        </div>
        <div style={{ marginLeft: '3vw', marginTop: '-58vh' }}>
          <h1
            style={{
              marginTop: '3vh',
              fontSize: '45px',
              fontWeight: '1000',
              color: '#45260a',
            }}
          >
            Get your first meal for free!
          </h1>
          <p
            style={{
              width: '40vw',
              fontSize: '20px',
              lineHeight: '1.8',
              fontWeight: '500',
            }}
          >
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
        </div>
        <div style={{ marginLeft: '3vw', marginTop: '3vh' }}>
          <h3>Full Name</h3>
          <input
            style={{
              width: '17vw',
              height: '5vh',
              borderRadius: '10px',
              marginTop: '-6vh',
              fontSize: '18px',
            }}
            type="text"
            placeholder="John Smith"
          />
          <div>
            <h3>Where did you hear from us?</h3>
            <select
              style={{
                width: '17vw',
                height: '5vh',
                borderRadius: '10px',
                marginTop: '-6vh',
                fontSize: '16px',
                paddingTop: '2vh',
                paddingBottom: '-2vh',
              }}
              name=""
              id=""
            >
              <option value="">Please choose one option</option>
              <option value="">Friends and family</option>
              <option value="">Youtube video</option>
              <option value="">Podcast</option>
              <option value="">Facebook and</option>
              <option value="">Others</option>
            </select>
            <div style={{ marginLeft: '21vw', marginTop: '-22.2vh' }}>
              <h3>Email address</h3>
              <input
                style={{
                  width: '17vw',
                  height: '5vh',
                  borderRadius: '10px',
                  marginTop: '-6vh',
                  fontSize: '18px',
                }}
                type="text"
                placeholder="Me@example.com"
              />
            </div>
            <button
              style={{
                backgroundColor: '#45260a',
                color: 'white',
                fontWeight: '1000',
                fontSize: '20px',
                width: '20vw',
                borderRadius: '10px',
                marginTop: '5.5vh',
                marginLeft: '20vw',
                paddingTop: '10px',
                border: '1px silver',
              }}
            >
              Sign up now
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '25vh',
          marginLeft: '11vw',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div>
          <img
            style={{ height: '3vh' }}
            src="https://omnifood.dev/img/omnifood-logo.png"
            alt=""
          />
          <div style={{ display: 'flex' }}>
            <h3>
              <FaInstagram />
            </h3>
            <h3 style={{ marginLeft: '2vw' }}>
              <FaFacebook />
            </h3>
            <h3 style={{ marginLeft: '2vw' }}>
              <FaTwitter />
            </h3>
            <p
              style={{
                marginTop: '15vh',
                width: '18vw',
                marginLeft: '-8vw',
                fontSize: '14px',
              }}
            >
              Copyright © 2021 by Omnifood, Inc. All rights reserved.
            </p>
          </div>
        </div>

        <div style={{ marginLeft: '8vw' }}>
          <h2 style={{ marginTop: '-0.5vh' }}>Contact us</h2>

          <p style={{ width: '13vw', marginTop: '7vh' }}>
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </p>
          <p style={{ marginTop: '4vh' }}>415-201-6370</p>
          <p style={{ marginTop: '-2vh' }}>hello@omnifood.com</p>
        </div>
        <div style={{ marginLeft: '4vw' }}>
          <h2 style={{ marginTop: '-0.5vh' }}>Account</h2>
          <p style={{ marginTop: '7vh' }}>Create Account</p>
          <p style={{ marginTop: '2vh' }}>Sign in</p>
          <p style={{ marginTop: '2vh' }}>IOS app</p>
          <p style={{ marginTop: '2vh' }}>Android app</p>
        </div>
        <div style={{ marginLeft: '4vw' }}>
          <h2 style={{ marginTop: '-0.5vh' }}>Company</h2>
          <p style={{ marginTop: '7vh' }}>About Omnifood</p>
          <p style={{ marginTop: '2vh' }}>For Business</p>
          <p style={{ marginTop: '2vh' }}>Cooking Partners</p>
          <p style={{ marginTop: '2vh' }}>Careers</p>
        </div>
        <div style={{ marginLeft: '4vw' }}>
          <h2 style={{ marginTop: '-0.5vh' }}>Resources</h2>
          <p style={{ marginTop: '7vh' }}>Recipe directory</p>
          <p style={{ marginTop: '2vh' }}>Help center</p>
          <p style={{ marginTop: '2vh' }}>Privacy & Terms</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
