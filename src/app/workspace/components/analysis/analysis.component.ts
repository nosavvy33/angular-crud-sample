import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/modules/shared/services/clients.service';

@Component({
  selector: 'analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  clientsData: Client[];

  ready = false;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Frecuencia de personas'
        },
        ticks: {
          min: 0
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Rango de edades'
        },
      }]
    }
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';

  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[]

  constructor(public clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.list().subscribe(_ => {
      this.clientsData = _.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Client;
      });
      this.barChartLabels = ['Menores de 18 años', 'Mayores de 18 años']

      this.barChartData = [
        {
          label: 'Frecuencia de personas',
          data: [
            this.clientsData.filter(x => x.edad < 18).length,
            this.clientsData.filter(x => x.edad >= 18).length
          ],

        }
      ];
      this.ready = true;
    });
  }
}
