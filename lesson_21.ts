// 7) Наследование реализации (implementation inheritance)
// SubscriberComponent - через специальный интерфейс добавляются подписчики, а главная задача, выполнить отписку
// при OnDestroy, подобный функционал наследуют все компоненты в которых есть подписка на события

export abstract class SubscriberComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  public addSubscriber(subscriber: Subscription) {
    this.subscriptions.push(subscriber);
  }

  public unsubscribeAll() {
    this.subscriptions.forEach((s) => {
      if (s) {
        s.unsubscribe();
      }
    });
  }
}

export class AnyComponent extends SubscriberComponent {
  // component specific operations
}

// 8) Льготное наследование (facility inheritance)
class Cat {
  public BEHAVIOUR_EVENTS = {
    HANGRY: 'HANGRY',
    ANGRY: 'ANGRY'
  };

  public run(speed:  'SLOW' | 'FAST', direction: 'KITCHEN' | 'STREET'): void {
  }

  public eat(): void {
  }

  public catchTarget(target: any): void {
    if (target === null) {
      console.log('tomorrow I\'ll be lucky');
    }
  }
}

class HomeCat extends Cat {
  public getSomeFood() {
    this.run('SLOW', 'KITCHEN');
    this.eat();
  }
}

class WildCat extends Cat {
  public getSomeFood(target: any) {
    this.run('FAST', 'STREET');
    this.catchTarget(target)
    this.eat();
  }
}
