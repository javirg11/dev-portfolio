import { Routes } from '@angular/router';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormationComponent } from './pages/formation/formation.component';
import { WorkComponent } from './pages/work/work.component';
import { SentimentChatComponent } from './projects/sentiment-chat/sentiment-chat.component';
import { TitlesComponent } from './titles/titles.component';

export const routes: Routes = [
    { path: '', component: FirstScreenComponent },
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent },
    { path: 'formation', component: FormationComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects/sentiment-chat', component: SentimentChatComponent },
    { path: 'titles', component: TitlesComponent },
];
