---
# Project page at /projects/<file name>/ and card on the Projects page.
#   major: true   large card in "Main projects" (Projects page and research
#                 line pages); the other projects are listed under "Other projects"
#   order         position (main projects first)
#   themes        research lines (ids in _data/themes.yml)
#   domains       application domains (ids in _data/domains.yml)
#   publications  ids in _data/publications.yml
#   software      ids in _data/software.yml
title: K-CLIER
subtitle: Interpretable dimensionality reduction for kidney biology
description: >-
  Transfer learning from single-cell atlases to bulk transcriptomic data,
  producing low-dimensional representations that can be interpreted in terms
  of kidney cell states.
order: 5
major: true
status: completed
period: 2021–2022
funder: Research projects with EOC (CLIER and its follow-up mandate)
role: Principal investigator
partners_short: EOC
partners:
  - Ente Ospedaliero Cantonale (EOC), with Prof. Dr. med. Pietro Cippà, Dr. Anna Rinaldi and Lorenzo Ruinelli
domains: [lifesci, health]
themes: []
thumbnail: /assets/img/projects/kclier-abstract-card.webp
figures:
  - src: /assets/img/projects/kclier-abstract.webp
    width: 1004
    height: 993
    alt: Graphical abstract showing training on a single-cell atlas and bulk RNA-seq data, and application to independent kidney disease data sets.
    caption: >-
      K-CLIER is trained on a single-cell atlas and a large bulk RNA-seq data
      set, then applied to independent data sets in renal disease. Graphical
      abstract from Legouis et al., iScience 2024 (open access).
publications: [legouis2024transfer, malpetti2025protocol, malpetti2026fplier]
software: [kclier-protocol, fplier]
---

## Challenge

Single-cell transcriptomics has refined our understanding of the cellular
composition of tissues and organs. Its use in clinical practice, however,
faces major challenges related to tissue processing and data analysis, while
bulk transcriptomics is easier to obtain but harder to interpret at the level
of cell types and states.

## Approach

K-CLIER builds on PLIER, a matrix factorisation method that aligns latent
variables with prior gene sets. Using transfer learning, it learns a
transformation of bulk gene expression into a low-dimensional representation
whose latent variables correspond to cell types and states of a single-cell
atlas. Prior biological knowledge, in the form of single-cell signatures,
therefore guides the construction of the representation.

## Results

We applied the transformation to data from patients with renal diseases. The
resulting variables were used to predict clinical outcomes and therapy
response in oncological patients and to study rejection in kidney
transplantation, and provided evidence for a central role of altered
proximal tubule cells in kidney fibrosis. The approach extends to other
clinical contexts. A federated version of the underlying method (FPLIER)
allows pathway-level analysis of data distributed across institutions.
