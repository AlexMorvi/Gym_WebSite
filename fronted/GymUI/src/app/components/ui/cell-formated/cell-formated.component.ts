import { Component, Input, OnInit } from '@angular/core';
import { formatContent } from '../../../utils/formatContent';

@Component({
  selector: 'app-cell-formated',
  standalone: true,
  imports: [],
  templateUrl: './cell-formated.component.html',
  styleUrl: './cell-formated.component.css'
})
export class CellFormatedComponent implements OnInit {
  @Input() column?: string;
  @Input() contenido?: any;


  ngOnInit(): void {
    if (this.column && this.contenido !== undefined) {
      this.contenido = formatContent(this.column, this.contenido);
    }
  }


}
