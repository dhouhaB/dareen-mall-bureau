import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ContactData } from '../modals/interfaces';

import { NavController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form:FormGroup;
  userdata = {} as ContactData;

  constructor(
    
    private appser:AppService,
    private navCtrl1:NavController,
  
    public ToastController:ToastController,
    private formBuilder:FormBuilder,
   
  ) {}
 /* submit()
  {
    this.appser.submitData(this.userdata);

  }
*/


ngOnInit()
{
  this.form = new LoginPageForm(this.formBuilder).createForm();
}




async submit()
{
  await    this.appser.submitData(this.userdata);
  const toast = await this.ToastController .create({
    message:"Welcome to Manar Mall World",
    duration:2000,
   position:'top',
   color:'warning',

  });
  toast.present();
}




goHome()
{
  this.navCtrl1.navigateForward("/hellolink")

}



}
