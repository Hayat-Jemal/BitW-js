const object = {
    key: 'value',
    key2: 2,
    key3: true,
    key4: {},
    key5: [1, 2, 3],
};

const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    ['key' + '2']: 'value2',
}

console.log(person, object);

const liObject = {
    element: null,
    score: 0,
    createElement() {
        this.element = document.createElement('li');
        document.body.appendChild(this.element);
        this.element.innerHTML = this.score;
        this.element.addEventListener('click', () => {
            console.log(this);
            this.updateScore();
        });
    },
    updateScore() {
        this.score += 1;
        this.element.innerHTML = this.score;
        if (this.score > 10) {
            this.element.style.color = 'red';
            this.element.remove();
        }
    }
}

const liObject2 = {
    element: null,
    score: 0,
    createElement() {
        this.element = document.createElement('li');
        document.body.appendChild(this.element);
        this.element.innerHTML = this.score;
        this.element.addEventListener('click', () => {
            console.log(this);
            this.updateScore();
        });
    },
    updateScore() {
        this.score += 1;
        this.element.innerHTML = this.score;
        if (this.score > 10) {
            this.element.style.color = 'red';
            this.element.remove();
        }
    }
}

liObject.createElement();
liObject2.createElement();
