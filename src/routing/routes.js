import StartPage from '../StartPage.vue';
import GamePage from '../GamePage.vue';
import SuccessPage from '../SuccessPage.vue';

const startPageRoute = { path: '/', name: 'startPage', component: StartPage };
const gamePageRoute = { path: '/game', name: 'gamePage', component: GamePage };
const successPageRoute = { path: '/success', name: 'successPage', component: SuccessPage };

const routes = [ startPageRoute, gamePageRoute, successPageRoute ];

export { startPageRoute, gamePageRoute, successPageRoute, routes };
