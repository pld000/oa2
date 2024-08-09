// Общий родительский класс
class Phone {
    makeCalling() {
        console.log('Dzin!!!');
    }
}

// SmartPhone задает общий случай класса Phone
class SmartPhone extends Phone {
    makePhone() {
        console.log('Photo');
    }

    playVideo() {
        console.log('Video')
    }
}

// SamsungPhone задает более конкретный случай родительского класса SmartPhone
class SamsungPhone extends SmartPhone {
    openShop() {
        console.log('Open Samsung Shop')
    }
}

