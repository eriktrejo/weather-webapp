import { h } from './utils/html-util.js'; 

export class App {

    render() {
        const $app = h('div', 'app');
        $app.innerHTML = 'this is a test';
        
        return $app;
    }
}