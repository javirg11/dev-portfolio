import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  techs: string[];
  role: string;
  year: string;
  demoUrl?: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Panel de Estadísticas',
      shortDesc: 'Dashboard web para visualizar métricas en tiempo real.',
      longDesc:
        'Aplicación tipo dashboard que consume datos de una API REST para mostrar métricas, gráficos y tablas filtrables.',
      techs: ['Angular', 'TypeScript', 'REST API'],
      role: 'Desarrollo frontend completo',
      year: '2024',
      demoUrl: 'https://tu-demo-1.vercel.app',
      repoUrl: 'https://github.com/tu-usuario/proyecto-dashboard',
    },
    {
      id: 2,
      title: 'Gestor de Tareas',
      shortDesc: 'App CRUD sencilla para gestionar tareas diarias.',
      longDesc:
        'Proyecto para practicar formularios reactivos, validaciones y manejo de estado en el cliente.',
      techs: ['Angular', 'Reactive Forms'],
      role: 'Diseño y desarrollo de la interfaz',
      year: '2023',
    },
    {
      id: 3,
      title: 'Buscador de Películas',
      shortDesc: 'Frontend que consume una API pública de películas.',
      longDesc:
        'Aplicación que permite buscar películas, ver detalles básicos y practicar paginación y manejo de errores.',
      techs: ['Angular', 'HTTP Client'],
      role: 'Implementación de lógica de búsqueda y UI',
      year: '2023',
    },
    {
      id: 4,
      title: 'Brick de desarrollo para modelo GIS',
      shortDesc: 'Desarrollo de un GIS.',
      longDesc:
        'Proyecto desarrollado para INDRA en el que se desarrolla un modelo GIS utilizando el motor LuciadRIA. Se trabaja con capa de abstracción y con configuración para que el proyecto sea común a toda la empresa y evitar acoplamientos',
      techs: ['Angular', 'Luciad', 'CSS', 'PrimeNG'],
      role: 'Ingeniero de desarrollo',
      year: '2025',
    },
  ];

  selectedProject: Project | null = null;

  openInfo(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // opcional: bloquea scroll
  }

  closeInfo() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  openDemo(project: Project) {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else {
      alert('La demo aún no está disponible.');
    }
  }
}