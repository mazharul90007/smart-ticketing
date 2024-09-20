




document.getElementById('totalSeat').addEventListener("click", (event) => {
    const seat = event.target;
    const seatName = seat.innerText;
    // get total selected seat number
    const totalSelectedSeatId = document.getElementById("selected-seat");
    let totalSelectedText = totalSelectedSeatId.innerText;
    const totalSelectedSeatNumber = parseInt(totalSelectedText);

    //get total seat left
    const totalSeatLeftId = document.getElementById("seatLeft");
    let totalSeatLeftText = totalSeatLeftId.innerText;
    const totalSeatLeftNumber = parseInt(totalSeatLeftText);

    //get each seat price
    const perSeatPriceId = document.getElementById("perSeatPrice");
    const perSeatPriceText = perSeatPriceId.innerText;
    const perSeatPriceNumber = parseInt(perSeatPriceText);

    //get total price
    const totalPriceId = document.getElementById("totalTicketPrice");
    const totalPriceText = totalPriceId.innerText;
    const totalPriceNumber = parseInt(totalPriceText);


    if (seat.classList.contains("active")) {
        seat.classList.remove("active");
        seat.classList.remove("bg-green-500")
        //remove selected seat from the list
        const removeSeat = document.getElementById(seatName);
        if (removeSeat) {
            removeSeat.remove();
        }

        //decrease selected seat
        const seats = totalSelectedSeatNumber - 1;
        totalSelectedSeatId.innerText = seats;
        //increase seats left
        const seatLeft = totalSeatLeftNumber + 1;
        totalSeatLeftId.innerText = seatLeft;

        //decrease total price
        const totalPrice = totalPriceNumber - perSeatPriceNumber;
        totalPriceId.innerText = totalPrice;

    }
    else {
        seat.classList.add("active");
        seat.classList.add("bg-green-500");



        //creating a seat, class and price in select your seat section
        const selectedSeat = document.createElement("div");
        selectedSeat.classList.add("grid");
        selectedSeat.classList.add("grid-cols-3");
        selectedSeat.classList.add("text-center");
        selectedSeat.id = seatName;

        const selectedSeatName = document.createElement("div");
        selectedSeatName.innerText = seatName;
        const selectedSeatClass = document.createElement("div");
        selectedSeatClass.innerText = "Economy";
        const selectedSeatPrice = document.createElement("div");
        selectedSeatPrice.innerText = 500;

        selectedSeat.appendChild(selectedSeatName);
        selectedSeat.appendChild(selectedSeatClass);
        selectedSeat.appendChild(selectedSeatPrice);

        const seatNumberAndPrice = document.getElementById("seatNumberAndPrice");
        seatNumberAndPrice.appendChild(selectedSeat);

        //increase selected seat
        const seats = totalSelectedSeatNumber + 1;
        totalSelectedSeatId.innerText = seats;
        //decrease seat left
        const seatLeft = totalSeatLeftNumber - 1;
        totalSeatLeftId.innerText = seatLeft;

        // increase total price
        const totalPrice = totalPriceNumber + perSeatPriceNumber;
        totalPriceId.innerText = totalPrice;
        //




    }
    const applyButtonId = document.getElementById('getDiscount');
    if (totalSelectedSeatNumber >= 3) {
        applyButtonId.removeAttribute("disabled");
        applyButtonId.classList.remove("opacity-50")
        console.log(applyButtonId)

        //get coupun input value
        document.getElementById('coupon').addEventListener("keyup", (event) => {
            const couponText = event.target.value;
            applyButtonId.addEventListener("click", () => {
                if (couponText === "NEW15") {
                    //get Grand total price
                    const grandTotalPriceId = document.getElementById("discountPrice");
                    const GrandTotalPriceText = grandTotalPriceId.innerText;
                    const GrandTotalPriceNumber = parseInt(GrandTotalPriceText);
                    grandTotalPriceId.innerText = totalPriceNumber * .15;
                }
            })
        })
    }
    else {
        applyButtonId.setAttribute("disabled", true);
        applyButtonId.classList.add("opacity-50")
        console.log(applyButtonId);
    }




})






