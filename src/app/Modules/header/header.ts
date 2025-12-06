import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  navlist = signal<boolean>(true);
  Route = inject(ActivatedRoute)
  Route_Name =''
  
  constructor(){
    const R = this.Route.url.subscribe( (x:any) =>{
      const pathSegments = x.map((y:any) => y.path).join('/');
      // console.log('ActivatedRoute Path Segments:', pathSegments)
      this.Route_Name = pathSegments
    })
  }

  onclick(){
    this.navlist.update(currentValue => !currentValue)
  }

}
