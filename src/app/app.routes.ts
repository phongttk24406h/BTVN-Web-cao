import { Routes } from '@angular/router';
import { Bai13Component } from './bai13-component/bai13-component';
import { Bai13Detail } from './bai13-detail/bai13-detail';

export const routes: Routes = [
  {
    path: 'bai13-component',
    component: Bai13Component
  },

  {
    path: 'bai13-component/:id',
    component: Bai13Detail
  }
];