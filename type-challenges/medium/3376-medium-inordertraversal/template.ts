interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null, U extends TreeNode = NonNullable<T>> = T extends null
    ? []
    :[...InorderTraversal<U['left']>, U['val'], ...InorderTraversal<U['right']>]