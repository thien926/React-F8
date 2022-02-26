# useState hook

### Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động
được cập nhật (render lại theo dữ liệu).

### Cách dùng
```jsx
import { useState } from ' react'

function Component () {
    const (state, setState] = useState(initState)
    ...
}
```

### Lưu ý
- Component được re-render sau khi 'setState
- Initial state chỉ dùng cho lần đầu                               I
- Set state với callback? (setCounter(prevState => prevState + 1))
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới

https://www.youtube.com/watch?v=rIaFc5MLCcs&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=25
