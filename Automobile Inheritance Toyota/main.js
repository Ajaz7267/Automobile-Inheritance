const FourWheeler = {
    brand: "toyota",
    // model: "fortuner",
    fuel_type:"Diesel",
    wheels: 4,
    
}

const model = Object.create(FourWheeler);
FourWheeler.name = "fortuner"
console.log(model);

const price = Object.create(FourWheeler);
FourWheeler.price = "31 lakh";
console.log(price);

const seat = Object.create(FourWheeler);
FourWheeler.seat = 7;
console.log(seat);