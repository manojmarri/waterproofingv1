import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-aboutwork',
  imports: [Header,Footer],
  templateUrl: './aboutwork.html',
  styleUrl: './aboutwork.scss',
})
export class Aboutwork {
 
}
