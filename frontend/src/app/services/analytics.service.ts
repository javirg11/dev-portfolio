import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';

type VisitorType = 'recruiter' | 'visitor';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private firestore: Firestore) { }

  async registerVisit(type: VisitorType): Promise<void> {
    const visitsRef = collection(this.firestore, 'visits');
    await addDoc(visitsRef, {
      type,
      createdAt: serverTimestamp(),
    });
  }
}
