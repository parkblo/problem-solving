/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const traverse = (curr, seq) => {
        // base case: is leaf?
        if (curr.left === null && curr.right === null) {
            seq.push(curr.val);
            return;
        }

        if(curr.left !== null) traverse(curr.left, seq);
        if(curr.right !== null) traverse(curr.right, seq);
    }

    const seq1 = [];
    const seq2 = [];
    traverse(root1, seq1);
    traverse(root2, seq2);

    if (JSON.stringify(seq1) !== JSON.stringify(seq2)) return false;
    return true;
};