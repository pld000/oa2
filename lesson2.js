class Phone {
    makeCalling() {
        console.log('Dzin!!!');
    }
}

class SmartPhone extends Phone {
    makePhone() {
        console.log('Photo');
    }

    playVideo() {
        console.log('Video')
    }
}

class SamsungPhone extends SmartPhone {
    openShop() {
        console.log('Open Samsung Shop')
    }
}

