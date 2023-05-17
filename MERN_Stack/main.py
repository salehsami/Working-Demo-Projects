arr = [1,7,3,6,5]
arr.sort()
print(arr)
min_sum = 0
for i in arr:
    if i < i+1:
        min_sum += i
        # print(i+1)

print(min_sum)