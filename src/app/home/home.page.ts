import { PhotosPage } from './photos/photos';
import { Component } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { TakePicturePage } from 'src/app/home/take-picture/take-picture';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  public home:any;
  public modal: HTMLIonModalElement;

  constructor(private modalCntrl: ModalController) {
    this.home = PhotosPage;

  }

  public async showSendPhoto(){
    this.modal = await this.modalCntrl.create({
      component: TakePicturePage,
    });

    this.modal.present();
  }
}
