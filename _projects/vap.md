---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: Early identification of ventilator-associated pneumonia
subtitle: Machine learning on data recorded by mechanical ventilators
description: >-
  A prospective cohort study and machine learning models that support the
  early diagnosis of ventilator-associated pneumonia, using data recorded
  continuously and automatically by mechanical ventilators.
order: 4
major: true
funder_short: Innosuisse
status: completed
period: 2023–2025
funder: Innosuisse, Swiss Innovation Agency (102.522.1 IP-ICT)
role: Co-applicant and SUPSI principal investigator
partners_short: EOC
partners:
  - Ente Ospedaliero Cantonale (EOC), with Prof. Dr. med. Alberto Pagnamenta and Lorenzo Ruinelli
domains: [health]
themes: []
thumbnail: /assets/img/projects/vap-schema-card.webp
figures:
  - src: /assets/img/projects/vap-schema.webp
    width: 1144
    height: 916
    alt: Schema in which data from the mechanical ventilator and patient information feed a machine learning model for the identification of ventilator-associated pneumonia.
    caption: >-
      Data recorded by the ventilator without human intervention, together
      with clinical information on the patient, feed a machine learning model
      for the identification of ventilator-associated pneumonia.
publications: [mitrovic2026vap]
---

## Challenge

Ventilator-associated pneumonia (VAP) is one of the most frequent
hospital-acquired infections in the intensive care unit. It increases morbidity, mortality, the
duration of mechanical ventilation and the length of hospital stay. Current
diagnostic criteria are neither sensitive nor specific enough for an early
diagnosis, with a risk of both antibiotic overuse and delayed treatment.

## Approach

The project differs from previous approaches in three respects:

- data are extracted directly from the mechanical ventilator during
  respiratory support, using a dedicated memory device;
- the models are designed for the time series of ventilator measurements;
- the reference diagnosis is established by experienced intensive care
  physicians with access to the complete patient information, including
  imaging and microbiology results.

## Impact

An earlier and more accurate detection of VAP could allow timely and targeted
treatment, better patient outcomes and significant savings for the healthcare
system.
