# [Day 15] React + Jest API 測試 (AI)

使用 copilot chat 基本上只要下 `/tests` 就可以產出完整的 API 測試。

## API 測試

> /tests

![copilot chat](/img/day15-1.gif)

像 API 這種就算有使用像 `useFetchData()` 等外部引入的函式，會因為本來就需要模擬假的資料，就算直接請 copilot chat 產出測試程式碼，也不會有太大的問題。之前在使用的 copilot chat 產測試之所以需要提供很多條件跟規則，是因為我們需要明確的外部引入的函式內容，才需要這麼做。

來比較一下差異：

![copilot chat](/img/day15-2.jpg)

模擬回傳資料都是 copilot chat 自動產生的，所以跟原本寫的會有些差異，但除此之外，基本上就是一模一樣的。

下一篇來介紹一個好用的 mock server [MSW](https://mswjs.io/)
