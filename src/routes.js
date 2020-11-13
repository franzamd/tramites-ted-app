import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import MyProfile from 'src/views/account/AccountView/MyProfile';
import CustomerListView from 'src/views/customer/CustomerListView';
import UsersListView from 'src/views/user/UserListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import AreaListView from 'src/views/area/AreaListView';
// import ProductListView from 'src/views/product/ProductListView';
import ProcessListView from 'src/views/process/ProcessListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import ProcessView from 'src/views/process/ProcessView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'profile', element: <MyProfile /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'users', element: <UsersListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'areas', element: <AreaListView /> },
      { path: 'processes', element: <ProcessListView /> },
      // { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'processes/process', element: <ProcessView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
