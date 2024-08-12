import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  TABLE_STRUCTURE,
  TableStructure,
} from '../../../config/tableStructure.config';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ActionsPipe } from '../../../pipes/actions.pipe';
import { CellFormatedComponent } from '../cell-formated/cell-formated.component';

@Component({
  selector: 'app-tablet-delete',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, ActionsPipe, CellFormatedComponent],
  templateUrl: './tablet-delete.component.html',
  styleUrl: './tablet-delete.component.css',
})
export class TabletDeleteComponent implements OnInit {
  @Input() type: string = '';

  @Input() data: any = [];

  @Output() deleteEvent = new EventEmitter<any>();

  structure?: TableStructure;
  loading: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
    this.structure = TABLE_STRUCTURE.find((table) => table.type === this.type);
    console.log(this.data);
    this.updateLoadingState();
  }

  updateLoadingState(): void {
    setTimeout(() => {
      this.loading = false;
      this.cdRef.detectChanges();
    }, 0);
  }

  isObjectOrArray(value: any): boolean {
    return (
      (typeof value === 'object' && value !== null) ||
      typeof value === 'boolean'
    );
  }

  sendDeleteData(data: any) {
    this.deleteEvent.emit(data);
  }

}
