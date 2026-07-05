---
type: entity
category: biomarker
entity_type: "Biomarker"
created: 2024-01-01
updated: 2024-07-04
---

# DNAmGrimAge

**DNAmGrimAge** is a second-generation [[Epigenetic Clock|epigenetic clock]] developed by [[Steve Horvath]] and colleagues (2019) that predicts biological age and mortality risk based on [[DNA Methylation]] levels at 1,030 CpG sites. It outperforms first-generation clocks by integrating methylation surrogates for plasma protein levels and smoking pack-years, capturing both intrinsic aging and exposome effects.

## How It Works

DNAmGrimAge is a composite of 12 age-related surrogates:

- **Plasma protein surrogates:** DNAm-based estimates of [[ADM]], [[B2M]], [[Cystatin C]], [[GDF15]], [[GSTP1]], [[Leptin]], [[PACKYRS]], [[PECAM1]], [[SAA1]], [[SAA2]], [[TIMP1]], [[PAI-1]].
- **Smoking pack-years:** DNAm estimator of cumulative tobacco exposure (PACKYRS).
- **Chronological age:** Used as an additive component.

These surrogates are trained on large reference datasets (plasma proteome + DNA methylation from the same individuals) and then integrated into a single mortality predictor.

## Predictive Performance

| Metric | DNAmGrimAge | First-generation clocks (Horvath, Hannum) |
|---|---|---|
| **Correlation with chronological age** | r = 0.91–0.97 | r = 0.91–0.98 |
| **Mortality prediction (Cox C-index)** | 0.65–0.72 | 0.55–0.60 |
| **Association with age-related disease** | Strong (CVD, cancer, dementia) | Moderate |
| **Response to lifestyle interventions** | Detectable (diet, exercise) | Weak or null |

## GrimAge Acceleration

The difference between DNAmGrimAge and chronological age — *GrimAge acceleration* — is a robust predictor of all-cause mortality and incident age-related disease. One standard deviation increase in GrimAge acceleration is associated with a ~30% increase in mortality hazard, independent of traditional risk factors.

## Senescence and Rejuvenation Context

- **Senescent cell burden:** GrimAge acceleration correlates with tissue [[p16INK4A]] expression and [[SASP]] factor levels, linking the clock to [[Cellular Senescence|senescence]].
- **[[Partial Reprogramming]]:** In vitro cyclic [[OSKM]] expression in human cells resets DNAmGrimAge to a younger state.
- **[[Caloric Restriction]]:** Long-term CR in primates reduces GrimAge acceleration.
- **Senolytics:** Early clinical trials ([[Dasatinib]]+[[Quercetin]]) show trends toward reduced GrimAge age in some participants.

## Experimental Considerations

**Data generation:** [[Illumina Infinium MethylationEPIC]] (850K) array is the standard platform. Custom panel targeting the 1,030 GrimAge CpGs is now available (GrimAge targeted panel).

**Limitations:**
- Population-specific: Trained primarily on European-ancestry cohorts; performance in non-European populations is less validated.
- Cross-sectional: Best for cross-sectional age estimation; longitudinal intervention studies are still emerging.
- Proteomic surrogates: Not direct protein measurements; DNAm surrogates may miss post-translational regulation.

### Linking Summary:
- New links added: [[notes/_link/Aging]], [[Epigenetic Clock]], [[notes/_link/Senescence]], [[notes/_link/Biomarkers]], [[SASP]], [[Partial Reprogramming]], [[Caloric Restriction]], [[Senolytic Drugs]]
- Suggested new entity notes to create: [[PhenoAge]], [[GrimAge2]], [[Horvath Clock]], [[Hannum Clock]]
- Strong connections to strengthen: [[DNAmGrimAge]] ↔ [[Epigenetic Clock]], [[DNAmGrimAge]] ↔ [[notes/_link/Aging]]
