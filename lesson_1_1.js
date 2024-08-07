class Display {
}

class Phone {
  constructor() {
    // Композиция, телефон "has a display"
    this.display = new Display();
  }

  makeCalling() {
    console.log('simple phone calling');
  }
}

class SamsungPhone extends Phone { // Наследование, SamsungPhone is a Phone
  // Полиморфизм
  makeCalling() {
    console.log('samsung phone calling')
  }
}

[new Phone(), new SamsungPhone()].forEach(phone => phone.makeCalling())


