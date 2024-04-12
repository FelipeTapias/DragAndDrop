import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.component.html',
  styleUrls: ['./nodo.component.css']
})
export class NodoComponent implements OnInit {
  @Input() title!: string;
  @Input() positionX!: number;
  @Input() positionY!: number;
  squarePosition!: any;
  isDragging = false;
  initialMousePosition = { x: 0, y: 0 };
  flecha: any;

  constructor() { 
    this.squarePosition = { x: this.positionX, y: this.positionY };
    this.flecha = {
      id: '0',
      inicioId: '20',
      finId: '1.1',
      inicioX: 200,
      inicioY: 200,
      finX: 452,
      finY: 27
    };
  }

  ngOnInit(): void {
    this.squarePosition = { x: this.positionX, y: this.positionY };
  }  

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.initialMousePosition.x;
      const deltaY = event.clientY - this.initialMousePosition.y;
      this.squarePosition.x += deltaX;
      this.squarePosition.y += deltaY;
      this.initialMousePosition = { x: event.clientX, y: event.clientY };
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialMousePosition = { x: event.clientX, y: event.clientY };
  }
}
