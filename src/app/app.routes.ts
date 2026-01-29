import { Routes } from '@angular/router';
import { Home } from '@features/home/home';
import { Copywriting } from '@features/copywriting/copywriting';
import { Seo } from '@features/seo/seo';
import { Strategy } from '@features/strategy/strategy';
import { Web } from '@features/web/web';
import { Admin } from '@features/admin/admin';
import { ADMIN_ROUTES } from '@features/admin/routes/admin.routes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'copywriting', component: Copywriting },
  { path: 'seo', component: Seo },
  { path: 'strategy', component: Strategy },
  { path: 'web', component: Web },
  { 
    path: 'admin', 
    component: Admin,
    children: ADMIN_ROUTES
  }
];