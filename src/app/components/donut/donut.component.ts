import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartData, ChartEvent, ChartType} from 'chart.js';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',

})
export class DonutComponent {

  @Input() title: string = 'Sin titulo';

  @Output() emitTitle: EventEmitter<string> = new EventEmitter();

  @Input('labels') doughnutChartLabels: string[] = [
    'Label-1',
    'Label-2',
    'Label-3',
  ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      },

    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  onChange(newTitle: any) {
    if (newTitle = 'Ventas'){
      this.title = newTitle;
    } else {
      this.title;
    }
    this.emitTitle.emit(this.title);
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
