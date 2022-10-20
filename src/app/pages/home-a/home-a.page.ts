import { Component, OnInit } from '@angular/core';
import  {ContactData} from '../../modals/interfaces'
import { ToastController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm1 } from './login1.page.form'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.page.html',
  styleUrls: ['./home-a.page.scss'],
})
export class HomeAPage  {

  form1:FormGroup;


  userdata = {} as ContactData;
  constructor(
    private appser:AppService,
    private navCtrl2:NavController,

    public ToastController:ToastController,
    
    private formBuilder1:FormBuilder,

  ) {}
 /* submit()
  {
    this.appser.submitData(this.userdata);

  }
*/
ngOnInit()
{
  this.form1 = new LoginPageForm1(this.formBuilder1).createForm1();
}



async submit()
{
  await    this.appser.submitData(this.userdata);
  const toast = await this.ToastController .create({
    message :"مرحبا بك في عالم منار مول",
    duration:2000,
   position:'top',
   color:'warning',
  });
  toast.present();
}

goHome()
{
  this.navCtrl2.navigateForward("/helloA")

}

}






