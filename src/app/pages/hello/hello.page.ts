import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  constructor( private navCtrl:NavController,) { }

  ngOnInit() {
  }
  gotoHome()
  {
    this.navCtrl.navigateForward("/home");
  }
  gotoHomeA()
  {
    this.navCtrl.navigateForward("/home-a");

  }

}
