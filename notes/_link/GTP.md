---
title: GTP
description: Guanosine triphosphate, a purine nucleotide substrate required by cGAS to synthesize 2'3'-cGAMP.
type: entity
created: 2026-07-13
updated: 2026-07-13
tags: [compound, nucleotide, purine-nucleotide, cgas-sting]
aliases: [Guanosine Triphosphate]
---

# GTP

## Overview

Guanosine triphosphate (GTP) is a purine ribonucleotide that serves as a fundamental energy and signaling currency in the cell. Beyond its canonical roles in translation, microtubule dynamics, and GTPase switching, GTP is a direct substrate for the nucleotidyltransferase activity of [[cGAS]]. Upon binding dsDNA, [[cGAS]] catalyzes the condensation of [[ATP]] and GTP into the cyclic dinucleotide 2′3′-cyclic GMP-AMP ([[cGAMP]]), the second messenger that activates [[STING]] and initiates the [[cGAS-STING Pathway]]. GTP availability and guanine nucleotide homeostasis are therefore integral to the magnitude of innate immune signaling.

## Biosynthetic Requirement for cGAS

Structural and biochemical studies establish that cGAS functions as a 2′3′-cGAMP synthase, using one molecule of ATP and one molecule of GTP to generate the mixed-linkage cyclic dinucleotide. The reaction proceeds through a GTP-derived GMP moiety that is ligated to the AMP moiety derived from ATP. Because both nucleotides are consumed stoichiometrically, local GTP (and ATP) concentrations can constrain the rate of [[cGAMP]] production. Perturbations that deplete the free GTP pool — such as dysregulated guanine nucleotide metabolism or heightened demand during cellular stress — may attenuate cGAS output, whereas elevated nucleoside availability could in principle amplify signaling.

## Stress Signaling and Relevance to cGAS Activation

GTP depletion is increasingly recognized as a cellular stress signal. Given that cGAS activity is exquisitely sensitive to the availability of its nucleotide substrates, shifts in guanine nucleotide balance may modulate the threshold for [[cGAS-STING Pathway]] activation under conditions of mitochondrial dysfunction, metabolic stress, or proliferation. Because [[mtDNA]] leakage and metabolic reprogramming both accompany neurodegeneration, the coupling between nucleotide metabolism and cGAS activation represents a potential node linking cellular bioenergetics to [[Neuroinflammation]] and [[Inflammation]].

## Documents

  - [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
    - The document explicitly states that cGAS catalyzes synthesis of cGAMP from ATP and GTP, establishing GTP as an essential substrate whose availability influences cGAS-driven cGAMP production and downstream STING activation.

## Connections

  - [[cGAS]]: GTP is a direct nucleotidyltransferase substrate used to synthesize 2′3′-cGAMP
  - [[cGAMP]]: the GMP moiety in cGAMP is GTP-derived
  - [[STING]]: activated indirectly through GTP-dependent cGAMP production
  - [[ATP]]: co-substrate with GTP in the cGAS reaction
  - [[cGAS-STING Pathway]]: GTP availability gates pathway output magnitude
  - [[mtDNA]]: mtDNA leakage triggers the GTP-consuming cGAS reaction in neurodegeneration
  - [[Inflammation]]: GTP-dependent cGAMP drives inflammatory cytokine programs

## Linking Summary

- New links added: [[GTP]], [[cGAS]], [[cGAMP]], [[STING]], [[ATP]], [[cGAS-STING Pathway]], [[mtDNA]], [[Inflammation]], [[Neuroinflammation]]
- Suggested new entity notes to create: [[GTP|guanine nucleotide metabolism]], [[GTP|nucleotidyltransferase]]
- Strong connections to strengthen:
    - [[GTP]] ↔ [[ATP]] (paired cGAS substrates)
    - [[GTP]] ↔ [[cGAMP]] (product relationship)
