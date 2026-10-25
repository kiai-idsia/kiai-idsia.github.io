---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: GUIDE
subtitle: Machine learning and language models for personalised diabetes management
description: >-
  Interpretable, personalised insights on glucose management during physical
  activity for people with type 1 diabetes, combining machine learning with
  large language models.
order: 9
funder_short: Innosuisse Innovation Cheque
status: completed
period: 2024–2025
funder: Innosuisse Innovation Cheque
role: Co-applicant and principal investigator
partners_short: Enhance-d
partners:
  - Enhance-d
domains: [health]
themes: []
thumbnail: /assets/img/projects/guide-ml-llm-card.webp
figures:
  - src: /assets/img/projects/guide-ml-llm.webp
    width: 1600
    height: 573
    alt: Activity and glucose data from an app are analysed by machine learning models and a large language model that produces a personalised recommendation.
    caption: >-
      Machine learning models analyse glucose and activity data, and a large
      language model turns the results into personalised, actionable advice.
publications: [mitrovic2025guide]
---

## Challenge

Managing type 1 diabetes requires constant attention to glucose levels,
especially during physical activity. Language models open new possibilities
for personalised recommendations based on activity data, but the advice they
generate must be accurate, appropriate to the context and relevant for the
individual.

## Approach

We studied the feasibility of generating personalised and actionable advice
from the physical activity data of people with type 1 diabetes. Machine
learning models extract the relevant patterns, and a set of prompts guides
open-weight language models to produce recommendations, which were evaluated
for medical soundness and personalisation.

## Results

The study showed that the task is feasible, that results depend strongly on
prompt design and on the choice of language model, and that safety and
generalisability require further work.
