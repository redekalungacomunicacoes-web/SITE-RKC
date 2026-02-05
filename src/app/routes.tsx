import { createBrowserRouter, redirect } from 'react-router-dom';
import { RootLayout } from '@/app/layouts/RootLayout';
import { supabase } from '@/lib/supabase';
import { Home } from '@/app/pages/Home';
import { QuemSomos } from '@/app/pages/QuemSomos';
import { Projetos } from '@/app/pages/Projetos';
import { ProjetoDetalhes } from '@/app/pages/ProjetoDetalhes';
import { Materias } from '@/app/pages/Materias';
import { MateriaDetalhes } from '@/app/pages/MateriaDetalhes';
import { Newsletter } from '@/app/pages/Newsletter';
import { Contato } from '@/app/pages/Contato';
import { NotFound } from '@/app/pages/NotFound';

// Admin Imports
import { AdminLayout } from '@/app/layouts/AdminLayout';
import { Dashboard } from '@/app/pages/admin/Dashboard';
import { AdminMaterias } from '@/app/pages/admin/AdminMaterias';
import { AdminProjetos } from '@/app/pages/admin/AdminProjetos';
import { AdminLogin } from '@/app/pages/admin/AdminLogin';
import { AdminMateriaForm } from '@/app/pages/admin/AdminMateriaForm';
import { AdminProjetoForm } from '@/app/pages/admin/AdminProjetoForm';
import { AdminUsuarios } from '@/app/pages/admin/AdminUsuarios';
import { AdminConfiguracoes } from '@/app/pages/admin/AdminConfiguracoes';

export const router = createBrowserRouter([
  {
    path: '/admin',
    children: [
      {
        path: 'login',
        Component: AdminLogin,
      },
      {
        path: '',
        loader: async () => {
          const { data } = await supabase.auth.getSession();
          if (!data.session) throw redirect('/admin/login');
          return null;
        },
        Component: AdminLayout,
        children: [
          { index: true, Component: Dashboard },
          { path: 'materias', Component: AdminMaterias },
          { path: 'materias/nova', Component: AdminMateriaForm },
          { path: 'materias/editar/:id', Component: AdminMateriaForm },
          { path: 'projetos', Component: AdminProjetos },
          { path: 'projetos/novo', Component: AdminProjetoForm },
          { path: 'projetos/editar/:id', Component: AdminProjetoForm },
          { path: 'usuarios', Component: AdminUsuarios },
          { path: 'configuracoes', Component: AdminConfiguracoes },
        ],
      },
    ],
  },
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'quem-somos', Component: QuemSomos },
      { path: 'projetos', Component: Projetos },
      { path: 'projetos/:id', Component: ProjetoDetalhes },
      { path: 'materias', Component: Materias },
      { path: 'materias/:id', Component: MateriaDetalhes },
      { path: 'newsletter', Component: Newsletter },
      { path: 'contato', Component: Contato },
      { path: '*', Component: NotFound },
    ],
  },
]);
