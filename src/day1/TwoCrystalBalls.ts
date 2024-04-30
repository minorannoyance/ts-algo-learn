export default function two_crystal_balls(breaks: boolean[]): number {
    let height = 0
    let increment =  Math.floor(Math.sqrt( breaks.length ));
    while ( height < breaks.length && !breaks[height] )  {
        height+=increment
    }
    
    for (var i = height-increment; i<=height && i<breaks.length ; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1
}