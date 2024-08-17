class List<T> extends Array<T> {
}

class Device {
}

class InputDevice extends Device {
}

// Ковариантность
// Список устройств, будет частным случаем списка устройств ввода
const devicesList = new List<Device>();
const inputDevicesList = new List<InputDevice>();

// Контрвариантность
// Метод plugIn DeviceManager<InputDevice> сможет принять объект типа DeviceManager<Device>, но не наоборот
class DeviceManager<T> {
    public plugIn(device: T): void {
        // ...
    }
}

const devicesManager = new DeviceManager<Device>();
const inputDevicesManager = new DeviceManager<InputDevice>();

