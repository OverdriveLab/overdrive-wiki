---
title: 药物索引
---

## 常用 OD 药
- [安非他酮](/drug/安非他酮)  
- [哌甲酯](/drug/哌甲酯)  
- [金刚烷胺](/drug/金刚烷胺)  
- [美金刚](/drug/美金刚)  
- [普瑞巴林](/drug/普瑞巴林)  
- [苯乙胺](/drug/苯乙胺)  
- [唑吡坦](/drug/唑吡坦)  
- [右美沙芬](/drug/右美沙芬)  

## 不太常用但是也好玩的药
- [6-APB](/drug/6-APB)
- [达索曲林](/drug/达索曲林)  
- [反苯环丙胺](/drug/反苯环丙胺)  
- [姜黄素](/drug/姜黄素)  
- [雷沙吉兰](/drug/雷沙吉兰)  
- [麦角酸二乙酰胺](/drug/麦角酸二乙酰胺)  
- [奈福泮](/drug/奈福泮)  
- [普拉克索](/drug/普拉克索)  
- [沙芬酰胺](/drug/沙芬酰胺)  
- [司来吉兰联合苯乙胺、安非他酮模拟强苯丙胺类兴奋剂的合理使用方法（有风险）](/drug/司来吉兰-苯乙胺-安非他酮)  
- [托莫西汀](/drug/托莫西汀)  
- [肉豆蔻醚](/drug/肉豆蔻醚)  
- [双氢麦角毒碱](/drug/双氢麦角毒碱)  


## 完整索引

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<ul>
  <li v-for="drug in theme.drugs" :key="drug.link">
    <a :href="drug.link">{{ drug.title }}</a>
  </li>
</ul>
