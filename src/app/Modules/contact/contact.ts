import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  whatsappNumber: string = '9948227227';
  defaultMessage: string = 'Hello';
  // toaster = inject(ToastrService)

  openWhatsAppChat(): void {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }

  submit(){
    // this.toaster.warning('Please whatsapp us.. Form is in Progress')
  }
}
