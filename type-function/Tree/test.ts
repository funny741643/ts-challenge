import { parseTreeData, TreeNode } from "."


const list = [
    {
        value: 483,
        text: "健康行业从业者",
        level: 1,
        hidden: true,
        children: [
            {value:  495, text: "注册营养师", level: 2, hidden: false,  children: null},
            {value:  496, text: "心理咨询师/治疗师", level: 2, hidden: true,  children: null},
            {value:  497, text: "康复理疗师", level: 2, hidden: true,  children: null},
        ]
    },
    {
        value: 532,
        text: "文史艺术",
        level: 1,
        hidden: true,
        children: [
            {value: 533, text: "作家/网络作家", level: 2, hidden: true, children: null},
        ]
    }
]

const ret = parseTreeData(list, (node: TreeNode): boolean => node.hidden === false)

console.log(ret)