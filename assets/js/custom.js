const seat = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4",
    "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4",
    "I1", "I2", "I3", "I4", "J1", "J2", "J3", "J4"];

seat.forEach(function (event) {
    const seatNumber = document.getElementById(event);
    seatNumber.addEventListener("click", function (event) {
        const elementId = event.target;
        const element = elementId.id;
        const checkClass = document.getElementById(element);
        if (elementId.classList.contains("bg-[#1fd100]")) {
            checkClass.classList.remove("bg-[#1fd100]");

            const selectedSeat = document.getElementById("selected-seat");
            const totalSeatText = selectedSeat.innerText;
            const totalSeatNumber = parseInt(totalSeatText);
            const totalSeat = totalSeatNumber - 1;
            setElementValueById("selected-seat", totalSeat);

        }
        else {
            checkClass.classList.add("bg-[#1fd100]")
            const selectedSeat = document.getElementById("selected-seat");
            const totalSeatText = selectedSeat.innerText;
            const totalSeatNumber = parseInt(totalSeatText);
            const totalSeat = totalSeatNumber + 1;
            setElementValueById("selected-seat", totalSeat);

            // add seat Number
            const createSeat = document.getElementById("seatNumber");
            const li = document.createElement("li");
            li.classList.add(element);
            li.innerText = element;
            createSeat.appendChild(li);

            // add seat class name

            const createSeatClass = document.getElementById("text-center");
            const li2 = document.createElement("li");
            li2.classList.add("seat-class");
            li2.innerText = "Economy";
            createSeatClass.appendChild(li2);


            const createSeatPrice = document.getElementById("text-end");
            const li3 = document.createElement("li");
            li3.classList.add("price")
            li3.innerText = "550";
            createSeatPrice.appendChild(li3);
        }



        //    get each seat Price of the selected tickets
        const getEachSeatId = document.getElementById("perSeatPrice");
        const getEachSeatIdText = getEachSeatId.innerText;
        const getEachSeatPrice = parseInt(getEachSeatIdText);

        //    get total seat number of the selected tickets
        const getTotalSeatId = document.getElementById("selected-seat");
        const getTotalSeatText = getTotalSeatId.innerText;
        const getTotalSeat = parseInt(getTotalSeatText);

        // get total seat price of the selected seats
        const totalPrice = getEachSeatPrice * getTotalSeat;
        console.log(totalPrice);

        // show total price
        const setTotalPriceById = document.getElementById("totalTicketPrice");
        setTotalPriceById.innerText = totalPrice;

            // get the coupon input field
            const couponId = document.getElementById("coupon");
            const coupon = couponId.value;
            
            // get 20% coupon
            
            // set the value of total ticket price after discount
            const discountPriceId = document.getElementById("discountPrice");
            if(coupon === "NEW15"){
                const lessDiscount = (totalPrice / 100) * 15;
                console.log(lessDiscount);
                return lessDiscount;
            }else{
                return "no discount";
            }
            
       
        const couponButton = document.getElementById("getDiscount");
        const d = couponButton.addEventListener("click", function(){
         discount();
        });
        console.log(d);

    })
})



