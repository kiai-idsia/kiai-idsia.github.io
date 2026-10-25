---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: SPEARHEAD
subtitle: Federated learning for antibiotic resistance prediction
description: >-
  Machine learning models trained across Swiss hospitals without exchanging
  patient-level data, to support clinicians in the appropriate use of
  antibiotics for urinary tract infections.
order: 3
major: true
status: completed
period: 2022–2025
funder: Innosuisse Flagship (PFFS-21-15)
role: Co-applicant and SUPSI principal investigator
partners_short: Innosuisse Flagship consortium
partners:
  - Consortium of Swiss hospitals, universities and companies, in collaboration with the Innovation Office of the University of Basel
  - Participating hospitals include the university hospitals of Basel, Geneva (HUG) and Lausanne (CHUV)
domains: [health, lifesci]
themes: [federated]
thumbnail: /assets/img/projects/federated-learning-card.webp
figures:
  - src: /assets/img/projects/federated-learning.webp
    width: 1007
    height: 516
    alt: A central server coordinating five client models, each trained locally on the data of one institution.
    caption: >-
      Federated learning: models are trained locally at each institution and
      only model updates are shared with a coordinating server.
publications: [bonesana2024flotta, malpetti2024outlier]
software: [flotta]
links:
  - label: SPEARHEAD project
    url: https://spearhead-project.ch
  - label: FLOTTA on GitHub
    url: https://github.com/idsia/flotta
---

## Challenge

Antimicrobial resistance makes many treatments ineffective against infections
that were previously easy to treat. A more appropriate use of antibiotics,
only when necessary and with narrow-spectrum drugs whenever possible, is one
of the main measures to limit its spread. Clinical data that could support
this decision are distributed across hospitals and cannot easily be pooled.

## Approach

SPEARHEAD brings together a large consortium to apply the lessons learned
during the COVID-19 response to antimicrobial resistance. For the data-driven
part, focused on bacterial urinary tract infections, our group develops
machine learning models trained with federated learning through FLOTTA, the
federated learning framework developed at IDSIA. Each hospital keeps its data
on site and only model updates are exchanged.

## Outcome

The models are intended to be accessible through a web interface, where
clinicians enter patient characteristics and receive suggestions on whether
to prescribe an antibiotic and, if so, which ones are most appropriate.
