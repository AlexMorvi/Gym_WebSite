import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  TABLE_STRUCTURE,
  TableStructure,
} from '../../../config/tableStructure.config';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ActionsPipe } from '../../../pipes/actions.pipe';
import { CellFormatedComponent } from '../cell-formated/cell-formated.component';

@Component({
  selector: 'app-tablet-update',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, ActionsPipe, CellFormatedComponent],
  templateUrl: './tablet-update.component.html',
  styleUrl: './tablet-update.component.css',
})
export class TabletUpdateComponent implements OnInit {
  @Input() type: string = '';

  @Input() data: any = [];

  @Output() rowEvent = new EventEmitter<any>();

  structure?: TableStructure;
  loading: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.loading
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

  onRowClick(row: any) {
    this.rowEvent.emit(row);
  }
}
