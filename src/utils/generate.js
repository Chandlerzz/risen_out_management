    export function genLabel(a,b){
      if (b ==="") {
       return `${a}`;
      }
      return `${a} (${b})`;
    }
    export function genPlaceHolder(a,b){
      return `请输入${a}(${b})`
    }
