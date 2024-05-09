export default function quick_sort(arr: number[]): void {
    arr = quick_rec(arr);
}

function quick_rec(arr: number[]): number[] {
    if (arr.length<2) {
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = []
    let right = []
    for (let i =0; i<arr.length; i++){
        if (arr[i]<pivot) {
            left.push(arr[i])
        } else if (arr[i]>pivot) {
            right.push(arr[i])
        }
    }

    left = quick_rec(left)
    right = quick_rec(right)
    
    return left.concat([pivot]).concat(right)
}