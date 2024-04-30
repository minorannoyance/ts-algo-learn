export default function bubble_sort(arr: number[]): void {
    let sorted: boolean
    do {
        sorted = true;
        for (let i:number = 0; i<arr.length-1; i++) {
            if (arr[i]>arr[i+1]) {
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1] = temp
                sorted = false
            }
        }
    } while (!sorted)

}