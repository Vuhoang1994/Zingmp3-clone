// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Zingchart from '~/pages/Zingchart';
import Radio from '~/pages/Radio';
import Thuvien from '~/pages/Thuvien';
import Search from '~/pages/Search';
import Nhacmoi from "~/pages/Nhacmoi";
import Top100 from "~/pages/Top100";
import Chude from "~/pages/Chude";
import Guitar from "~/pages/Guitar"
import LoginForm from "~/pages/LoginForm";
import RegisterForm from "~/pages/RegisterForm";
import Tamtrang from "~/pages/Tamtrang";
import Nhenhang from "~/pages/Nhenhang";

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/zingchart', component: Zingchart },
    { path: '/radio', component: Radio },
    { path: '/thuvien', component: Thuvien },
    { path: '/nhacmoi', component: Nhacmoi },
    { path: '/chude', component: Chude },
    { path: '/top100', component: Top100 },
    { path: '/login', component: LoginForm },
    { path: '/register', component: RegisterForm},
    { path: '/guitar', component: Guitar },
    { path: '/tamtrang', component: Tamtrang },
    { path: '/nhenhang', component: Nhenhang },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
