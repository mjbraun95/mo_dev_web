import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { Store } from 'litsy'

new Store({
    storeName: "mo_dev_web",
    persist: true
})

new Store({
    storeName: "mo_dev_web",
    persist: false
})

ReactDOM.render(Router(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
