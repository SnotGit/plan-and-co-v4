import { Routes } from '@angular/router';
import { Home } from 'src/features/home/components/home';
import { Copywriting } from 'src/features/copywriting/components/copywriting';
import { Seo } from 'src/features/seo/components/seo';
import { Strategy } from 'src/features/strategy/components/strategy';
import { Web } from 'src/features/web/components/web';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'copywriting', component: Copywriting },
  { path: 'seo', component: Seo },
  { path: 'strategy', component: Strategy },
  { path: 'web', component: Web }
];