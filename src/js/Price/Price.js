class Price{

    constructor(value=19){
    this.value = value;
    }
    
    calcPrice(x){
        x ? this.value /= 10 : this.value *= 10;
        return `$${Math.floor(this.value) + 0.99}`;
    }

}

export default Price;