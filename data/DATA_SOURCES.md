# 数据源记录

各品牌数据来源，方便后续更新和核实。

## 极核 ZEEHO

- **官网**: https://www.zeehoev.com/cn
- **京东旗舰店**: https://mall.jd.com/index-11635291.html
- **天猫旗舰店**: https://shop185747419.taobao.com
- **数据来源**: 官网 + 搜狗搜索聚合（厂商公告、渠道报价、媒体测试）
- **最后更新**: 2026-05-06

## 巨龙 Julong

- **官网**: http://www.jsjl1199.com/ (江苏巨龙电动车制造有限公司)
- **数据来源**: 搜狗搜索聚合（厂商公告、渠道报价、车队反馈、电商评论）
- **最后更新**: 2026-05-06

## 现有原始车型（样例数据）

- **数据来源**: 项目初始样例数据，虚构品牌
- **品牌**: 星驰、凌越、路勤、小境、锐能、即达

---

## 更新方式

要新增或修改车型数据，只需在 `data/` 目录下创建或编辑 Markdown 文件：

### 车型文件命名规则
```
data/m{数字}-{品牌简称}-{车型}.md
```

### Markdown 格式
每款车型一个 `.md` 文件，YAML 前注 + Markdown 正文：

```markdown
---
id: "m1"
name: "车型名称"
brand: "品牌名"
use: "commute"             # commute | performance | delivery
price: 8999                # 价格（元）
range: 92                  # 续航（km）
topSpeed: 52               # 最高速度（km/h）
battery: "72V 32Ah"        # 电池规格
charge: "快充"              # 快充 | 慢充 | 换电
source: "厂商公告 / 社区口碑"    # 数据来源
score: 86                  # 综合评分（0-100）
heat: 78                   # 热度（0-100）
tags:
  - "标签1"
  - "标签2"
---

# 车型名称

简介正文...
```

### 资讯数据
编辑 `data/news.md`，修改 YAML 前注中的 `items` 列表。

### 城市补能指数
编辑 `data/cities.md`，修改 YAML 前注中的 `cities` 列表。
