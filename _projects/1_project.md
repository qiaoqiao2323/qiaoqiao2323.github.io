---
layout: page
title: Tactile interaction Influences risk-taking behaviour and attitude.
description: Qiaoqiao Ren and Tony Belpaeme 
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Tactile interaction plays an essential role in human-to-human interaction. People gain comfort and support from tactile interactions with others and touch is an important predictor for trust. While touch has been explored as a communicative modality in HCI and HRI, we here report on two studies in which touching a social robot is used to regulate people’s stress levels and consequently their actions. In the first study, we look at whether different intensities of tactile interaction result in a physiological response related to stress, and whether the interaction impacts risk-taking behaviour and trust. We let 38 participants complete a balloon analogue risk task (BART), a computer-based game that serves as a proxy for risk-taking behaviour. In our study, participants are supported by a robot during the BART task. The robot builds trust and encourages participants to take more risk. The results show that affective tactile interaction with the robot increases participants’ risk-taking behaviour, but gentle affective tactile interaction increases comfort and lowers stress whereas high-intensity touch does not. We also find that male participants exhibit more risk-taking behaviour than females while being less stressed. Based on this experiment, a second study is used to ascertain whether these effects are caused by the social nature of tactile interaction or by the physical interaction alone. For this, instead of a social robot, participants now have a tactile interaction with a non-social device. The non-social interaction does not result in any effect, leading us to conclude that tactile interaction with humanoid robots is a social phenomenon rather than a mere physical phenomenon.


If you want to know more about this research, <a href='https://link.springer.com/article/10.1007/s12369-024-01191-5'>our paper</a> was accepted by the International Journal of Social Robotics.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
