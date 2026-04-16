import { Component } from '@angular/core';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar,
   IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonChip, IonLabel, IonList, IonItem, IonButton, } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
     IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, 
     IonIcon, IonChip, IonLabel, IonList, IonItem, IonButton],
})
export class Tab1Page {
  constructor() {}
}
