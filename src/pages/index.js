// * * * IMPORTS * * *
import '../pages/index.css'; // connecting the font table

// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Particles.js
import Particles from 'particlesjs/dist/particles.min.js';

// Constants
import { configSwiperSlider, selectors } from '../utils/constants.js';

// * * * CONSTS AND FUNCTIONS * * *

const pluginParticles = Particles.__proto__.constructor; // constructor function for creating a library object Particles
const particles = {}; // object Particles
const elementsParticles = document.querySelectorAll(selectors.particles); // all elements Particles

// * * * MAIN CODE * * *

new Swiper(selectors.slider, configSwiperSlider);

window.onload = function () {
  elementsParticles.forEach(element => {
    const newParticles = new pluginParticles();
    newParticles.init({
      selector: `#${element.id}`,
      color: element.dataset.color
    });
    particles[element.id] = newParticles;
  });
};

