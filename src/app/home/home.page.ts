import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ContactData } from '../modals/interfaces';


import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userdata = {} as ContactData;

  constructor(
    private appser:AppService,
    public ToastController:ToastController,
   
  ) {}
 /* submit()
  {
    this.appser.submitData(this.userdata);

  }
*/

async submit()
{
  await    this.appser.submitData(this.userdata);
  const toast = await this.ToastController .create({
    message:"Welcome to Manar Mall World",
    duration:2000,
   position:'top',
   color:'danger',
  });
  toast.present();
}


}
