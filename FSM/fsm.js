class FSM {
    /**
     * У каждого экземпляра класса будет определённый алфавит, список состояний и переходов, которые могут использоваться для проверки значений, подающихся на вход.
     * @param {String} alphabet
     * @param {String[]} states
     * @param {String} startState
     * @param {String[]} finiteStates
     * @param {Object} transitions
     */
    constructor(alphabet, states, startState, finiteStates, transitions) {
        this.alphabet = alphabet
        this.states = states
        this.startState = startState
        this.transitions = transitions
        this.finiteStates = finiteStates
        this.currentState = null
    }

    /**
     * Проверяем, относится ли символ к указанному алфавиту.
     * @param {String} symbol
     * @returns {Boolean}
     */
    _checkIsBelongAlphabet(symbol) {
        return this.alphabet.includes(symbol)
    }

    /**
     * Изменяем текущее состояние в зависимости от символа. Автомат должен прервать работу, если у текущего символа отсутствует переход к текущему состоянию.
     * @param {String} symbol
     */
    _changeState(symbol) {
        if (
            this.transitions[this.currentState] &&
            this.transitions[this.currentState][symbol]
        ) {
            this.currentState = this.transitions[this.currentState][symbol]
        } else {
            throw new Error(`No transition from ${this.currentState} by ${symbol}`)
        }
    }

    /**
     * Проверяем значение по указанным параметрам. Принимаем значение, если finiteStates содержит последнее текущее состояние, и отклоняем, если это не так.
     * @param {String} value
     * @returns {String}
     */
    test(value) {
        this.currentState = this.startState

        for (let symbol of value) {
            if (this._checkIsBelongAlphabet(symbol)) {
                this._changeState(symbol)
            } else {
                return false
            }
        }

        return this.finiteStates.includes(this.currentState)
    }
}

// Параметры по порядку: алфавит, состояния, начальное состояние, конечное состояние, переходы
// Нужно определить переходы как объект, в котором:
// 1. Ключ — это состояние,
// 2. Значение — это объект, в котором:
// 2.1. Ключ — это символ, 
// 2.2. Значение — это целевое состояние.
const fsm = new FSM('01', ['q0', 'q1'], 'q0', ['q0'], {
    q0: {
        0: 'q0',
        1: 'q0'
    },
    q1: {
        0: 'q1',
        1: 'q1'
    }
})

console.log(fsm.test('111')) // true
console.log(fsm.test('0111')) // true
console.log(fsm.test('1112')) // false, 2 не относится к алфавиту '01'
console.log(fsm.test('0101'));

console.log(fsm.test('1111101010101'));
console.log(fsm.test('0003'));