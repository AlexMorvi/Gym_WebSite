import { Routes } from '@angular/router';
import { RegistrarEntrenadorComponent } from './components/Entrenador/registrar-entrenador/registrar-entrenador.component';
import { ActualizarEntrenadorComponent } from './components/Entrenador/actualizar-entrenador/actualizar-entrenador.component';
import { EliminarEntrenadorComponent } from './components/Entrenador/eliminar-entrenador/eliminar-entrenador.component';
import { AsignarMembresiaComponent } from './components/Membresia/asignar-membresia/asignar-membresia.component';
import { RegistrarClienteComponent } from './components/clientes/registrar-cliente/registrar-cliente.component';
import { HomePageComponent } from '../pages/home/home-page.component';
import { EliminarCleinteComponent } from './components/clientes/eliminar-cleinte/eliminar-cleinte.component';
import { ConsultarEntrenadorComponent } from './components/Entrenador/consultar-entrenador/consultar-entrenador.component';
import { GestionarMembresiaComponent } from './components/Membresia/gestionar-membresia/gestionar-membresia.component';
import { GestionarEntrenamientosComponent } from './components/Entrenamientos/gestionar-entrenamientos/gestionar-entrenamientos.component';
import { RegistrarEntrenaminetoComponent } from './components/Entrenamientos/registrar-entrenamineto/registrar-entrenamineto.component';
import { ConsultarClienteComponent } from './components/clientes/consultar-cliente/consultar-cliente.component';
import { ActualizarClienteComponent } from './components/clientes/actualizar-cliente/actualizar-cliente.component';
import { EliminarEntrenamientosComponent } from './components/Entrenamientos/eliminar-entrenamientos/eliminar-entrenamientos.component';
import { LoginComponent } from '../pages/login/login.component';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: HomePageComponent,
    children: [
      {
        path: 'visualizarClientes',
        component: ConsultarClienteComponent,
        outlet: 'secondary',
      },
      {
        path: 'registrarCliente',
        component: RegistrarClienteComponent,
        outlet: 'secondary',
      },
      {
        path: 'actualizarCliente',
        component: ActualizarClienteComponent,
        outlet: 'secondary',
      },
      {
        path: 'eliminarCliente',
        component: EliminarCleinteComponent,
        outlet: 'secondary',
      },
      // entrenadores
      {
        path: 'registrarEntrenador',
        component: RegistrarEntrenadorComponent,
        outlet: 'secondary',
      },
      {
        path: 'visualizarEntrenadores',
        component: ConsultarEntrenadorComponent,
        outlet: 'secondary',
      },
      {
        path: 'actualizarEntrenador',
        component: ActualizarEntrenadorComponent,
        outlet: 'secondary',
      },
      {
        path: 'eliminarEntrenador',
        component: EliminarEntrenadorComponent,
        outlet: 'secondary',
      },
      // membresias
      {
        path: 'asignarMembresia',
        component: AsignarMembresiaComponent,
        outlet: 'secondary',
      },
      {
        path: 'gestionMembresias',
        component: GestionarMembresiaComponent,
        outlet: 'secondary',
      },
      // entrenamientos
      {
        path: 'registrarEntrenamiento',
        component: RegistrarEntrenaminetoComponent,
        outlet: 'secondary',
      },
      {
        path: 'gestiónEntrenamientos',
        component: GestionarEntrenamientosComponent,
        outlet: 'secondary',
      },
      {
        path: 'eliminarEntrenamiento',
        component: EliminarEntrenamientosComponent,
        outlet: 'secondary',
      },
    ],
  },

//   {
//       path: '**',
//       component:

//   }
];
