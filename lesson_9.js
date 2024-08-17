class General extends Object {
    // -- копирование объекта
    copyTo(obj) {
        Object.assign(obj, this);
    }

    // -- клонирование объекта;
    clone() {
        return Object.assign({}, this);
    }

    // -- сравнение объектов;
    isEqual(obj) {
        return JSON.stringify(this) === JSON.stringify(obj)
    }


    // -- сериализация
    serialize() {
        return JSON.stringify(this);
    }

    // -- десериализация
    deserialize(json) {
        return JSON.parse(json)
    }

    // -- печать (наглядное представление содержимого объекта в текстовом формате);
    print() {
        return JSON.stringify(this);
    }

    // -- проверка типа
    isInstance(type) {
        return this instanceof type;
    }

    // -- получение реального типа объекта
    getType() {
        return this.constructor.name;
    }
}

class Any extends General {
}

const general = new General();
const obj = {};
const json = '{"result":true, "count":42}';

general.copyTo(obj)

console.log('copyTo: ' + obj);
console.log('clone: ' + general.clone());
console.log('isEqual: ' + general.isEqual(obj));
console.log('serialize: ' + general.serialize());
console.log('deserialize: ' + general.deserialize(json));
console.log('print: ' + general.print());
console.log('isInstance: ' + general.isInstance(Object));
console.log('getType: ' + general.getType());
