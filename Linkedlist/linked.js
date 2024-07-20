/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0); // Dummy node
    let current = dummy; // Pointer to traverse the result list
    let carry = 0; // Initialize carry
  
    // Traverse both lists
    while (l1 !== null || l2 !== null) {
        // Get the values of the current nodes of l1 and l2, or 0 if the node is null
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        
        // Calculate sum of the current digits and the carry
        let sum = carry + x + y;
        
        // Update carry for the next digit
        carry = Math.floor(sum / 10);
        
        // Create new node with the last digit of sum
        current.next = new ListNode(sum % 10);
        
        // Move to the next node in the result list
        current = current.next;
        
        // Move to the next nodes in l1 and l2 if available
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
  
    // If there is a remaining carry, add it as a new node
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
  
    // Return the next node of the dummy node, which is the head of the result list
    return dummy.next;
}
