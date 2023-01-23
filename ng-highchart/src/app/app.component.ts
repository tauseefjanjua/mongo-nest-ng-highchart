import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nghigh';

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  departments: any[] = [];
  count: any[] = [];

  constructor(private dataservice: DataService) { }
  
  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.dataservice.getDepartments().subscribe((data: any) => {
      this.drawDepartments(data);
    });
  }
  submit(department: any, count: any) {
    const obj = {
      department: department.value,
      studentcount: Number(count.value),
    };
    console.log(obj);
    this.dataservice.saveDepartment(obj).subscribe((data: any) => {
      console.log(data);
      this.departments = [];
      this.count = [];
      this.getDepartments();
    });
  }

  drawDepartments(data: any) {
    console.log(data);
    data.forEach((element: any) => {
      this.departments.push(element.department);
      this.count.push(element.studentcount);
    });

    this.chartOptions = {
      xAxis: {
        categories: this.departments,
      },
      series: [
        {
          name: 'Department',
          data: this.count,
        },
      ],
      chart: {
        type: 'bar',
      },
    };
  }
}
