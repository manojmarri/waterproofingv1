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
  toaster = inject(ToastrService)

  openWhatsAppChat(): void {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }

  toast(){
    this.toaster.warning('Available Soon')
  }
}
