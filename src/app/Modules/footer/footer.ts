import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  whatsappNumber: string = '9948227227';
  defaultMessage: string = 'Hello';
  // toaster = inject(ToastrService)

  openWhatsAppChat(): void {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }

  openfacebook() {
    const insta ='https://www.facebook.com/share/1HC7iis22K/?mibextid=wwXIfr'
     window.open(insta, '_blank');
  }

  openinsta() {
    const fb = 'https://www.instagram.com/drfixit_waterproofing?igsh=ZHZhdnZleTE4dzlu&utm_source=qr'
    window.open(fb, '_blank');
  }

  toast() {
    // this.toaster.warning('Available Soon')
  }
}
