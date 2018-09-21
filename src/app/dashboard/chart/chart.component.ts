import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChartComponent implements OnInit {

  @ViewChild(UIChart) uiChart: UIChart;
  @Input() studentsGraphData$: Observable<{ [key: string]: Array<string | number> }>;
  data: any;

  constructor() { }

  ngOnInit() {
    this.studentsGraphData$.subscribe(({ names, quarterly, halfyearly, annual }) => {
      this.data = {
        labels: names,
        datasets: [
          {
            label: 'Quarterly',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: quarterly
          },
          {
            label: 'Halfyearly',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: halfyearly
          },
          {
            label: 'Annual',
            backgroundColor: 'red',
            borderColor: 'red',
            data: annual
          }
        ]
      };
      console.log(this.data);
      this.uiChart.refresh();
    });
  }

}
