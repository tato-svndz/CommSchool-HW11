alert(null || 2 || undefined); // 2 (truthy)
alert(1 && null && 2); // null (falsy)
alert(null || 2 && 3 || 4); // 3 (truthy)
alert(!1 && !2 || 3); // 3 (truthy)
