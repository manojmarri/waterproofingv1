import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  whatsappNumber: string = '9908460521';
  defaultMessage: string = 'Hello';


  openWhatsAppChat(): void {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }
}
