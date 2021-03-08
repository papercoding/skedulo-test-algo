function merge(array) {
  const sortedArray = array.sort((a, b) => a.startPx - b.startPx);
  return sortedArray.reduce((merged, item) => {
    if (!merged.length || merged[merged.length - 1].endPx < item.startPx) {
      merged.push(item);
    } else {
      const lastItem = merged[merged.length - 1];
      lastItem.endPx = Math.max(lastItem.endPx, item.endPx);
    }
    return merged;
  }, []);
}

function main() {
  const array = [
    { startPx: 10, endPx: 30 },
    { startPx: 55, endPx: 65 },
    { startPx: 35, endPx: 50 },
    { startPx: 20, endPx: 40 },
    { startPx: 60, endPx: 70 },
  ];
  const result = merge(array);
  console.log("TCL: main -> result", result);
}

main();
