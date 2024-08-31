class User {
  public name: string;

  constructor(name) {
    this.name = name;
  }

  public getClaims() {
    return null;
  }
}

class Guest extends User {
  public getClaims() {
    return 'This is Guest';
  }
}

class Employee extends User {
  public getClaims() {
    return 'This is Employee';
  }
}

class UserManager<T> {
  public checkUserAccess(user: User) {
    console.log(user.getClaims());
  }

  public sortByAge(usersList: Array<T>): Array<T> {
    return [];
  }
}

const guest = new Guest('Guest1');
const employee = new Employee('Employee1');
const guestManager = new UserManager<Guest>();
const employeeManager = new UserManager<Employee>();

// Полиморфный вызов метода
guestManager.checkUserAccess(guest);
employeeManager.checkUserAccess(employee);

// Ковариантный вызов метода
const guestList = [new Guest('Guest1'), new Guest('Guest2'), new Guest('Guest3')];
const employeeList = [new Employee('Employee1'), new Employee('Employee2'), new Employee('Employee3')];

guestManager.sortByAge(guestList);
employeeManager.sortByAge(employeeList);
