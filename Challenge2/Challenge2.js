/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = new ListNode(0, head);
    let pointer1 = current;
    let pointer2 = current;

    // Move pointer1 n steps ahead
    for (let i = 0; i < n; i++) {
        pointer1 = pointer1.next;
    }
    // Move both pointers until pointer1 reaches the end
    while (pointer1.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    // Remove the node at pointer2.next
    pointer2.next = pointer2.next.next;
    // Return the new head
    return current.next;
    
    
};