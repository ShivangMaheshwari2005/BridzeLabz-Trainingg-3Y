class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Price:", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Avatar", "A1", 200, 30);
const ticket2 = new OnlineTicket("Avengers", "B2", 250, 40);

ticket1.printTicket();
console.log("Total Amount:", ticket1.getTotalAmount());

ticket2.printTicket();
console.log("Total Amount:", ticket2.getTotalAmount());

// printTicket() is inherited through the prototype chain.
