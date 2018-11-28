interface Alarm {
    alert();
}

class Door {
}

interface Light {
    lightOn();
    lightOff();
}

// 类可以实现多个接口
class SecurityDoor extends Door implements Alarm,Light {
    alert() {
        console.log('SecurityDoor alert');
    }
    lightOn(){
        console.log('SecurityDoor lightOn');
    }
    lightOff(){
        console.log('SecurityDoor lightOff');
    }
}

//接口可以继承（多个）接口
interface LightableAlarm extends Alarm {
    lightAlarmOn();
    lightAlarmOff();
}