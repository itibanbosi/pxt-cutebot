cuteBot.stopcar()
namespace eureka_cute {


    export enum direction {
        //% block="forward"
        forward,
        //% block="right",
        right,
        //% block="left",
        left,
        //% block="right_rotation",
        right_rotation,
        //% block="left_rotation",
        left_rotation,
        //% block="backward",
        backward,
        //% block="Stop",
        Stop}

    export enum lotation {
        //% block="left",
        left,
        //% block="right",
        right
    }





    //% color="#3943c6" weight=86 blockId=moving1
    //% block="Move |%sinkou_houkou| |%time_sec|sec, power|%Power|" group="1 Basic movement"
    //% Power.min=0 Power.max=100 Power.defl=60
    export function car_derection_time(sinkou_houkou: direction, time_sec: number, Power: number): void {
        switch (sinkou_houkou) {
            case direction.forward:
                cuteBot.motors(Power, Power)
                basic.pause(time_sec * 1000);
                cuteBot.stopcar()
                basic.pause(100);
                break;


            case direction.left:
                cuteBot.motors(0, Power)
                basic.pause(time_sec * 1000);
                cuteBot.stopcar()
                basic.pause(100);
                break;
            case direction.right:
                cuteBot.motors(Power,0);
                basic.pause(time_sec * 1000);
                cuteBot.stopcar()
                basic.pause(100);
                break;
            case direction.right_rotation:
                cuteBot.motors(Power,-1*Power);
                basic.pause(time_sec * 1000);
                cuteBot.stopcar()
                basic.pause(100);
                break;
            case direction.left_rotation:
                cuteBot.motors(-1*Power,Power);
                basic.pause(time_sec * 1000);
                cuteBot.stopcar()
                basic.pause(100);
                break;
            case direction.backward:
                cuteBot.motors(-1*Power,-1*Power);
                basic.pause(time_sec * 1000);
                cuteBot.stopcar()
                basic.pause(100);
                break;
            case direction.Stop:
                cuteBot.stopcar()
                basic.pause(100);
                break;
        }
    }

    //% color="#3943c6" weight=88 blockId=moving2
    //% block="Move |%sinkou_houkou|,power|%Power|" group="1 Basic movement"
    //% Power.min=0 Power.max=100 Power.defl=60
    export function car_derection(sinkou_houkou: direction, Power: number): void {
        switch (sinkou_houkou) {
            case direction.forward:
                cuteBot.motors(Power, Power)
                break;
            case direction.left:
                cuteBot.motors(0, Power)
                break;
            case direction.right:
                cuteBot.motors(Power,0);
                break;
            case direction.right_rotation:
                cuteBot.motors(Power,-1*Power);
                break;
            case direction.left_rotation:
                cuteBot.motors(-1*Power,Power);
                break;
            case direction.backward:
                cuteBot.motors(-1*Power,-1*Power);
                break;
            case direction.Stop:
                cuteBot.stopcar()
                basic.pause(100);
                break;
        }
    }
}
