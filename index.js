class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const depthFirstValue =  (root) => {
//     if(root===null) return[];
//   const result = [];
//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);

//     if (current.left) stack.push(current.left);
//   }

//   return result;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depthFirstValue(a);
// console.log(depthFirstValue(a));

// const depthFirstValues = (root) => {
//   if (root === null) return [];

//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);
//   return [root.val, ...leftValues, ...rightValues];
// };

// const breadthFirstValues = (root) =>{
//     if(root===null) return []
//     const values= []
//     const queue = [root]
//     while(queue.length>0){
//         const current = queue.shift()
//         values.push(current.val)
//         if(current.left !== null) queue.push(current.left)
//         if(current.right !== null) queue.push(current.left)

//     }
//     return values
// }

// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     console.log(current.val);
//     if (current.val === target) return true;

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return false;
// };

// treeIncludes(a, e);
// console.log(treeIncludes(a, "e"));

// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// const treeSum = (root)=>{
//     if(root === null) return 0;

//     return root.val +treeSum(root.left)+ treeSum(root.right);

// }

// const treeSum = (root)=>{
//     if(root === null)return 0
//     let totalSum = 0;
//     const queue = [root]
//     while(queue.length>0){
//      const current =    queue.shift();
//      totalSum += current.val
//      if(current.left!==null)queue.push();
//      if(current.right!==null)queue.push();

//      return totalSum;

//     }
// }

// const treeMinValue = (root) =>{
//     let smallest = Infinity;

//     const stack = [root]

//     while(stack.length>0){
//        const current = stack.pop()

//        if(current.val<smallest)smallest=current.val

//        if(current.left!== null) stack.push(current.left)
//         if(current.right!== null) stack.push(current.right)

//     }

//     return smallest;

// }

// const treeMInValue = (root)=>{
//     if(root==null) return Infinity;

//    const leftMIn =  treeMInValue(root.left);
//    const RightMIn =  treeMInValue(root.right);

//    return Math.min(root.val,leftMIn,RightMIn)

// }

const maxPathSum = (root) => {
    if(root ===null) return - Infinity
  if (root.left === null && root.right === null) return root;
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));

  return root.val + maxChild
};
