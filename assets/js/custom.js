const seat = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4",
    "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4",
    "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4"];

seat.forEach(function(event){
    const seatNumber = document.getElementById(event);
    seatNumber.addEventListener("click", function(event){
        const elementId = event.target;
        const element =elementId.id;
        const checkClass = document.getElementById(element);
        if(elementId.classList.contains("bg-[#1fd100]")){
            checkClass.classList.remove("bg-[#1fd100]");

            const selectedSeat = document.getElementById("selected-seat");
            const totalSeatText = selectedSeat.innerText;
            const totalSeatNumber = parseInt(totalSeatText);
            totalSeat = totalSeatNumber - 1;
            setElementValueById("selected-seat", totalSeat);
            
        }
        else{
            checkClass.classList.add("bg-[#1fd100]")
            const selectedSeat = document.getElementById("selected-seat");
            const totalSeatText = selectedSeat.innerText;
            const totalSeatNumber = parseInt(totalSeatText);
            const totalSeat = totalSeatNumber + 1;
            setElementValueById("selected-seat", totalSeat);
            
        }
    })
})
