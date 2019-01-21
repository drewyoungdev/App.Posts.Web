import { Injectable } from '@angular/core';
import { SnotifyService, SnotifyToastConfig, SnotifyPosition } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snotifyService: SnotifyService) { }

  private getConfig(): SnotifyToastConfig { 
    return {
      timeout: 5000,
      // timeout: 0,
      showProgressBar: false,
      closeOnClick: false,
      position: SnotifyPosition.centerBottom,
      buttons: [
        { text: 'Close', action: (toast) => { this.snotifyService.remove(toast.id); }, bold: true },
      ]
    };
  }

  public info(body: string) {
    this.snotifyService.info(body, this.getConfig());
  }

  public undo(body: string, callback: () => void) {
    var config = this.getConfig();

    config.buttons.unshift({ 
      text: 'Undo', 
      action: (toast) => {
        callback();
        this.snotifyService.remove(toast.id); 
      },
      bold: true 
    });
    
    this.snotifyService.info(body, config);
  }

  public warning(body: string) {
    this.snotifyService.warning(body, this.getConfig());
  }

  public error(body: string) {
    this.snotifyService.error(body, this.getConfig());
  }
}
