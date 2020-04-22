import { Component } from '@angular/core';
// import { HttpserviceService } from './service/Http.service'
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http2';
  users:string[]

  constructor(private githubService:HttpserviceService){}

  getUsers(){
   
    this.githubService.getData().subscribe((data)=> {
      console.log(data);
      this.users=data
    });
  }
}
