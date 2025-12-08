import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  techs: string[];
  role: string;
  year: string;
  demoUrl?: string;
  internalRoute?: string;
  repoUrl?: string;

  // NUEVO: para mostrar candado y explicar por qué no hay demo/código público
  confidential?: boolean;
  confidentialReason?: string;
}

@Component({
  selector: 'app-work',
  imports: [CommonModule, RouterModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  constructor(private router: Router) { }

  projects: Project[] = [
    // 🔹 Tus proyectos originales (NO modificados)
    {
      id: 2,
      title: 'Chat IA para reviews',
      shortDesc: 'Chat que devuelve un sentimiento positivo/negativo a una review.',
      longDesc:
        'Proyecto en el que se entrena un modelo de ML con una base de datos de 15.000 reviews de películas. Se entrena para poder reconocer un sentimiento positivo/negativo con un nivel de confianza. El backend se despliegua en la nube utilizando la versión gratuita de Render.',
      techs: ['Python', 'ML', 'BBDD', 'Cloud'],
      role: 'Diseño y desarrollo del modelo ML, del despliegue y de la interfaz',
      year: '2025',
      internalRoute: '/projects/sentiment-chat',
    },
    {
      id: 3,
      title: 'Buscador de Películas (TESTING)',
      shortDesc: 'Frontend que consume una API pública de películas.',
      longDesc:
        'Aplicación que permite buscar películas, ver detalles básicos y practicar paginación y manejo de errores.',
      techs: ['Angular', 'HTTP Client'],
      role: 'Implementación de lógica de búsqueda y UI',
      year: '2025',
    },
    {
      id: 4,
      title: 'Brick de desarrollo para modelo GIS',
      shortDesc: 'Desarrollo de un GIS.',
      longDesc:
        'Proyecto desarrollado para INDRA en el que se desarrolla un modelo GIS utilizando el motor LuciadRIA. Se trabaja con capa de abstracción y con configuración para que el proyecto sea común a toda la empresa y evitar acoplamientos',
      techs: ['Angular', 'Luciad', 'CSS', 'PrimeNG'],
      role: 'Ingeniero de desarrollo',
      year: '2024-2025',
    },


    {
      id: 5,
      title: 'Detección de niveles de actividad física con IA',
      shortDesc: 'Clasificación de niveles de actividad física a partir de datos de IMUs en pacientes.',
      longDesc:
        'Proyecto de investigación en el que se recopilaron datos mediante IMUs ad hoc colocadas en pacientes, se realizó el procesado y limpieza de las señales y se entrenaron modelos de Machine Learning para detectar distintos niveles de actividad física. Los modelos se utilizaron posteriormente en estudios de fisioterapia con pacientes reales.',
      techs: ['Python', 'Machine Learning', 'Procesamiento de señales', 'Análisis de datos'],
      role: 'Investigación, procesamiento de datos y desarrollo de modelos IA',
      year: '2024',
      confidential: true,
      confidentialReason: 'Se trabaja con datos clínicos de pacientes en un contexto de investigación, por lo que la demo y el código no son públicos.'
    },
    {
      id: 6,
      title: 'Automatización de pruebas médicas con sensores y app móvil',
      shortDesc: 'Plataforma para registrar pruebas médicas con dispositivos ad hoc y visualización web.',
      longDesc:
        'Trabajo en el que se automatizaron pruebas médicas mediante una app móvil conectada a dispositivos ADOC. Los datos se almacenaban en una base de datos central y se consultaban desde una aplicación web con gráficas, representaciones, historial de pruebas y gestión de roles de usuario.',
      techs: ['Aplicación móvil', 'API REST', 'Base de datos', 'Frontend web'],
      role: 'Desarrollo e integración end-to-end',
      year: '2024',
      confidential: true,
      confidentialReason: 'La plataforma maneja información clínica sensible y no dispone de una demo pública.'
    },
    {
      id: 7,
      title: 'SIBA - Correos (2022-2023)',
      shortDesc: 'Arquitectura para la comunicación de buzones inteligentes en la Comunidad de Madrid.',
      longDesc:
        'Development and deployment of an architecture for the communication of smart mailboxes in the Community of Madrid, integrando dispositivos IoT con la infraestructura central de Correos y asegurando la conectividad, monitorización y fiabilidad operativa.',
      techs: ['Arquitectura distribuida', 'IoT', 'APIs', 'Mensajería'],
      role: 'Desarrollo e integración de servicios',
      year: '2022–2023',
      confidential: true,
      confidentialReason: 'La solución forma parte de la infraestructura interna de Correos y no cuenta con demo ni repositorio públicos.'
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
    if (project.internalRoute) {
      // Demo dentro del propio Angular (navegación interna)
      this.router.navigate([project.internalRoute]);
    } else if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else {
      alert('La demo aún no está disponible.');
    }
  }

  onDemoClick(project: Project) {
    if (project.confidential) {
      alert('Este proyecto es confidencial y su demo no es pública.');
      return;
    }

    if (!project.internalRoute && !project.demoUrl) {
      alert('La demo aún no está disponible.');
      return;
    }

    this.openDemo(project);
  }
}
