export default function quick_sort(arr: number[]): void {
    
    quick_rec(arr, 0, arr.length, 0);


}

function quick_rec(arr: number[], min: number, max: number, depth: number): void {
    if (min>=max) {
        return
    }

    var pivotVal = arr[max-1]
    var pivotIndex = min-1
    for (var i = min; i<max-1; i++) {
        if ( arr[i]<pivotVal ) {
            pivotIndex++
            var temp = arr[pivotIndex]
            arr[pivotIndex] = arr[i]
            arr[i] = temp
        }
    }
    pivotIndex++
    var temp = arr[pivotIndex]
    arr[pivotIndex] = pivotVal
    arr[max-1] = temp

    quick_rec(arr, min, pivotIndex, depth+1)
    quick_rec(arr, pivotIndex+1, max, depth+1)

}
