//UC 12,13 : Ability to create Employee Payroll Data with id, name and salary

class EmployeePayrollData 
{
    // fields
    id;
    name;
    salary;
    gender;
    startDate;

    // constructor
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...params) 
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    } 

    // overriding toString() method 
    toString() 
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id=" + this.id + ", Name=" + this.name + ", Salary=" + this.salary + ", Gender=" + this.gender + ", StartDate=" + empDate;
    }
}
//Other two fields will be undefined when not initialised in constructor
let employeePayrollDataObj = new EmployeePayrollData(1, "Mark", 30000);
console.log("UC-12\nClass contents:\n" + employeePayrollDataObj.toString());
console.log("Changing name:")
employeePayrollDataObj.name = "john";
console.log(employeePayrollDataObj.toString()); 
let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 40000, 'F', new Date());
console.log(newEmployeePayrollData.toString()); 