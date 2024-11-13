function mincost(arr)
{ 
//write your code here
	arr.sort((a,b)=> a-b);

	  let totalCost = 0;
	while (arr.length>1) {
		  const first = arr.shift();
        const second = arr.shift();

		  const cost = first + second;
		 totalCost += cost;

		 arr.push(cost);
		  arr.sort((a, b) => a - b);
		 
	}
// return the min cost
  return totalCost;
}

module.exports=mincost;
