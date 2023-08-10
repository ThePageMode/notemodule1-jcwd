class Queue {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    addQueue(order) {
        const wasQueueEmpty = this.queue.length === 0;
        this.queue.push(order);

        if (wasQueueEmpty && !this.isProcessing) {
            setTimeout(() => {
                this.processQueue();
            }, 5000);
        }
    }

    // if (!this.isProcessing) {
    //        this.processQueue();


    async processQueue() {
        this.isProcessing = true;
        while (this.queue.length > 0) {
            const order = this.queue.shift();
            console.log(`Preparing order: ${order}`);
            const processingTime = Math.floor(Math.random() * 10) + 1;
            await new Promise(resolve => setTimeout(resolve, processingTime * 1000));
            console.log(`Order ${order} done in ${processingTime} seconds!`);
        }
        this.isProcessing = false;
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = Queue;