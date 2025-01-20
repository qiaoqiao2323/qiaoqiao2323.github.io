---
layout: page
title: Touched by ChatGPT; Using an LLM to Drive Affective Tactile Interaction
description: a project with a background image
img: assets/img/5.png
importance: 3
category: fun
---

Touch is a fundamental aspect of emotion-rich communication, playing a vital role in human interaction and offering significant potential in human-robot interaction. Previous research has demonstrated that a sparse representation of human touch can effectively convey social tactile signals. However, advances in human-robot tactile interaction remain limited, as many humanoid robots possess simplistic capabilities, such as only opening and closing their hands, restricting nuanced tactile expressions. In this study, we explore how a robot can use sparse representations of tactile vibrations to convey emotions to a person. To achieve this, we developed a wearable sleeve integrated with a 5x5 grid of vibration motors, enabling the robot to communicate diverse tactile emotions and gestures. Using chain prompts within a Large Language Model (LLM), we generated distinct 10-second vibration patterns corresponding to 10 emotions (e.g., happiness, sadness, fear) and 6 touch gestures (e.g., pat, rub, tap). Participants (N = 32) then rated each vibration stimulus based on perceived valence and arousal. People are accurate at recognising intended emotions, a result which aligns with earlier findings. These results highlight the LLM’s ability to generate emotional haptic data and effectively convey emotions through tactile signals. By translating complex emotional and tactile expressions into vibratory patterns, this research demonstrates how LLMs can enhance physical interaction between humans and robots.


If you want to know more about this research, please read <a href='https://arxiv.org/pdf/2501.07224'>our paper</a>, which was accepted by the IEEE/ACM HRI 2025.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of frames of LLM generated rub gesture
</div>


