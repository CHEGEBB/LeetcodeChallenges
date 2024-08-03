class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    // Step 1: Convert all linked lists to an array
    const values = [];
    for (const list of lists) {
        let current = list;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
    }

    // Step 2: Sort the array
    values.sort((a, b) => a - b);

    // Step 3: Convert the sorted array back to a linked list
    const dummy = new ListNode();
    let current = dummy;
    for (const val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Example usage
const lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];

const mergedList = mergeKLists(lists);

// Helper function to print the linked list
function printLinkedList(list) {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result);
}

printLinkedList(mergedList);  // Output: [1, 1, 2, 3, 4, 4, 5, 6]
