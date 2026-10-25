---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: MitraL-AI
subtitle: Machine learning to support shared decision-making in mitral valve repair
description: >-
  A machine learning score that predicts all-cause mortality up to 48 months
  after transcatheter edge-to-edge repair of the mitral valve, to support
  shared decision-making between clinicians and patients.
order: 10
status: completed
period: 2023–2025
role: Statistical analysis and machine learning
partners_short: EOC, USI
partners:
  - Ente Ospedaliero Cantonale (EOC) and Università della Svizzera italiana (USI), with Prof. Dr. med. Giovanni Pedrazzini and Dr. med. Luigi Biasco
  - Clinical centres in Switzerland, Italy and the United States
domains: [health]
themes: []
thumbnail: /assets/img/projects/mitral-score.svg
publications: [biasco2026mitral]
---

## Challenge

Mitral transcatheter edge-to-edge repair (M-TEER) is a minimally invasive treatment
for patients with primary or secondary mitral regurgitation. Patient
selection and shared decision-making require a reliable estimate of the
long-term prognosis after the procedure.

## Approach

Using data collected in clinical centres in Switzerland, Italy and the United
States, we developed a machine learning score that predicts all-cause
mortality at 12, 24, 36 and 48 months after the procedure, and used
explainability methods to study how the importance of each clinical variable
changes over the follow-up period.

## Impact

A transparent risk score that clinicians and patients can use together when
deciding on the treatment.
