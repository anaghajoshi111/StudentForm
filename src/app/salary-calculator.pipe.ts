import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryCalculator'
})
export class SalaryCalculatorPipe implements PipeTransform {

  transform(salary: number, months: string): number {

    var month:number = parseInt(months);
    return salary*month;
  }

}
