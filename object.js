const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear )
        }
    },
    {
    name: {
        value: 'Vladislav',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: false,
        configurable: false,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    },
})

// person.name = 'Maxim'

// console.log(person)

for (let key in person) {
    if(person.hasOwnProperty(key)) {
    console.log('Key', key, person[key])
    }
}