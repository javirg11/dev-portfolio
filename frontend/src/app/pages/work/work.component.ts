import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SentimentChatService } from '../../services/sentiment-chat.service';

interface Project {
  id: number;
  titleKey: string;
  shortDescKey: string;
  longDescKey: string;
  roleKey: string;
  techs: string[];
  year: string;
  demoUrl?: string;
  internalRoute?: string;
  repoUrl?: string;
  confidential?: boolean;
  confidentialReasonKey?: string;
}

@Component({
  selector: 'app-work',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  constructor(
    private router: Router,
    private translate: TranslateService,
    private sentimentService: SentimentChatService
  ) { }

  projects: Project[] = [
    {
      id: 2,
      titleKey: 'work.projects.p2.title',
      shortDescKey: 'work.projects.p2.short',
      longDescKey: 'work.projects.p2.long',
      roleKey: 'work.projects.p2.role',
      techs: ['Python', 'ML', 'BBDD', 'Cloud'],
      year: '2025',
      internalRoute: '/projects/sentiment-chat'
    },
    {
      id: 3,
      titleKey: 'work.projects.p3.title',
      shortDescKey: 'work.projects.p3.short',
      longDescKey: 'work.projects.p3.long',
      roleKey: 'work.projects.p3.role',
      techs: ['JavaScript', 'HTTP Client'],
      year: '2025'
    },
    {
      id: 4,
      titleKey: 'work.projects.p4.title',
      shortDescKey: 'work.projects.p4.short',
      longDescKey: 'work.projects.p4.long',
      roleKey: 'work.projects.p4.role',
      techs: ['JavaScript', 'Luciad', 'CSS', 'PrimeNG'],
      year: '2024–2025'
    },
    {
      id: 5,
      titleKey: 'work.projects.p5.title',
      shortDescKey: 'work.projects.p5.short',
      longDescKey: 'work.projects.p5.long',
      roleKey: 'work.projects.p5.role',
      techs: ['Python', 'Machine Learning', 'Procesamiento de señales', 'Análisis de datos'],
      year: '2024',
      confidential: true,
      confidentialReasonKey: 'work.projects.p5.confidentialReason'
    },
    {
      id: 6,
      titleKey: 'work.projects.p6.title',
      shortDescKey: 'work.projects.p6.short',
      longDescKey: 'work.projects.p6.long',
      roleKey: 'work.projects.p6.role',
      techs: ['Aplicación móvil', 'API REST', 'Base de datos', 'Frontend web'],
      year: '2024',
      confidential: true,
      confidentialReasonKey: 'work.projects.p6.confidentialReason'
    },
    {
      id: 7,
      titleKey: 'work.projects.p7.title',
      shortDescKey: 'work.projects.p7.short',
      longDescKey: 'work.projects.p7.long',
      roleKey: 'work.projects.p7.role',
      techs: ['Arquitectura distribuida', 'AWS', 'IoT', 'APIs', 'Mensajería'],
      year: '2022–2023',
      confidential: true,
      confidentialReasonKey: 'work.projects.p7.confidentialReason'
    }
  ];

  selectedProject: Project | null = null;

  openInfo(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeInfo() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  openDemo(project: Project) {
    if (project.internalRoute) {
      this.router.navigate([project.internalRoute]);
    } else if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else {
      alert(this.translate.instant('work.alerts.demoNotAvailable'));
    }
  }

  onDemoClick(project: Project) {
    if (project.id === 2) {
      this.sentimentService.analyze('Test')
    }
    if (project.confidential) {
      alert(this.translate.instant('work.alerts.confidential'));
      return;
    }

    if (!project.internalRoute && !project.demoUrl) {
      alert(this.translate.instant('work.alerts.demoNotAvailable'));
      return;
    }

    this.openDemo(project);
  }
}
