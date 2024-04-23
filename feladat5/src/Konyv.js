export default class Konyv {
    constructor(title, isbn) {
        if (!title) throw new Error('Add meg a címet!')
        if (isbn.length !== 10 || !this.onlyDigits(isbn))
            throw new Error('Hibás ISBN szám')

        this.title = title
        this.isbn = isbn
    }

    onlyDigits(s) {
        for (const c of s) {
            if (c < '0' || c > '9')
                return false
        }
        return true
    }

    toString() {
        return `${this.title} (${this.isbn})`
    }
}