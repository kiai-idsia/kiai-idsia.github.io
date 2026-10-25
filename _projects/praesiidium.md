---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: PRAESIIDIUM
subtitle: Physics-informed machine learning for the prediction and prevention of prediabetes
description: >-
  Patient digital twins that combine differential equation models of glucose
  metabolism with clinical and wearable data, to predict individual risk and
  suggest personalised interventions.
order: 2
major: true
status: completed
period: 2023–2025
funder: Horizon Europe (grant 101095672) and the Swiss State Secretariat for Education, Research and Innovation (SERI)
role: Co-applicant and SUPSI principal investigator. IDSIA leads the development of the physics-informed machine learning methods.
partners_short: Horizon Europe consortium
partners:
  - International consortium coordinated by Spindox Labs (Italy), with hospitals in Latvia and in Graz (Austria), research institutions and companies
  - "Collaborators in this work: CNR-IEIIT (Italy, consortium partner), Toronto Metropolitan University and University of Toronto"
domains: [health]
themes: [physics-informed, causal]
thumbnail: /assets/img/projects/praesiidium-digital-twin.webp
figures:
  - src: /assets/img/projects/praesiidium-overview.webp
    width: 1600
    height: 661
    alt: Diagram showing differential equations and patient data combined into a patient digital twin, analysed with physics-informed neural networks and structural causal models.
    caption: >-
      Differential equation models and patient data are combined into a patient
      digital twin. Physics-informed neural networks estimate unobserved
      dynamics, and structural causal models support counterfactual analysis.
  - src: /assets/img/projects/causal-diabetes-graph.webp
    width: 1423
    height: 982
    alt: Causal graph linking lifestyle, BMI, cholesterol, triglycerides, fasting glucose and blood pressure to type 2 diabetes, in the factual and in the counterfactual world.
    caption: >-
      Causal model of type 2 diabetes risk factors learned from electronic
      medical records and expert knowledge, used to simulate a lifestyle
      intervention (factual and counterfactual world).
  - src: /assets/img/projects/praesiidium-counterfactual.webp
    width: 1600
    height: 610
    alt: Differential equations, a causal graph and simulated glucose trajectories under different physical activity plans.
    caption: >-
      Physics-informed counterfactual reasoning: simulated glucose trajectories
      for different physical activity plans. Green, no intervention needed;
      orange, reversion obtained with a personalised plan; red, progression
      that physical activity alone cannot reverse.
publications: [lenatti2025counterfactual, multerer2025pinn, multerer2026reduced, multerer2024surrogate, azzimonti2026causal]
software: [pinn-hidden-insulin, homogen-odes-t2d, mt2d-surrogate, causal-odes-t2d, causal-t2d]
links:
  - label: Project website
    url: https://praesiidium.spindoxlabs.com
---

## Challenge

Prediabetes affects hundreds of millions of adults worldwide and can be
reversed through timely changes in lifestyle. Mathematical models based on
differential equations describe metabolic and inflammatory processes in
detail, but their computational cost makes them impractical for real-time,
patient-specific risk prediction.

## Approach

PRAESIIDIUM combines physics-informed machine learning with multi-scale,
multi-organ mathematical models to build a digital twin of each patient,
using clinical records and data from wearable sensors. Our group develops the
machine learning components:

- physics-informed neural networks that estimate patient-specific risk and
  unobserved quantities, such as insulin dynamics, from glucose data;
- computationally efficient surrogates of complex models of prediabetes
  progression;
- causal models learned from electronic medical records and refined with
  expert knowledge, used to simulate the effect of lifestyle interventions;
- counterfactual analysis that couples differential equations with structural
  causal models, to suggest physical activity plans expected to reduce the
  risk of type 2 diabetes for an individual patient.

## Outcome

The methods are designed to be integrated in a platform for healthcare
professionals and patients, linked to common wearable sensors that monitor
physical activity.
