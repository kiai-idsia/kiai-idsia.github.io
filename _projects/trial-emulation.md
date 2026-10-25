---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: Emulation of clinical trials with real-world data
subtitle: Causal inference to estimate treatment effects in intensive care
description: >-
  Target trial emulation on routinely collected intensive care data, to
  estimate the effect of prone positioning on mortality and how this effect
  varies across patients.
order: 8
status: ongoing
period: Ongoing
role: Methodological development and analysis
partners_short: EOC, SUPSI MeDiTech
partners:
  - Ente Ospedaliero Cantonale (EOC)
  - SUPSI Institute of Digital Technologies for Personalized Healthcare (MeDiTech)
domains: [health]
themes: [causal]
thumbnail: /assets/img/projects/trial-emulation-card.webp
figures:
  - src: /assets/img/projects/trial-emulation.webp
    width: 1600
    height: 483
    alt: Causal graph with confounders, treatment (prone positioning) and outcome (mortality), with plots of estimated mortality reduction.
    caption: >-
      Causal graph of the emulated trial (confounders such as APACHE score,
      lactate and PEEP; treatment, prone positioning; outcome, in-hospital mortality) and
      estimated mortality reduction compared with the reference randomised
      trial, also for different durations of pronation.
publications: [angelotti2026causal]
software: [causal-ai-clinician]
---

## Challenge

Randomised controlled trials provide the strongest evidence on treatment
effects, but they are costly, take years to complete and include selected
populations. Routinely collected intensive care data are abundant, but a
direct analysis is biased by confounding, since the sickest patients are also
the most likely to receive certain treatments.

## Approach

We emulate a target trial on real-world data with causal inference methods
that adjust for measured confounders such as severity scores, lactate and
ventilation parameters. The clinical question is whether prone positioning
reduces in-hospital mortality in patients with given characteristics. We estimate
the effect of pronation, compare it with the result of the original
randomised trial, estimate conditional average treatment effects across
patient characteristics, and compare treatment strategies that differ in the
duration of pronation.

The related publication below applies causal AI to the early haemodynamic
management of septic shock.

## Recognition

A team of researchers from IDSIA and MeDiTech, together with clinicians and
data scientists from EOC and led by Laura Azzimonti, won second place among
fifteen teams at the 7th Digital Critical Care Datathon of the European Society
of Intensive Care Medicine (ESICM) in 2025.
