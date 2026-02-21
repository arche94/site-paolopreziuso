---
layout: layout.njk
title: About Me
---

# About Paolo

Software developer in Milan.

- Eleventy enthusiast
- Loves Sass/Pug

> Custom quote here.

{% from "./_includes/components/card.njk" import card %}

<div class="row">
  <div class="col-6">
    {{ card("Skills", "Software developer specializing in Eleventy, Sass, and Bootstrap.", "https://picsum.dev/400/300") }}

  </div>
  <div class="col-6">
    {{ card("Projects", "Personal site built with static generation.", "", "default") }}
  </div>
</div>
