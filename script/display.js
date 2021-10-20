//logic on the display

class Display {
    constructor(displayPrev, displayCurrent) {
        this.displayCurrent = displayCurrent;
        this.displayPrev = displayPrev;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.currValue = '';
        this.prevValue = '';
        this.signals = {
            sum: '+',
            sub: '-', 
            divide: '/',
            multiply: '*',
        }
    }

    delete() {
        this.currValue = this.currValue.toString().slice(0,-1);
        this.printValues();
    }

    clear() {
        this.currValue = '';
        this.prevValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    compute(tipo) {
        this.operationType !== 'igual' && this.calcule();
        this.operationType = tipo;
        this.prevValue = this.currValue || this.prevValue;
        this.currValue = '';
        this.printValues();
    }

    addNum(number) {
        if(number === '.' && this.currValue.includes('.')) return
        this.currValue = this.currValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayCurrent.textContent = this.currValue;
        this.displayPrev.textContent = `${this.prevValue} ${this.signals[this.operationType] || ''}`;
    }

    calcule() {
        const prevValue = parseFloat(this.prevValue);
        const currValue = parseFloat(this.currValue);

        if( isNaN(currValue)  || isNaN(prevValue) ) return
        this.currValue = this.calculator[this.operationType](prevValue, currValue);
    }
}