import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Shop from "~/pages/Shop";
import { NoSideBar } from "~/components/Layout";

const publicRoutes = [
    {path: '/', component: Home, layout: NoSideBar},
    {path: '/shop', component: Shop},
    {path: '/following', component: Following},
    {path: '/@:nickname', component: Profile},
    {path: '/upload', component: Upload, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }