// 4) Наследования вариаций - functional variation inheritance
// Метод getDescription класса Cake возвращает строковое описание объекта, но у потомка ComplexCake, есть дополнительные
// поля которые должны быть учтены в описании. Поэтому логика getDescription изменится, но сигнатура метода останется прежней.

class Cake {
  public getDescription(): string {
    return name + price;
  }
}

class ComplexCake extends Cake {
  public getDescription(): string {
    return name + price + addons.join(', ');
  }
}

// 4) Наследования вариаций - type variation inheritance
// У класса Arrow есть метод getDamage, который возвращает тип number, а у потомка Arrow, класса PoisonArrow,
// полученный урон это объект из трех полей:
class Arrow {
  public getDamage(): number {
    return null;
  }
}

class PoisonArrow extends Arrow {
  public getDamage(): { hitDamage: number, poisonDuration: number, poisonDamage: number } {
    return null;
  }
}

// 5) Наследование с конкретизацией (reification inheritance)
// Класс Animal, который имеет обязательный для всех потомков абстрактный метод makeSound()

abstract class Animal {
  abstract makeSound(): void
}

class Cat extends Animal {
  makeSound() {
    // ... some code
  }
}

// 6) Структурное наследование (structure inheritance)
interface OnInit {
  init(): void;
}

class Component implements OnInit {
  init() {
    // ...
  }
}
