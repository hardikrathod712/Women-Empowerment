import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public choice: string = "Home"; 

  public title: string = 'Ministry of Women & Child Development';

  public change(value) {
    this.choice = value;
    this.changeTitle();
  }

  changeTitle() {
    if(this.choice == "Home"){
      this.title = 'Ministry of Women & Child Development';
    }else if(this.choice == "STEP"){
      this.title = "Support to Training & Employment Programme for Women";
    } else {
      this.title = "Non Governmental Organizations";
    }
  }
}
