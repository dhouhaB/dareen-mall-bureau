import { Component, OnInit } from '@angular/core';
import  {ContactData} from '../../modals/interfaces'
import { ToastController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.page.html',
  styleUrls: ['./home-a.page.scss'],
})
export class HomeAPage  {

  userdata = {} as ContactData;

  constructor(
    private appser:AppService,
    public ToastController:ToastController
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
    message:"مرحبا بك في عالم منار مول",
    duration:2000,
   position:'top',
   color:'danger',
  });
  toast.present();
}


}






