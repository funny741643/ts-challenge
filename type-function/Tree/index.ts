export interface TreeNode {
    children: TreeNode[] | null;
    [key: string]: any;
}

export type Children = TreeNode["children"];

export type FilterNode = (node: TreeNode) => boolean;

function isNotEmpty(children: Children): boolean {
    return Array.isArray(children) && children.length > 0;
}

export function parseTreeData(
    treeData: TreeNode[] = [],
    filterNode: FilterNode
): TreeNode[]{
    if (treeData.length === 0) {
        return treeData;
    }
    function travel(list: TreeNode[]): Children {
        const array = [];
        const len = list.length;
        for (let i = 0; i < len; i++) {
            const node = list[i];
            const children = node["children"];
            const cloneData = {
                ...node,
                children: isNotEmpty(children) ? travel(children!) : children,
            }
            if (filterNode) {
                if (filterNode(node)) {
                    array.push(cloneData);
                }
            } else {
                array.push(cloneData);
            }
        }
        return array.length > 0 ? array : null;
    }
    const ret =  travel(treeData);
    return ret === null ? [] : ret;
}

