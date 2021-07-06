// 实现一个find函数，并且find函数能够满足下列条件

// title数据类型为string|null
// userId为主键，数据类型为number

// 原始数据
const data = [
  {userId: 8, title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];

// 查找data中，符合条件的数据，并进行排序
const result = find(data).where({
  "title": /\d$/
}).orderBy('userId', 'desc');

// 输出
[{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];