import { Component } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
]

searchName: string = '';

addEmployee(name: string, experience: number, packageValue: number, role: string) {
  this.employees.push({ name, experience, package: packageValue, role });
}

deleteEmployee(employeeToDelete: any) {
  this.employees = this.employees.filter(employee => employee !== employeeToDelete);
}

hike20() {
  this.employees.forEach(employee => {
    employee.package += employee.package * 0.20;
  });
}

festivalBonus() {
  this.employees.forEach(employee => {
    employee.package += 30000;
  });
}

calculateExpenditure() {
  const totalExpenditure = this.employees.reduce((sum, employee) => sum + employee.package, 0);
  alert(`Total Expenditure for the Company: ${totalExpenditure}`);
}

totalEmployees() {
  alert(`Total Employees: ${this.employees.length}`);
}

filteredEmployees() {
  return this.employees.filter(employee => 
    employee.name.toLowerCase().includes(this.searchName.toLowerCase())
  );
}
}


