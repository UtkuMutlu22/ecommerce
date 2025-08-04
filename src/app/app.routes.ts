import { Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { Home } from './ui/components/home/home';
import { Baskets } from './ui/components/baskets/baskets';
import { Product } from './ui/components/product/product';



export const routes: Routes = [
    
    {
        path: 'admin',
        component: Layout,
        children: [
            {path: 'customer', loadChildren: () => import('../app/admin/customer/customer-module').then(m => m.CustomerModule)},
            {path: 'product', loadChildren: () => import('../app/admin/product/product-module').then(m => m.ProductModule)},
            {path: 'order', loadChildren: () => import('../app/admin/order/order-module').then(m => m.OrderModule)},
            {path: 'dashboard', loadChildren: () => import('./admin/dashboard/dashboard-module').then((m) => m.DashboardModule)},
        ]
    },
      {
        path:'',
       component:Home
    },
    {
        path:'basket',
        component:Baskets
    },
    {
        path:'product',
       component:Product
    }


];
