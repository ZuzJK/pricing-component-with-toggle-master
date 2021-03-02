class Price{

    constructor(value){
    this.value = value;
    }
    
    calcPrice(x){
        x ? this.value /= 10 : this.value *= 10;
        return `$${Math.floor(this.value) + 0.99}`;
    }

}

export default Price;