// Базовый класс
class Payment {
    public pay(Cart cart) {
        ....
    }
}

// Класс наследник, расширяет родительский метод pay, в зависимости от входных параметров, будет происходить
// динамическое связывание вызываемого метода
class CompanyPayment extends Payment {
    public pay(Cart cart, Company company) {
        ....
    }
}