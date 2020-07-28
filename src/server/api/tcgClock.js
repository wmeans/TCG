
export function calculcateAngleBetweenTwoClockHands(data) {
    let dataJson = JSON.stringify(data);
    console.log("dataJson=" + dataJson);  //remove in PROD
    
    var clock = data;
    if (clock == null) {
        return 'Error: input is null.';
    }

    if (clock.hour<0 || 
        clock.minute<0 || 
        clock.hour>12 ||
        clock.minute>60 )
    {
        return 'Error: wrong input.';
    }
    let hour = clock.hour;
    let minute = clock.minute;

    //check the input hour
    if (hour == 12) {
        hour = 0;
    }
    //check input minute
    if (minute == 60) {
        minute = 0;
        hour += 1;
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    //calc the angle moved by the hour and minute hands
    let hourAngle = (hour * 60 + minute) * 0.5;
    let minuteAngle = minute * 6;

    //difference between two angles  
    let clockAngle = Math.abs(hourAngle - minuteAngle);

    //the smaller angle of two possible angles  
    let angle = Math.min(360 - clockAngle, clockAngle);
    
    return angle;  
}