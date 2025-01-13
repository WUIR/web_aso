function args(...params) {
    console.log(params); // params 是一个数组
    for (let param of params) {
        console.log("参数为：" + param);
    }
}

args(13, 41, 9995, 1120.90, "你好", "不定参");