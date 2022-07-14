class MinHeap {

    constructor(){
        this.storage = []
        this.size = 0
    }

    getParentIndex(indexChild){
        return Math.floor ( (indexChild - 1) / 2 )
    }
    getLeftChildIndex(indexParent){
        return indexParent * 2 + 1
    }
    getRightChildIndex(indexParent){
        return indexParent * 2 + 2
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0
    }
    hasLeftChild(indexParent){
        return this.getLeftChildIndex(indexParent) < this.size
    }
    hasRightChild(indexParent){
        return this.getRightChildIndex(indexParent) < this.size
    }
    getParent(index){
        return this.storage[this.getParentIndex(index)]
    }
    getLeftChild(index){
        return this.storage[this.getLeftChildIndex(index)]
    }
    getRightChild(index){
        return this.storage[this.getRightChildIndex(index)]
    }

    swap(index1, index2){
        let temp = this.storage[index1]
        this.storage[index1] = this.storage[index2]
        this.storage[index2] = temp
    }

    insert(data){
        this.storage[this.size] = data
        this.size++
        // this.heapifyUpIterative()
        this.heapifyUpRecursive(this.size - 1)
    }

    heapifyUpRecursive(index){
        if(this.hasParent(index) && 
            this.storage[index] < this.getParent(index)){
                this.swap(index, this.getParentIndex(index))
                this.heapifyUpRecursive(this.getParentIndex(index))
            }
    }

    heapifyUpIterative(){
        let i = this.size - 1

        while(this.hasParent(i) && 
            this.storage[i] < this.getParent(i)) {

                this.swap(i, this.getParentIndex(i))
                i = this.getParentIndex(i)

        }
    }

    removeMin(){
        if(this.size === 0) throw new Error("empty heap")
        let min = this.storage[0]
        this.storage[0] = this.storage[this.size - 1]
        this.size--

        this.storage.pop()
        this.heapifyDownRecursive(0)
        // this.heapifyDownInterative()
        this

        return min
    }

    heapifyDownInterative(){
        let index = 0
        while(this.hasLeftChild(index)){
            if(this.hasRightChild(index)){
                //has both left and right children
                //check to see which child is smallest
                if(this.getLeftChild(index) < this.getRightChild(index)){
                    //left is smaller so u compare with left
                    if(this.storage[index] > this.getLeftChild(index)){
                        this.swap(index, this.getLeftChildIndex(index))
                        index = this.getLeftChildIndex(index)
                    } 
                    else {
                        break;
                    }
                }
                else {
                    //right is smaller so compare with right
                    if(this.storage[index] > this.getRightChild(index)){
                        this.swap(index, this.getRightChildIndex(index))
                        index = this.getRightChildIndex(index)
                    }
                    else {
                        break;
                    }
                }
                
            }

            else {
                if(this.getLeftChild(index) < this.getRightChild(index)){
                    //left is smaller so u compare with left
                    if(this.storage[index] > this.getLeftChild(index)){
                        this.swap(index, this.getLeftChildIndex(index))
                        index = this.getLeftChildIndex(index)
                    } 
                    else {
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
    }

    heapifyDownRecursive(index){
        if(this.hasLeftChild(index)){
            let smallestChildIndex = this.getLeftChildIndex(index)
            if(this.hasRightChild(index)){
                if(this.getLeftChild(index) > this.getRightChild(index)){
                    smallestChildIndex = this.getRightChildIndex(index)
                }
            }
            if(this.storage[index] > this.storage[smallestChildIndex]){
                this.swap(index, smallestChildIndex)
                this.heapifyDownRecursive(smallestChildIndex)
            }
        }
    }
}

let minheap1 = new MinHeap()

minheap1.insert(5)
minheap1.insert(20)
minheap1.insert(10)
minheap1.insert(8)
minheap1.insert(0)
minheap1.insert(15)
minheap1.insert(30)

console.log(minheap1)

let min1 = minheap1.removeMin()
console.log(min1)
console.log(minheap1)


let min2 = minheap1.removeMin()
console.log(min2)
console.log(minheap1)