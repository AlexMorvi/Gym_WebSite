export interface NavItem {
  name: string;
  actions?: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'dashboard' },
  {
    name: 'clientes',
    actions: [
      'registrarCliente',
      'actualizarCliente',
      'visualizarClientes',
      'eliminarCliente',
    ],
  },
  {
    name: 'membresias',
    actions: ['asignarMembresia', 'gestionMembresias'],
  },
  {
    name: 'entrenadores',
    actions: [
      'registrarEntrenador',
      'actualizarEntrenador',
      'visualizarEntrenadores',
      'eliminarEntrenador',
    ],
  },
  {
    name: 'entrenamientos',
    actions: ['registrarEntrenamiento', 'gestiónEntrenamientos', 'eliminarEntrenamiento'],
  },
  // {
  //   name: 'horarios',
  //   actions: ['gestionHorarios'],
  // },
];