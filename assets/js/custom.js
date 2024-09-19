
document.getElementById('totalSeat').addEventListener("click",(event)=>{
    const seat = event.target;
    const seatName = seat.innerText;
    console.log(seatName);
})