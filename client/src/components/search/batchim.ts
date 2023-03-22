function batchim(name: string) {
  //name의 마지막 음절의 유니코드(UTF-16)
  const charCode = name.charCodeAt(name.length - 1);

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    //0이면 받침 없음 -> 가
    return "가";
  }
  //1이상이면 받침 있음 -> 이
  return "이";
}

export default batchim;
