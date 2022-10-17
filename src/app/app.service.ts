import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ContactData } from './modals/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private afs: AngularFirestore
  ) { }
  async submitData(userdata:ContactData)
  {
    const tempdata =userdata;
    tempdata.id = await this.afs.createId();
    await this.afs.collection('submittedData').doc(`${tempdata.id}`).set(tempdata)
    .then (()=>console.log("ok"))
    .catch (e=>console.log('error'));


  }
}
