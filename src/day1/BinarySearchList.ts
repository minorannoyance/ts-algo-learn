export default function bs_list(haystack: number[], needle: number): boolean {
    let infGuard = 100000; 
    let left = 0
    let right = haystack.length - 1
    do {
        let middle = Math.floor(left + (right-left)*0.5 );
        if (haystack[middle]===needle) {
            return true;
        } else if (needle>haystack[middle]) {
            left=middle+1;
        } else {
            right=middle;
        }

        //console.log(haystack, needle, left, right, middle)
        infGuard--;
        if (infGuard<0) {
            const msg = `Timeout ${left} ${right} ${middle} ${needle} ${haystack}`;
            throw Error(msg)
        }
    } while (left!=right)

    return haystack[left]===needle
}

