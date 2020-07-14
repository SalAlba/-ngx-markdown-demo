import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { label: 'Home', icon: 'get-started' },
  },
  {
    path: 'postes',
    loadChildren: () => import('./modules/postes/postes.module').then(m => m.PostesModule),
    data: { label: 'Postes', icon: 'cheat-sheet' },
  },
  // {
  //   path: 'get-started',
  //   loadChildren: () => import('./modules/get-started/get-started.module').then(m => m.GetStartedModule),
  //   data: { label: 'Get Started', icon: 'get-started' },
  // },
  // {
  //   path: 'cheat-sheet',
  //   loadChildren: () => import('./modules/cheat-sheet/cheat-sheet.module').then(m => m.CheatSheetModule),
  //   data: { label: 'Cheat Sheet', icon: 'cheat-sheet' },
  // },
  // {
  //   path: 'syntax-highlight',
  //   loadChildren: () => import('./modules/syntax-highlight/syntax-highlight.module').then(m => m.SyntaxHighlightModule),
  //   data: { label: 'Syntax Highlight', icon: 'syntax-highlight' },
  // },
  // {
  //   path: 'bindings',
  //   loadChildren: () => import('./modules/bindings/bindings.module').then(m => m.BindingsModule),
  //   data: { label: 'Bindings', icon: 'bindings' },
  // },
  // {
  //   path: 'plugins',
  //   loadChildren: () => import('./plugins/plugins.module').then(m => m.PluginsModule),
  //   data: { label: 'Plugins', icon: 'plugins' },
  // },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
