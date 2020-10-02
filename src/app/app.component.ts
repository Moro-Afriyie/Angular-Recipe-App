import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  LoadedFeature = 'recipe';
  onNavigate(feature: string){
this.LoadedFeature = feature;
  }
}
