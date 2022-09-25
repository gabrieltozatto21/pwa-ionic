import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-send-picture',
  templateUrl: 'send-picture.html',
})
export class SendPicturePage {

  constructor(private modalCntrl: ModalController) {}

  dismiss(){
    this.modalCntrl.dismiss();
  }

}
