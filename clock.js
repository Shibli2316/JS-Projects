const myLabel=document.getElementById("myLabel");
update();
setInterval(update, 1000);
function update (){
    let date = new Date();
    myLabel.innerHTML=formatTime(date);

    function formatTime(date){
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hour >=12 ? "pm" : "am";
        hour = (hour%12)||12; 
        hour=formatZeros(hour);
        minutes=formatZeros(minutes);
        seconds=formatZeros(seconds);
        return `${hour}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeros(time){
        time=time.toString();
        return time.length < 2 ? "0" + time : time ;
    }
}