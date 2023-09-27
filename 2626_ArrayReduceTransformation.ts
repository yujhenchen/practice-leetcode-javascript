type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length === 0) return init;

    let accum = init;
    for (let i = 0; i < nums.length; i += 1) {
        accum = fn(accum, nums[i]);
        //console.log(accum);
    }
    return accum;
};
