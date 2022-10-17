import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private afauth:AngularFireAuth
  ) {}
  async ngOnInit() {
    await this.afauth.signInAnonymously().then ( result =>
      {
        console.log(result.user.uid);
      })
      .catch(error=>console.log(error));
    
  }
}
