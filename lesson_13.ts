// метод публичен в родительском классе А и публичен в его потомке B;
class Employee {
  public empCode: string;
}

const emp = new Employee();

// метод скрыт в родительском классе А и скрыт в его потомке B
class Employee {
  private empCode: number;
}

const emp = new Employee();
emp.empCode = 123; // произойдет ошибка


class Employee {
  protected empCode: number;

  constructor(code: number){
    this.empCode = code;
  }
}

// метод публичен в родительском классе А и скрыт в его потомке B
class SalesEmployee extends Employee{
  private department: string;

  constructor(code: number, department: string) {
    super(code);
    this.department = department;
  }
}

const emp = new SalesEmployee(123, "Sales");
emp.empCode = 123; // произойдет ошибка
