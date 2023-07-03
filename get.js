function handleDate() {
    var selectedDate = document.getElementById("datepicker").value;
    console.log("你选择的日期是：" + selectedDate);
    // 在这里可以进行进一步的处理
}

fetch('event.json')
  .then(response => response.json())
  .then(data => {
    // 在这里处理读取到的JSON数据
    console.log(data);
  })
  .catch(error => {
    // 处理读取错误
    console.error('Error:', error);
  });