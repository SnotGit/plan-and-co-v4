import { Routes } from '@angular/router';
import { Home } from 'src/features/home/home';
import { Copywriting } from 'src/features/copywriting/copywriting';
import { Seo } from 'src/features/seo/seo';
import { Strategy } from 'src/features/strategy/strategy';
import { Web } from 'src/features/web/web';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'copywriting', component: Copywriting },
  { path: 'seo', component: Seo },
  { path: 'strategy', component: Strategy },
  { path: 'web', component: Web }
];