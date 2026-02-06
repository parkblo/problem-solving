/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let answer = 0;

    const dfs = (curr, depth) => {
        if (!curr) return;
        answer = Math.max(answer,depth);

        if (curr.left !== null) dfs(curr.left,depth+1);
        if (curr.right !== null) dfs(curr.right,depth+1);
        return;
    }

    dfs(root, 1)
    return answer;
};