function insertionSort(unsortedList) {
    let len = unsortedList.length;
    for (let i = 1; i < len; i++) {
        let tmp = unsortedList[i];

        let j;
        for (j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            unsortedList[j + 1] = unsortedList[j];
        }

        unsortedList[j + 1] = tmp;
    }
}

let list_with_nums = [5, 3, 1, 2, 4];
insertionSort(list_with_nums);
