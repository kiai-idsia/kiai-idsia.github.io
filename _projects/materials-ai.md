---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: AI for materials characterisation
subtitle: Physics-informed machine learning for the prediction of material properties
description: >-
  Physics-informed machine learning models for the prediction of the
  properties of industrial materials, in a research mandate with an
  international manufacturing company.
order: 1
major: true
status: ongoing
period: 2025–2027
funder: Direct research mandate
role: Principal investigator
partners_short: Industrial research mandate
partners:
  - International manufacturing company (materials research and development)
domains: [industry]
themes: [physics-informed]
thumbnail: /assets/img/projects/materials.svg
figures:
  - src: /assets/img/projects/materials.svg
    width: 800
    height: 500
    alt: Illustration of measured material property curves fitted by physics-informed models, with a schematic material microstructure.
    caption: >-
      Illustration. Physics-informed models describe how the properties of a
      material evolve, consistently with the underlying physical and chemical
      processes.
publications: []
---

## Challenge

The development of new materials relies on extensive laboratory testing to
characterise how composition and processing conditions affect the final
properties. Models learned only from data need large data sets and may
produce predictions that are inconsistent with the underlying physics and
chemistry.

## Approach

We develop physics-informed machine learning models that combine knowledge of
the physical and chemical processes involved with experimental measurements,
so that reliable predictions can be obtained from a limited number of tests.

## Expected impact

A more efficient characterisation of new materials, with fewer experiments
and with models that materials scientists can interpret.
