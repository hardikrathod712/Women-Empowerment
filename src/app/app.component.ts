import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choice: string = "Home"; 

  title = 'Ministry of Women & Child Development';

  changeTitle() {
    if(this.choice = "Home"){
      this.title = 'Ministry of Women & Child Development';
    }else if(this.choice = "STEP"){
      this.choice = "Support to Training & Employment Programme for Women";
    } else {
      this.choice = "Non Governmental Organizations";
    }
  }
}
