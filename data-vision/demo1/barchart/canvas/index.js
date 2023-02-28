const data = [
    { name: "questions", value: 17 },
    { name: "schools", value: 25 },
    { name: "philosophers", value: 35 },
  ];
// canvas 画布
  const chartWidth = 480;  // 条形图的宽度
  const chartHeight = 300; // 条形图的高度
  const margin = 15; // 条形图的外间距
// canvas 画布的大小
  const containerWidth = chartWidth + margin*2;
  const containerHeight = chartHeight + margin*2;
// 取出所有的name x坐标
// [] new Array(10) Array.from
  const names = Array.from(data, (d)=> d.name); // Array 类数组转化成真是数组， 第二个参数进行遍历
  console.log(names);
  const values = Array.from(data, (d) => d.value);
  console.log(values);
  // 不需要item  _ 来占个位置
  const indices = Array.from(data, (_,i) => i);  // _占位， 我不需要你的值，我要第二个参数的值
  console.log(indices);

  const step = chartWidth / names.length;  // 执行几步
  const barWidth = step * 0.8 // x轴的偏移
  // 横坐标每个name值的绘制的起始值
  const xs = Array.from(indices, (i) => i * step)
  console.log(xs);

  const y = chartHeight;
  const vmax = Math.max(...values);
  const barHeights = Array.from(values, (v) => chartHeight * (v/vmax))
  console.log(barHeights);

  const nameColor = {
    questions:'#5B8FF9',
    philosophers:'#61DDAA',
    schools:'#65789B'
  }

  const colors = Array.from(names, (name) => nameColor[name])
  console.log(colors);