---
title: 药物索引
---

## 归类描述的药物索引
- [阿片类药物](/drug/阿片类药物)
- [加巴喷丁类](/drug/加巴喷丁类药物)
- [胆碱酯酶抑制剂](/drug/胆碱酯酶抑制剂)
- [茶碱类药物](/drug/茶碱类药物)
- [益智药](/drug/益智药)
- [谵妄剂](/drug/谵妄剂)
- [NMDA相关](/drug/NMDA受体)、[抗抑郁潜力的NMDA拮抗剂](/drug/NMDA抗抑郁)
- [复方制剂系列](/drug/复方系列)
- [苯二氮䓬类药物](/drug/苯二氮䓬类药物)、[巴比妥类药物](/drug/巴比妥类药物)
- [烷胺类药物](/drug/烷胺类药物)

## 完整索引

本站目前共收录 {{ site.drugs | size }} 种药物。

<ul>
{% assign drugs_sorted = site.drugs | sort: "title" %}
{% for drug in drugs_sorted %}
  <li>
    <a href="{{ drug.url | relative_url }}">
      {{ drug.title }}
    </a>
  </li>
{% endfor %}
</ul>
