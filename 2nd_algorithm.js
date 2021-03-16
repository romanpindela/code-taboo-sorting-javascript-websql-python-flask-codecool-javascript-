function selectionSort(items) {
    let length = items.length;
    for (let i = 0; i < length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }
        if (min !== i) {

            let tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
        }
    }
}
let list_with_nums = [3, 2, 1, 4, 5];
selectionSort(list_with_nums);