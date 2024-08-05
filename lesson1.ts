/**Основная идея:
 * Есть базовый класс ордеров, с общей логикой апи запросов и формирования критериев для поиска ордеров в базе,
 * но есть разные типы ордеров, для которых критерии поиска могут меняться. В этом случае удобно использовать
 * наследование и полиморфизм*/

export class OrdersBase {
    // Применяется композиция
    constructor(protected _ordersApi: OrdersApi,
                protected _bakeriesManager: BakeriesManager) {
    }

    protected _getSearchCriteria(): IOrdersSearchCriteria {
        return {
            from: this._getBeginDate(),
            end: this._getEndDate(),
        }
    }

    protected _getBeginDate(): Date {
        return new Date();
    }

    protected _getEndDate(): Date {
        return new Date();
    }

    protected _subscribe(): void {
        this._bakeriesManager.selectedBakery$
            .subscribe((bakery: IBakery) => this._getOrders(bakery.id));
    }

    private _getOrders(bakeryId: number): Promise<IOrders> {
        return this._ordersApi.getOrders(bakeryId, this._getSearchCriteria());
    }
}

// Применяется наследование
export class PendingOrders extends OrdersBase {
    constructor(protected _ordersApi: OrdersApi,
                protected _bakeriesManager: BakeriesManager) {
        super(_ordersApi, _bakeriesManager);
        this._subscribe();
    }

    // Применяется полиморфизм, изменяется результат родительского метода
    protected _getSearchCriteria(): IOrdersSearchCriteria {
        return {
            ...super._getSearchCriteria(),
            status: 'PENDING'
        }
    }

    // Применяется полиморфизм, изменяется результат родительского метода
    protected _getBeginDate(): Date {
        return new Date() - 6; //
    }
}

// Применяется наследование
export class FinishedOrders extends OrdersBase {
    constructor(protected _ordersApi: OrdersApi,
                protected _bakeriesManager: BakeriesManager) {
        super(_ordersApi, _bakeriesManager);
        this._subscribe();
    }

    // Применяется полиморфизм, изменяется результат родительского метода
    protected _getSearchCriteria(): IOrdersSearchCriteria {
        return {
            ...super._getSearchCriteria(),
            status: 'FINISHED'
        }
    }
}
