import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-services',
  imports: [Header,Footer],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

}
