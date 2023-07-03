import json

# 读取原始JSON文件
with open('NitromeEvent.json', 'r') as file:
    data = json.load(file)

# 修改或处理数据
# 这里可以根据需要对数据进行操作或处理

# print(data[0])

out = [dict() for _ in range(12)]

for i in range(12):
    for j in range(1, 32):
        date = f'{i+1}月{j}日'
        l = []
        for entry in data:
            if entry["date"] == date:
                l.append((entry["year"], entry["event"]))
        if l:
            out[i][j] = l

# print(out)

# 保存为新的JSON文件
with open('event.json', 'w', encoding='utf-8') as file:
    json.dump(out, file, ensure_ascii=False)

print("文件保存成功！")
