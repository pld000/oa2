/**
 * Для метода Filial.getEmployees, нельзя ослаблять постусловие, потому что филиалу не надо знать об остальных
 * сотрудниках компании
 * */
class Employee {
}

class Company {
  public employeesCount: number;

  public hire(employee: Employee): void {
  }

  // Постусловие: вернет всех сотрудников компании (включая филиалы)
  public getEmployees(): Employee[] {
    return null;
  }
}

class Filial extends Company {
  public employeesCount: number;

  public hire(employee: Employee): void {
  }

  // Постусловие: вернет сотрудников филиала
  public getEmployees(): Employee[] {
    return null;
  }
}

/**
 * В данном нельзя прикручивать предусловие, потому что FirstClassFlyTicket класс с более расширенными возможностями,
 * в противном случае теряется смысл этого класса
 * */

class FlyTicket {
  // Предусловие: размер багажа не превышает одну условную единицу
  // Постусловие: багаж зарегистрирован
  public registerLuggage(): void {}
}

class FirstClassFlyTicket extends FlyTicket {
  // Предусловие: размер багажа не превышает пять условных единиц
  // Постусловие: багаж зарегистрирован
  public registerLuggage(): void {}
}
