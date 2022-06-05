import ToDoImage1 from '../assets/images/Todo-App/todo-App-1.png';
import ToDoImage2 from '../assets/images/Todo-App/todo-App-2.png';
import ToDoImage3 from '../assets/images/Todo-App/todo-App-3.png';
import ToDoImage4 from '../assets/images/Todo-App/todo-App-4.png';
import QuizApp1 from '../assets/images/Quiz-App/Quiz-App.png';
import QuizApp2 from '../assets/images/Quiz-App/Quiz-App-1.png';
import weatherApp1 from '../assets/images/Weather-app/weather-App.png';
import CountriesImg1 from '../assets/images/Rest-countries/Countries-Api-dark.png';
import CountriesImg2 from '../assets/images/Rest-countries/Countries-Api-mob.png';
import CountriesImg3 from '../assets/images/Rest-countries/Countries-Api-tablet.png';
import CountriesImg4 from '../assets/images/Rest-countries/Countries-Api.png';
import Store1 from '../assets/images/store-back-end/store.png';
import Store2 from '../assets/images/store-back-end/schema.png';
import resizingApp1 from '../assets/images/Resizing-images/apiGui.png';
import sunnySide1 from '../assets/images/Sunny-side-landing-page/site-web.png';
import sunnySide2 from '../assets/images/Sunny-side-landing-page/site-mob.png';
import managePage1 from '../assets/images/Manage-landing-page/site-web.png';
import managePage2 from '../assets/images/Manage-landing-page/site-mob.png';
import adviceApp1 from '../assets/images/Advice-generator/image1.png';
import adviceApp2 from '../assets/images/Advice-generator/image2.png';
import roomPage1 from '../assets/images/Room-home-page/image1.png';
import roomPage2 from '../assets/images/Room-home-page/image2.png';
import space1 from '../assets/images/Space-website/image1.png';
import space2 from '../assets/images/Space-website/image2.png';
import space3 from '../assets/images/Space-website/image3.png';



const projects = [
    {
        id: 1,
        name: 'TO-DO-LIST',
        category: 'React App',
        description: 'A to-do list application using react and SASS with theme switcher',
        skills: ['React', 'SASS', 'CSS', 'react-beautiful-dnd'],
        images: [ToDoImage1, ToDoImage2, ToDoImage3, ToDoImage4],
        url: {
            code: 'https://github.com/Elbassel511/todo-app',
            live: 'https://6245dbf3a4d1721162d89e8b--dreamy-croquembouche-7cbf83.netlify.app/'
        },
    }, {
        id: 2,
        name: 'Quiz App',
        category: 'React App',
        skills: ['React', 'CSS', 'fetch API'],
        description: 'A simple quiz application using react as a solo project on the end of scrimba react course fetching data from open Trivia DB',
        images: [QuizApp1, QuizApp2],
        url: {
            code: 'https://github.com/Elbassel511/Quiz-App--reactjs'
        }

    }, {
        id: 3,
        name: 'Weather App',
        category: 'API',
        description: 'A weather application using node.js and express.js as a project at Udacity nanodegree',
        skills: ['Node', 'Express', 'CSS', 'fetch API', 'HTML', 'Javascript'],
        images: [weatherApp1],
        url: {
            code: 'https://github.com/Elbassel511/Weather-app-udacity'
        }
    }, {
        id: 4,
        name: 'Rest countries API',
        category: 'API',
        description: 'REST Countries API with color theme switcher using vanilla javascript , HTML and CSS fetching data from restcountries.eu',
        skills: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'fetch API'],
        images: [CountriesImg1, CountriesImg2, CountriesImg3, CountriesImg4],
        url: {
            code: 'https://github.com/Elbassel511/rest-countries-api-with-color-theme-switcher-master',
            live: 'https://elbassel511.github.io/rest-countries-api-with-color-theme-switcher-master/'
        }
    }, {
        id: 5,
        name: 'store-back end',
        category: 'back-end',
        description: "A RESTfull API for online store (UDACITY full-stack developer nano-degree project)",
        skills: ['Node', 'Express', 'PostgreSQL', 'TypeScript', 'Jasmine', 'Javascript'],
        images: [Store1, Store2],
        url: {
            code: 'https://github.com/Elbassel511/store-front-project-udacity'
        }

    }, {
        id: 6,
        name: 'Resizing API',
        category: 'back-end',
        description: "An resizing API that can be used in two different ways,first As a simple placeholder API,sceond as a library to serve properly scaled versions of your images to the front end to reduce page load size.",
        skills: ['Node', 'Express', 'HTML', 'CSS', 'Jasmine', 'Javascript'],
        images: [resizingApp1],
        url: {
            code: 'https://github.com/Elbassel511/image-processing-project-Udacity'
        }
    }, {
        id: 7,
        name: 'sunny side agency landing page',
        category: 'landing-page',
        description: "A responsive landing page for a sunny side agency",
        skills: ['HTML', 'CSS', 'Javascript'],
        images: [sunnySide1, sunnySide2],
        url: {
            code: 'https://github.com/Elbassel511/sunny-side-agancy',
            live: 'https://elbassel511.github.io/sunny-side-agancy/'
        }
    }, {
        id: 8,
        name: 'manage landing page',
        category: 'landing-page',
        description: "A responsive landing page for a manage website ",
        skills: ['HTML', 'CSS', 'Javascript'],
        images: [managePage1, managePage2],
        url: {
            code: 'https://github.com/Elbassel511/manage-landing-page-master',
            live: 'https://elbassel511.github.io/manage-landing-page-master/'
        }
    }, {
        id: 9,
        name: 'advice generator',
        category: 'API',
        description: "advice generator Challenge fetching data from Advice Slip JSON API",
        skills: ['HTML', 'CSS', 'Javascript', 'fetch API'],
        images: [adviceApp1, adviceApp2],
        url: {
            code: 'https://github.com/Elbassel511/advice-generator-app-main',
            live: 'https://elbassel511.github.io/advice-generator-app-main/'
        }
    }, {
        id: 10,
        name: 'Room home page',
        category: 'landing-page',
        description: "A responsive landing page for a room home page ",
        skills: ['HTML', 'CSS', 'Javascript'],
        images: [roomPage1, roomPage2],
        url: {
            code: 'https://github.com/Elbassel511/Room-home-page',
            live: 'https://elbassel511.github.io/Room-home-page/'
        }
    }, {
        id: 11,
        name: 'space tourism website',
        category: 'landing-page',
        description: "A space tourism website",
        skills: ['HTML', 'CSS', 'Javascript'],
        images: [space1, space2, space3],
        url: {
            code: 'https://github.com/Elbassel511/space-tourism-challenge',
            live: 'https://elbassel511.github.io/space-tourism-challenge/'
        }
    }

];

export default projects;