---
title: 药物索引
---

## 常用od药
- [右美沙芬](/drug/DXM/),[普瑞巴林](/drug/PR80/)，[金刚烷胺](/drug/ATD),[美金刚](/drug/MMT)、哌甲酯、安非他酮，[苯乙胺](/drug/PEA/)，[司来吉兰](/drug/%E5%8F%B8%E6%9D%A5%E5%90%89%E5%85%B0-%E8%8B%AF%E4%B9%99%E8%83%BA-%E5%AE%89%E9%9D%9E%E4%BB%96%E9%85%AE/)（搭配苯乙胺一起，下面有教程)[二氢可待因](https://psychonautwiki.org/wiki/Dihydrocodeine)
### 不太常用但是也好玩的药
- [6-APB](/drug/6-APB)（很好玩）
[奈福泮](/drug/NFP)、[达索曲林](/drug/达索曲林)
4-氟哌甲酯，吗氯贝胺、托洛沙酮，[托莫西汀](/drug/ATX)、[反苯环丙胺](/drug/TCP)[雷沙吉兰](/drug/RSGL)、[沙芬酰胺](/drug/沙芬酰胺)[反苯环丙胺](/drug/TCP)[姜黄素](/drug/姜黄素)、[胡椒碱](/drug/姜黄素#药代动力学)、[肉豆蔻醚](/drug/肉豆蔻醚)、利奈唑胺、呋喃唑酮、[双氢麦角毒碱](/drug/USAN)、[麦角酸二乙酰胺](/drug/LSD)[普拉克索](/drug/普拉克索)
- [关于司来吉兰联合苯乙胺、安非他酮模拟强苯丙胺类兴奋剂的合理使用方法（有风险）](/drug/司来吉兰-苯乙胺-安非他酮)
- 哌甲酯缓释片的娱乐方法，https://overspeed-wiki.github.io/%E5%93%8C%E7%94%B2%E9%85%AF%E7%BC%93%E9%87%8A%E7%89%87%E7%9A%84%E5%A8%B1%E4%B9%90%E6%96%B9%E6%B3%95/

## 完整索引

本站目前共收录 {{ site.drug | size }} 种药物。

<ul>
{% assign drugs_sorted = site.drug | sort: "title" %}
{% for drug in drugs_sorted %}
  <li>
    <a href="{{ drug.url | relative_url }}">
      {{ drug.title }}
    </a>
  </li>
{% endfor %}
</ul>
