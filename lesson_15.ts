class Car {
  public engine: 'oil' | 'gaz' | 'electro' = 'oil';

  public start() {
    console.log('Oil engine start');
  }
}

class GazCar extends Car {
  constructor() {
    super();
    this.engine = 'gaz';
  }

  public start() {
    console.log('Gaz engine start');
  }
}


class ElectroCar extends Car {
  constructor() {
    super();
    this.engine = 'electro';
  }

  public start() {
    console.log('Electro engine start');
  }
}
