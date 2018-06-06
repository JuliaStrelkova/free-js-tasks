dateNewYear = (tame1, tame2) =>{
    let time = +tame1 + +tame2;
    let hour   = Math.floor(time/3600);
    let minutes   = Math.floor((time - hour * 3600) / 60);
    let seconds   = time - hour * 3600 - minutes * 60;
    console.log(time);
    console.log(hour);
    console.log(minutes);
    console.log(seconds);

    if(hour === 1 || hour % 10 === 1){
        hour = hour + ' час ';
    }
    if(minutes === 1 || minutes % 10 === 1){
        minutes = minutes + ' минута ';
    }
    if(seconds === 1 || seconds % 10 === 1){
        seconds = seconds + ' секунда';
    }
    if(seconds < 5 && seconds > 1 || seconds % 10 === 4 || seconds % 10 === 2 || seconds % 10 === 3 ){
        seconds = seconds + ' секунды';
    }
    if(minutes < 5 && minutes > 1 || minutes % 10 === 4 || minutes % 10 === 2 || minutes % 10 === 3 ){
        minutes = minutes + ' минуты ';
    }
    if(hour < 5 && hour > 1 || hour % 10 === 4 || hour % 10 === 2 || hour % 10 === 3 ){
        hour = hour + ' часа ';
    }
    if(hour <= 10 && hour > 4 || hour % 10 <= 10 && hour % 10 > 4 || hour % 10 === 0 && minutes > 4){
        hour = hour + ' часов ';
    }
    if(minutes <=10 && minutes > 4|| minutes % 10 <= 10 && minutes % 10 > 4 || minutes % 10 === 0 && minutes > 4){
        minutes = minutes + ' минут ';
    }
    if(seconds <= 10 && seconds > 4 || seconds % 10 <= 10 && seconds % 10 > 4 || seconds % 10 === 0 && seconds > 4){
        seconds = seconds + ' секунд';
    }

    if(hour === 0){
        hour = '';
    }
    if(minutes === 0){
        minutes = '';
    }
    if(seconds === 0){
        seconds = '';
    }


    return hour + minutes + seconds;


};
process.stdout.write(dateNewYear(process.argv[2], process.argv[3]));
