import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPicturePage } from 'src/app/home/send-picture/send-picture';

@Component({
  selector: 'app-take-picture',
  templateUrl: 'take-picture.html',
})
export class TakePicturePage {
  public modal: HTMLIonModalElement;

  constructor(private modalCntrl: ModalController) {}

  async takePicture(){
    this.modal = await this.modalCntrl.create({
      component: SendPicturePage,
    });

    this.modal.present();
  }

  dismiss(){
    this.modalCntrl.dismiss();
  }

}
