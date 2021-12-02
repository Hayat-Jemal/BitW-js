// const object = {
//     key: 'value',
//     key2: 2,
//     key3: true,
//     key4: {},
//     key5: [1, 2, 3],
// };

// const person = {
//     name: 'John',
//     age: 30,
//     isMarried: false,
//     ['key' + '2']: 'value2',
// }

// console.log(person, object);

// const liObject = {
//     element: null,
//     score: 0,
//     createElement() {
//         this.element = document.createElement('li');
//         document.body.appendChild(this.element);
//         this.element.innerHTML = this.score;
//         this.element.addEventListener('click', () => {
//             console.log(this);
//             this.updateScore();
//         });
//     },
//     updateScore() {
//         this.score += 1;
//         this.element.innerHTML = this.score;
//         if (this.score > 10) {
//             this.element.style.color = 'red';
//             this.element.remove();
//         }
//     }
// }

// const liObject2 = {
//     element: null,
//     score: 0,
//     createElement() {
//         this.element = document.createElement('li');
//         document.body.appendChild(this.element);
//         this.element.innerHTML = this.score;
//         this.element.addEventListener('click', () => {
//             console.log(this);
//             this.updateScore();
//         });
//     },
//     updateScore() {
//         this.score += 1;
//         this.element.innerHTML = this.score;
//         if (this.score > 10) {
//             this.element.style.color = 'red';
//             this.element.remove();
//         }
//     }
// }

// liObject.createElement();
// liObject2.createElement();

function createMyLi() {
    const myLi = document.createElement('li');
    myLi.innerHTML = 'Hello!';
    document.body.appendChild(myLi);
}

createMyLi();
createMyLi();
createMyLi();


class MyLi {
    element = null;
    score = 0;
    createElement() {
        this.element = document.createElement('li');
        document.body.appendChild(this.element);
        this.element.innerHTML = this.score;
        this.element.addEventListener('click', () => {
            console.log(this);
            this.updateScore();
            console.dir(this.element);
        });
    }
    updateScore() {
        this.score += 100;
        this.element.innerHTML = this.score;
        if (this.score > 1000) {
            this.element.style.color = 'red';
            this.element.remove();
        }
    }
}

const li1 = new MyLi();
const li2 = new MyLi();
const li3 = new MyLi();

li1.createElement();
li2.createElement();
li3.createElement();
console.log('object', liObject, liObject2)
console.log(li1, li2, li3);
  
