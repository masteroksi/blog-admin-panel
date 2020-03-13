// function findUniq(arrOfNumbers) {
//     const countOfRepeading = new Map();
//
//     arrOfNumbers.forEach((itemNumber) => {
//         if (countOfRepeading.has(itemNumber)) {
//             const count = countOfRepeading.get(itemNumber);
//             countOfRepeading.set(itemNumber, count + 1);
//         } else {
//             countOfRepeading.set(itemNumber, 1);
//         }
//     });
//     for (let [itemNumber, repeadCount] of countOfRepeading) {
//         if (repeadCount === 1) {
//             return itemNumber;
//         }
//     }
//     return null;
// }
//
// ===================================================
//
// function flatter(arr) {
//     return arr.flat(Infinity);
// }
//
// flatter(
//     [1, 2, [3, 4, [5]], 6, [[7, [8]], 9]],
// );
//
// function flatter2(arr) {
//     const arrCopy = arr.slice();
//     const result = [];
//     while (arrCopy.length) {
//         const next = arrCopy.pop();
//         if (Array.isArray(next)) {
//             arrCopy.push(...next);
//         } else {
//             result.push(next);
//         }
//     }
//     return result.reverse();
// }
//
// flatter2([1, 2, [3, 4, [5]], 6, [[7, [8]], 9]]);

// ==================================
//
// function zeros (n) {
//     let factorial = BigInt(1);
//     let i = 1;
//     while (i <= n) {
//         factorial *= BigInt(i);
//         i++;
//     }
//     const factorialStr = factorial.toString();
//     let j = factorialStr.length - 1;
//     let result = 0;
//     while (j) {
//         if (factorialStr[j] === '0') {
//             result++;
//         } else {
//             break;
//         }
//         j--;
//     }
//     return result;
// }
//
// zeros(30);

// 3800 + 4000 + 4500

// =========================

class PaginationHelper {
    constructor(items, countPerPage) {
        this.items = items;
        this.countPerPage = countPerPage;
        this.pagesCount = Math.ceil(items.length / countPerPage);
        this.pages = items.reduce((result, item, index) => {
            if (index === 0 || index % countPerPage === 0) {
                result[result.length] = [];
            }
            result[result.length - 1].push(item);
            return result;
        }, []);
    }

    pageCount() {
        return this.pagesCount;
    }

    itemCount() {
        return this.items.length;
    }

    pageItemCount(pageIndex) {
        return this.pages[pageIndex] ? this.pages[pageIndex].length : -1;
    }

    pageIndex(itemIndex) {
        const indexOnPage = itemIndex % this.countPerPage;
        const itemPage = Math.floor(itemIndex / this.pagesCount) - 1;

        return this.pages[itemPage] && this.pages[itemPage][indexOnPage] ? itemPage : -1;
    }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper);
console.log(helper.pageCount(), 2); //should == 2
console.log(helper.itemCount(), 6); //should == 6
console.log(helper.pageItemCount(0), 4); //should == 4
console.log(helper.pageItemCount(1), 2); // last page - should == 2
console.log(helper.pageItemCount(2), -1); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5), 1); //should == 1 (zero based index)
console.log(helper.pageIndex(2), 0); //should == 0
console.log(helper.pageIndex(20), -1); //should == -1
console.log(helper.pageIndex(-10), -1); //should == -1

// console.log(5 % 4);
// console.log(5 / 2);
