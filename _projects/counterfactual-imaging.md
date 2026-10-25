---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: Counterfactual image editing
subtitle: Deep learning and causal inference to predict the effect of treatments on chest X-rays
description: >-
  Generative models with a causal structure that predict how the radiological
  presentation of pulmonary oedema in intensive care patients would change
  under a different fluid therapy.
order: 7
status: ongoing
period: Ongoing
role: Methodological development
partners_short: IRCCS Humanitas Research Hospital
partners:
  - IRCCS Humanitas Research Hospital, Milan
domains: [health]
themes: [causal]
thumbnail: /assets/img/projects/counterfactual-xray-card.webp
figures:
  - src: /assets/img/projects/counterfactual-xray.webp
    width: 1600
    height: 540
    alt: A chest X-ray is encoded by a neural network into a representation structured by a causal graph of clinical variables, and decoded into a counterfactual X-ray.
    caption: >-
      A chest X-ray is mapped to a representation structured by a causal graph
      of clinical variables (such as fluid intake, diuretics and oedema). An
      intervention on the treatment variables produces a counterfactual image
      for the same patient.
publications: []
---

## Challenge

In intensive care, fluid therapy is adjusted on the basis of clinical and
radiological signs, such as the oedema visible on chest X-rays. Clinicians
would benefit from tools that show how the image of an individual patient
would look under a different treatment. Standard deep learning models capture
statistical associations and cannot answer this type of counterfactual
question.

## Approach

We combine deep generative models of medical images with a causal graph that
encodes clinical knowledge about patient characteristics, treatments and
outcomes. The encoder infers patient-specific latent factors from the observed
image. An intervention on a treatment variable, such as the volume of
administered fluids, is propagated through the causal graph, and the decoder
generates the counterfactual image of the same patient.

## Expected impact

A decision-support tool that allows clinicians to visualise the predicted
effect of treatment choices on the individual patient, and a general
framework for counterfactual reasoning on complex data such as images.
