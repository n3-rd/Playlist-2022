const Home = () => import('./pages/Home.vue');
const Playlist = () => import('./pages/Playlist.vue');

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/playlist',
        component: Playlist,
    },
];

export default routes;