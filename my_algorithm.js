let list_with_nums = [5, 3, 1, 2, 4];

// TODO: Here you should write the algorithm that your peer explain to you
function selectionSort(items) {
    let len = items.length
    for (let i = 0 ; i < (len-1) ; i++) {
        let previous_item = i;

        for (let j = i + 1 ; j < len ; j++ ) {
            if (items[j] < items[previous_item]) {
                previous_item = j;
            }
        }

        if (previous_item !== i) {
            let tmp = items[i];
            items[i] = items[previous_item];
            items[previous_item] = tmp;
        }
    }


}

selectionSort(list_with_nums);

// This part tests your code
const resultDiv = document.querySelector('.result');
resultDiv.innerHTML = list_with_nums.join(', ');