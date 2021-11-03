const CONSECUTIVE_PAIR = 4;

const numberString = `7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450`

const test = numberString.split('').map(Number);


const findSum = (index: number, sequenceTotal: number = CONSECUTIVE_PAIR, total: number = 1) => {
  if(sequenceTotal === 0)
     return total;

  return findSum(index + 1, sequenceTotal - 1, total * test[index]);
}

const getLastZeroIndex = (index: number): number | undefined => {
  for(let j = index; j > index - CONSECUTIVE_PAIR; j--)
  {
    if(test[j] === 0){
      return j;
    }
  }
}

const getSequence = (index: number) => {
  const output = []
  for(let i = index; i < CONSECUTIVE_PAIR + index; i++)
  {
    output.push(test[i])
  }
  return output;
}

//valueAtStartIndex: number, 
const dic = {}

const indexTotalPair = {index: 0, total: findSum(0)};
dic[0] = {...indexTotalPair};
const findLargestProduct = () => {
  for(let i = 1; i < test.length - (CONSECUTIVE_PAIR - 1); i++)
  {
    let nextVal = test[i + CONSECUTIVE_PAIR - 1];
    if(nextVal <= 0)
    {
      i += CONSECUTIVE_PAIR;
      let zeroIndex = getLastZeroIndex(i)
      if(zeroIndex === undefined) {
        i -= CONSECUTIVE_PAIR - 1
      }
      while(zeroIndex !== undefined){
        i = zeroIndex + CONSECUTIVE_PAIR;
        if((i + CONSECUTIVE_PAIR - 1) >= test.length){
          break;
        }
        zeroIndex = getLastZeroIndex(i)
        if(zeroIndex === undefined)
        {
          i -= CONSECUTIVE_PAIR - 1
        }
      }
      dic[i] = {index: i, total: findSum(i), sequence: getSequence(i)}
      continue;
    }
    const total = (dic[i - 1].total / test[i - 1]) * nextVal;
    dic[i] = {index: i, total, sequence: getSequence(i)}
    if(total > indexTotalPair.total)
    {
      indexTotalPair.index = i;
      indexTotalPair.total = total;
    }
  }
}
const getPrintOutput = () => {
  const output = []

  console.log(`Start Index: ${indexTotalPair.index}, End Index ${indexTotalPair.index + CONSECUTIVE_PAIR - 1}, Total: ${indexTotalPair.total}`)
  for(let i = indexTotalPair.index; i < CONSECUTIVE_PAIR + indexTotalPair.index; i++)
  {
    output.push(test[i])
  }
  console.log(output)
}

findLargestProduct();
//console.log(dic)
getPrintOutput();