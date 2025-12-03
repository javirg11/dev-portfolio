import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

type VisitorType = 'recruiter' | 'visitor';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey
    );
  }

  async registerVisit(type: VisitorType) {
    const { error } = await this.supabase
      .from('portfolio_visits')
      .insert({ type });

    if (error) {
      console.error('Error registrando visita:', error);
    }
  }

  async getStats() {
    const { data, error } = await this.supabase
      .from('portfolio_visits')
      .select('type');

    if (error || !data) {
      console.error('Error obteniendo stats:', error);
      return null;
    }

    const total = data.length;
    const recruiters = data.filter((v) => v.type === 'recruiter').length;
    const visitors = total - recruiters;

    return { total, recruiters, visitors };
  }
}
