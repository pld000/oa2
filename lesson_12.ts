const ASSIGNMENT_NIL = 0; // assignment_attempt() ещё не вызывалась
const ASSIGNMENT_OK = 1; // присваивание выполнилось успешно
const ASSIGNMENT_VOID = 2; // типы не совместимы, target получил Void

class None {
}

const Void = new None();

class General {
  private assignment_status;

  // Предусловие: target и source имеют совместимые типы
  // Постусловие: target получает значение source, если типы не совместимы то значение Void
  public assignment_attempt(target, source): void {
    if (target instanceof General && source instanceof General) {
      target = source;
      this.assignment_status = ASSIGNMENT_OK;
    } else {
      target = Void;
      this.assignment_status = ASSIGNMENT_VOID;
    }
  }

  public get_assignment_status() {
    return this.assignment_status;
  }
}

class Any {
  private assignment_status;

  // Предусловие: target и source имеют совместимые типы
  // Постусловие: target получает значение source, если типы не совместимы то значение Void
  public assignment_attempt(target, source): void {
    if (target instanceof Any && source instanceof Any) {
      target = source;
      this.assignment_status = ASSIGNMENT_OK;
    } else {
      target = Void;
      this.assignment_status = ASSIGNMENT_VOID;
    }
  }

  public get_assignment_status() {
    return this.assignment_status;
  }
}
