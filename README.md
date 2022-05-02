# 建议语言代码表

# 1. 前言

鉴于语言代码表这个东西，涉及到中文的资料，都有一定的问题（简单来说不合我自己的胃口）  
所以决定自己造一个简单的轮子。

## 2. 描述

可以通过 `zh-Hans` 这样的代码获得 `中文（简体）` 这样的值。

### 2.1. 支持的语言

* 英语
* 中文
* 本地语言

### 2.2 支持的功能

* 检查是否是合法的代码

```
isValidCode("xx") // false
isValidCode("zh") // true
```

* 获得代码列表

```
getCodeList()
// ["en", "zh" ... ]
```

* 获得所有名称
* 获得代码列表

```
isValidCode("xx") // false
isValidCode("zh") // true
```

* 根据代码获得名称
```
getNativeName("en") // English
getNativeName("zh") // 中文
getNativeName("zh-Hans") // 中文（简体）
```

* 获得代码列表

```
getAllNaticeNames()
// [{ "name":"en", "value": "English" }, {"name“:"zh", "value": "Chinese" } ... ]
```

## 3. 参考资料（不分先后）

* https://www.wenjiangs.com/language-codes
* https://zh.wikipedia.org/wiki/ISO_639-1%E4%BB%A3%E7%A0%81%E8%A1%A8
* http://doc.chacuo.net/iso-3166-1
* https://www.w3.org/International/articles/bcp47/