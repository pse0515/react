import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';
import Counter from './ch02/Counter';
import App02_2 from './ch02/App02_2';
import App02_3 from './ch02/App02_3';

const currentApp = "ch02";

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    counter: <Counter />,

}

createRoot(document.getElementById('root')).render(appObj.ch02_3);