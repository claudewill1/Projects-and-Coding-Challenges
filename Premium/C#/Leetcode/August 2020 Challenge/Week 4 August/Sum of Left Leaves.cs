/*Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int SumOfLeftLeaves(TreeNode root) {
        if(root == null) {
            return 0;
        } else if (root.left != null && root.left.left == null && root.left.right == null){
            return root.left.val + SumOfLeftLeaves(root.right);
        } else {
            return SumOfLeftLeaves(root.left) + SumOfLeftLeaves(root.right);
        }
    }
}