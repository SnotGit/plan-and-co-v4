import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../admin-home/admin-home').then(m => m.AdminHome)
  },
  {
    path: 'mots-cles',
    loadComponent: () => import('../keywords/keywords').then(m => m.Keywords)
  },
  {
    path: 'analytics',
    loadComponent: () => import('../analytics/analytics').then(m => m.Analytics)
  },
  {
    path: 'notifications',
    loadComponent: () => import('../alerts/alerts').then(m => m.Alerts)
  },
  {
    path: 'blog/editeur',
    loadComponent: () => import('../blog/blog-editor/blog-editor').then(m => m.BlogEditor)
  },
  {
    path: 'blog/brouillons',
    loadComponent: () => import('../blog/drafts/drafts').then(m => m.Drafts)
  },
  {
    path: 'blog/publies',
    loadComponent: () => import('../blog/published/published').then(m => m.Published)
  },
  {
    path: 'parametres',
    loadComponent: () => import('../settings/settings').then(m => m.Settings)
  }
];