class Store {
    count = 1
    subscribers = []

    changeCount(newValue){
        this.count = newValue
        this.subscribers.forEach(e => e(newValue))
    }

    increment(){
        this.changeCount(this.count + 1)
    }

    subscribe(callbackFunc){
        this.subscribers.push(callbackFunc)
    }
}

export const store = new Store()