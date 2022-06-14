interface CalcData {
  amount: number;
  rateFrom: number;
  rateTo: number;
}

const calcRate = (calcData: CalcData) => {
  const { amount, rateFrom, rateTo } = calcData;
  const result: number = (Number(amount) * Number(rateFrom)) / Number(rateTo);
  return result;
};

export default calcRate;
