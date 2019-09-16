import DashboardPage from "views/Dashboard/Dashboard.jsx";

const dashboardRoutes = [{
        path: "/dashboard/:sensorPlaceId",
        component: DashboardPage
    },{
        path: "/dashboard",
        component: DashboardPage
    },{
        redirect: true,
        path: "/",
        to: "/dashboard"
    }
];

export default dashboardRoutes;