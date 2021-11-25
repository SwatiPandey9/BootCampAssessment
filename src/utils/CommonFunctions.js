// const sectionData = []
const getSectionListData = data => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  console.log(data);
  let sectionData = [];
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (alphabet[i] == data[j].first_name[0]) {
        sectionData = [...sectionData, {title: alphabet[i], data: data[j]}];
      }
    }
    // console.log(sectionData)
  }
  console.log(sectionData)
  return sectionData;
  
};

export default {
  getSectionListData,
};
