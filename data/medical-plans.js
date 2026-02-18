// ============================================================
// Medical Aid Plans Data — NFS Insure Consultant
// ============================================================
// Last updated: 2026-02-17
//
// HOW TO UPDATE:
// 1. Open this file in any text editor
// 2. Find the provider/plan you want to update
// 3. Change the values (keep the quotes and commas)
// 4. Save the file
// 5. Refresh medicalaid.html in your browser
//
// To add a new plan, copy an existing plan block and change
// the values. Make sure the "id" is unique within its provider.
// ============================================================

var medicalPlansData = {
  "meta": {
    "version": "1.0",
    "lastUpdated": "2026-02-17",
    "currency": "ZAR",
    "disclaimer": "All plan details are based on 2025/2026 published rates and are subject to change. Contact the scheme directly for the most current information."
  },
  "providers": [
    {
      "key": "discovery_health",
      "name": "Discovery Health",
      "icon": "fas fa-heartbeat",
      "selectId": "scheme1",
      "plans": [
        {
          "id": "Executive",
          "name": "Executive",
          "category": "Comprehensive",
          "premium": "R11,430",
          "hospital": "Unlimited, any private hospital (private ward up to R2,800/day)",
          "dayToDay": "MSA + Unlimited Above Threshold Benefit + Day-to-day Extender",
          "gpVisits": "Funded from MSA; Extender covers GP after MSA depleted",
          "chronic": "27 CDL + Additional Disease List conditions",
          "network": "Open — any provider"
        },
        {
          "id": "ClassicComprehensive",
          "name": "Classic Comprehensive",
          "category": "Comprehensive",
          "premium": "R9,298",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "MSA + Limited Above Threshold Benefit + Day-to-day Extender",
          "gpVisits": "Funded from MSA; Extender covers GP after MSA depleted",
          "chronic": "27 CDL + 22 Additional Disease List conditions",
          "network": "Open — any provider"
        },
        {
          "id": "ClassicSmartComprehensive",
          "name": "Classic Smart Comprehensive",
          "category": "Comprehensive",
          "premium": "R7,945",
          "hospital": "Unlimited, Smart Hospital Network",
          "dayToDay": "MSA + Above Threshold Benefit + Personal Health Fund",
          "gpVisits": "R70 co-payment per Smart Network GP visit",
          "chronic": "27 CDL + 22 Additional Disease List conditions",
          "network": "Smart Network"
        },
        {
          "id": "ClassicPriority",
          "name": "Classic Priority",
          "category": "Priority",
          "premium": "R5,796",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "MSA + Limited Above Threshold Benefit + Day-to-day Extender",
          "gpVisits": "Funded from MSA; Extender covers GP after MSA depleted",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Open — any provider"
        },
        {
          "id": "EssentialPriority",
          "name": "Essential Priority",
          "category": "Priority",
          "premium": "R4,981",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "MSA + Limited Above Threshold Benefit + Personal Health Fund",
          "gpVisits": "Funded from MSA",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Open — any provider"
        },
        {
          "id": "ClassicSaver",
          "name": "Classic Saver",
          "category": "Saver",
          "premium": "R4,535",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "MSA + Personal Health Fund + Day-to-day Extender",
          "gpVisits": "Funded from MSA",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Open — any provider"
        },
        {
          "id": "CoastalSaver",
          "name": "Coastal Saver",
          "category": "Saver",
          "premium": "R3,797",
          "hospital": "Unlimited, coastal province hospitals",
          "dayToDay": "MSA + Personal Health Fund",
          "gpVisits": "Funded from MSA",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Coastal provinces only"
        },
        {
          "id": "EssentialSaver",
          "name": "Essential Saver",
          "category": "Saver",
          "premium": "R3,634",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "MSA (10% of contribution) + Personal Health Fund",
          "gpVisits": "Funded from MSA",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Open — any provider"
        },
        {
          "id": "ClassicDeltaSaver",
          "name": "Classic Delta Saver",
          "category": "Saver",
          "premium": "R3,624",
          "hospital": "Unlimited, Delta network hospitals",
          "dayToDay": "MSA + Personal Health Fund",
          "gpVisits": "Funded from MSA",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Delta Network"
        },
        {
          "id": "ClassicSmartSaver",
          "name": "Classic Smart Saver",
          "category": "Saver",
          "premium": "R3,350",
          "hospital": "Unlimited, Smart Hospital Network",
          "dayToDay": "MSA (R7,560 family of 4) + Unlimited GP at Smart Network + Personal Health Fund",
          "gpVisits": "Unlimited at Smart Network providers",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Smart Network"
        },
        {
          "id": "EssentialDeltaSaver",
          "name": "Essential Delta Saver",
          "category": "Saver",
          "premium": "R2,898",
          "hospital": "Unlimited, Delta network hospitals",
          "dayToDay": "MSA + Personal Health Fund",
          "gpVisits": "Funded from MSA",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Delta Network"
        },
        {
          "id": "EssentialSmartSaver",
          "name": "Essential Smart Saver",
          "category": "Saver",
          "premium": "R2,750",
          "hospital": "Unlimited, Smart Hospital Network",
          "dayToDay": "MSA (R5,808 family of 4) + Unlimited GP at Smart Network + Personal Health Fund",
          "gpVisits": "Unlimited at Smart Network providers",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Smart Network"
        },
        {
          "id": "ClassicCore",
          "name": "Classic Core",
          "category": "Core (Hospital Plan)",
          "premium": "R3,652",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "Personal Health Fund only (up to R10,000/family)",
          "gpVisits": "No dedicated GP cover; use Personal Health Fund",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Open — any provider"
        },
        {
          "id": "EssentialCore",
          "name": "Essential Core",
          "category": "Core (Hospital Plan)",
          "premium": "R3,138",
          "hospital": "Unlimited, any private hospital",
          "dayToDay": "Personal Health Fund only",
          "gpVisits": "No dedicated GP cover; use Personal Health Fund",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Open — any provider"
        },
        {
          "id": "CoastalCore",
          "name": "Coastal Core",
          "category": "Core (Hospital Plan)",
          "premium": "R3,011",
          "hospital": "Unlimited, coastal province hospitals",
          "dayToDay": "Personal Health Fund only",
          "gpVisits": "No dedicated GP cover",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Coastal provinces only"
        },
        {
          "id": "ClassicDeltaCore",
          "name": "Classic Delta Core",
          "category": "Core (Hospital Plan)",
          "premium": "R2,923",
          "hospital": "Unlimited, Delta network hospitals",
          "dayToDay": "Personal Health Fund only",
          "gpVisits": "No dedicated GP cover; use Personal Health Fund",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Delta Network"
        },
        {
          "id": "EssentialDeltaCore",
          "name": "Essential Delta Core",
          "category": "Core (Hospital Plan)",
          "premium": "R2,507",
          "hospital": "Unlimited, Delta network hospitals",
          "dayToDay": "Personal Health Fund only",
          "gpVisits": "No dedicated GP cover",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Delta Network"
        },
        {
          "id": "ClassicSmart",
          "name": "Classic Smart",
          "category": "Smart",
          "premium": "R2,822",
          "hospital": "Unlimited, Smart Hospital Network",
          "dayToDay": "Defined benefits: GP, dental, eye test, acute meds + Personal Health Fund (up to R2,000/member)",
          "gpVisits": "Unlimited at Smart Network GPs with R70-R130 co-payment",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Smart Network"
        },
        {
          "id": "EssentialSmart",
          "name": "Essential Smart",
          "category": "Smart",
          "premium": "R2,021",
          "hospital": "Unlimited, Smart Hospital Network",
          "dayToDay": "Defined benefits: GP, dental, eye test, acute meds + Personal Health Fund",
          "gpVisits": "R130 co-payment per Smart Network GP visit",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Smart Network"
        },
        {
          "id": "EssentialDynamicSmart",
          "name": "Essential Dynamic Smart",
          "category": "Smart",
          "premium": "R1,681",
          "hospital": "Unlimited, Dynamic Smart Network (narrower hospital network)",
          "dayToDay": "Defined benefits: GP, dental, eye test, OTC medicine + Personal Health Fund",
          "gpVisits": "Co-payment per Smart Network GP visit",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Dynamic Smart Network"
        },
        {
          "id": "ActiveSmart",
          "name": "Active Smart",
          "category": "Smart",
          "premium": "R1,350",
          "hospital": "Dynamic Smart Network; R7,500 co-payment for planned admissions",
          "dayToDay": "Defined benefits: R125 co-pay GP, dental (R190 co-pay), eye test (R125 co-pay), OTC up to R535/yr + Personal Health Fund (up to R1,000/adult)",
          "gpVisits": "Unlimited at Smart Network GPs with R125 co-payment",
          "chronic": "27 CDL conditions via network pharmacy",
          "network": "Dynamic Smart Network"
        },
        {
          "id": "KeyCarePlus",
          "name": "KeyCare Plus",
          "category": "KeyCare",
          "premium": "R1,817 – R3,687 (income-based)",
          "hospital": "Unlimited, KeyCare Network hospitals",
          "dayToDay": "Unlimited GP visits at KeyCare Network; blood tests, X-rays, medication included",
          "gpVisits": "Unlimited at KeyCare Network GPs",
          "chronic": "CDL conditions on KeyCare chronic medicine list",
          "network": "KeyCare Network (designated hospitals, GPs, pharmacies)"
        },
        {
          "id": "KeyCareCore",
          "name": "KeyCare Core",
          "category": "KeyCare",
          "premium": "R1,381 – R2,636 (income-based)",
          "hospital": "Unlimited, KeyCare Network hospitals",
          "dayToDay": "Limited; Personal Health Fund + Home Care benefit",
          "gpVisits": "Limited; use Personal Health Fund",
          "chronic": "CDL conditions covered",
          "network": "KeyCare Network"
        },
        {
          "id": "KeyCareStart",
          "name": "KeyCare Start",
          "category": "KeyCare",
          "premium": "From R1,331 (income-based)",
          "hospital": "KeyCare Start Network hospitals",
          "dayToDay": "Basic dentistry, optometry, screening, prevention",
          "gpVisits": "KeyCare Start Network GP visits",
          "chronic": "CDL conditions via network",
          "network": "KeyCare Start Network"
        },
        {
          "id": "KeyCareStartRegional",
          "name": "KeyCare Start Regional",
          "category": "KeyCare",
          "premium": "From R1,278 (income-based)",
          "hospital": "KeyCare Start Network hospitals within selected region",
          "dayToDay": "Basic dentistry, optometry, screening, prevention",
          "gpVisits": "Network GP in selected region",
          "chronic": "CDL conditions via network",
          "network": "KeyCare Start Regional Network (most restrictive)"
        }
      ]
    },
    {
      "key": "bonitas",
      "name": "Bonitas",
      "icon": "fas fa-hand-holding-medical",
      "selectId": "scheme2",
      "plans": [
        {
          "id": "BonCore",
          "name": "BonCore",
          "category": "Entry-Level",
          "premium": "R1,275",
          "hospital": "Unlimited at defined network hospitals",
          "dayToDay": "R1,000 Benefit Booster (dentistry, acute medicine, radiology, pathology)",
          "gpVisits": "Unlimited virtual consultations; limited face-to-face",
          "chronic": "27 PMB chronic conditions",
          "network": "Network hospitals; 100% Bonitas Rate in-network"
        },
        {
          "id": "BonCap",
          "name": "BonCap",
          "category": "Entry-Level",
          "premium": "R1,554 – R3,753 (income-based)",
          "hospital": "Unlimited at network hospitals",
          "dayToDay": "Limited; GP/specialist consultations, prescribed medication, basic radiology/pathology",
          "gpVisits": "Unlimited at nominated BonCap network GP",
          "chronic": "28 chronic conditions (unlimited, subject to formulary)",
          "network": "Strict network: GP, specialist, hospital, pathology, pharmacy"
        },
        {
          "id": "BonStart",
          "name": "BonStart",
          "category": "Entry-Level",
          "premium": "R1,603",
          "hospital": "Unlimited at BonStart network hospitals (co-payments apply)",
          "dayToDay": "Daily maximum with sub-limits for GP/specialist, acute/OTC medication, X-rays, blood tests",
          "gpVisits": "Unlimited virtual consultations; limited face-to-face with sub-limits",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "BonStartPlus",
          "name": "BonStart Plus",
          "category": "Entry-Level",
          "premium": "R2,040",
          "hospital": "Unlimited at network hospitals",
          "dayToDay": "Daily maximum with sub-limits for GP/specialist, acute/OTC medication, X-rays, blood tests",
          "gpVisits": "Covered within day-to-day sub-limits",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "BonEssentialSelect",
          "name": "BonEssential Select",
          "category": "Hospital Plan",
          "premium": "R2,345",
          "hospital": "Unlimited at network private hospitals at 100% scheme rate",
          "dayToDay": "None (hospital-only plan)",
          "gpVisits": "Not covered (hospital plan)",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Specific network private hospitals"
        },
        {
          "id": "BonFit",
          "name": "BonFit",
          "category": "Savings",
          "premium": "R2,698",
          "hospital": "Network hospitals only",
          "dayToDay": "Savings: Main R4,848/yr; Adult R3,636/yr; Child R1,632/yr",
          "gpVisits": "Covered from savings account (sub-limits apply)",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "BonEssential",
          "name": "BonEssential",
          "category": "Hospital Plan",
          "premium": "R2,747",
          "hospital": "Unlimited at ANY hospital in South Africa at 100% scheme rate",
          "dayToDay": "None (hospital-only plan)",
          "gpVisits": "Not covered (hospital plan)",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Open — any private hospital in SA"
        },
        {
          "id": "BonPrime",
          "name": "BonPrime",
          "category": "Traditional",
          "premium": "R3,255",
          "hospital": "Unlimited at defined network hospitals",
          "dayToDay": "16% medical savings account component",
          "gpVisits": "Covered from medical savings account",
          "chronic": "Chronic condition management via Care Programmes",
          "network": "Defined network hospitals"
        },
        {
          "id": "HospitalStandard",
          "name": "Hospital Standard",
          "category": "Hospital Plan",
          "premium": "R3,561",
          "hospital": "Network hospitals only",
          "dayToDay": "None (hospital-only plan)",
          "gpVisits": "Not covered",
          "chronic": "PMB chronic conditions covered",
          "network": "Network hospitals only"
        },
        {
          "id": "Primary",
          "name": "Primary",
          "category": "Traditional",
          "premium": "R3,588",
          "hospital": "Network hospitals only",
          "dayToDay": "Fund: Main R5,540/yr; M+1 R8,860/yr; M+2 R11,080/yr; M+3 R12,190/yr",
          "gpVisits": "Covered from day-to-day fund (R4,000 limit per family)",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "BonSave",
          "name": "BonSave",
          "category": "Savings",
          "premium": "R4,047",
          "hospital": "Unlimited at network private hospitals",
          "dayToDay": "Savings: Main R12,144/yr; Adult R9,180/yr; Child R3,636/yr",
          "gpVisits": "Covered from savings account",
          "chronic": "28 chronic conditions on applicable formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "StandardSelect",
          "name": "Standard Select",
          "category": "Traditional",
          "premium": "R5,431",
          "hospital": "Network hospitals only",
          "dayToDay": "Fund: Main R13,980/yr; M+1 R20,980/yr; M+2 R23,310/yr",
          "gpVisits": "Covered from day-to-day fund with sub-limits",
          "chronic": "45 chronic conditions; R13,030/beneficiary on formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "Standard",
          "name": "Standard",
          "category": "Traditional",
          "premium": "R5,929",
          "hospital": "Unlimited — any hospital (open choice)",
          "dayToDay": "Fund: Main R13,980/yr; M+1 R20,980/yr; M+2 R23,310/yr",
          "gpVisits": "Covered from day-to-day fund with sub-limits",
          "chronic": "45 chronic conditions; R13,030/beneficiary on formulary",
          "network": "Open — any private hospital"
        },
        {
          "id": "BonComplete",
          "name": "BonComplete",
          "category": "Premium",
          "premium": "R6,614",
          "hospital": "Network hospitals only",
          "dayToDay": "Savings: Main R11,880/yr + Self-Payment Gap + Above Threshold Benefit (R6,250 main)",
          "gpVisits": "Covered from savings; unlimited GP consultations",
          "chronic": "32 chronic conditions on applicable formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "BonClassic",
          "name": "BonClassic",
          "category": "Premium",
          "premium": "R8,238",
          "hospital": "Network hospitals only",
          "dayToDay": "Savings: Main R14,832/yr; Adult R12,732/yr; Child R3,660/yr",
          "gpVisits": "Covered from savings account",
          "chronic": "46 chronic conditions; R15,370/beneficiary on formulary",
          "network": "Network hospitals only"
        },
        {
          "id": "BonComprehensive",
          "name": "BonComprehensive",
          "category": "Premium",
          "premium": "R12,509",
          "hospital": "Unlimited — any hospital (open choice)",
          "dayToDay": "Savings: Main R22,512/yr; Adult R21,228/yr + Unlimited Above Threshold Benefit",
          "gpVisits": "Covered from savings account",
          "chronic": "61 chronic conditions; R18,760/beneficiary on formulary",
          "network": "Open — any private hospital in SA"
        }
      ]
    },
    {
      "key": "momentum_health",
      "name": "Momentum Health",
      "icon": "fas fa-hospital",
      "selectId": "scheme3",
      "plans": [
        {
          "id": "Ingwe",
          "name": "Ingwe",
          "category": "Entry-Level",
          "premium": "R541",
          "hospital": "No annual limit; 100% of Momentum Scheme Rate",
          "dayToDay": "Limited — through network providers only",
          "gpVisits": "Unlimited network GP visits (visits 11+ require pre-authorisation)",
          "chronic": "26 PMB chronic conditions via network",
          "network": "Ingwe Primary Care / Active Network"
        },
        {
          "id": "Evolve",
          "name": "Evolve",
          "category": "Hospital Plan",
          "premium": "R1,687",
          "hospital": "No annual limit; Evolve Network hospitals at 100% Scheme Rate",
          "dayToDay": "Very limited; HealthSaver+ optional add-on",
          "gpVisits": "2 virtual GP consultations per beneficiary per year",
          "chronic": "26 PMB conditions — State facilities only",
          "network": "Evolve Network hospitals"
        },
        {
          "id": "Custom",
          "name": "Custom",
          "category": "Hospital Plan",
          "premium": "R2,149",
          "hospital": "No annual limit; Momentum Associated Hospital List",
          "dayToDay": "Minimal / none; HealthSaver+ available as add-on",
          "gpVisits": "Not included; HealthSaver+ add-on available",
          "chronic": "26 PMB conditions; choice of provider tiers",
          "network": "Associated hospitals or any private hospital"
        },
        {
          "id": "Incentive",
          "name": "Incentive",
          "category": "Savings",
          "premium": "R2,794",
          "hospital": "Unlimited; in-hospital specialists at 200% Scheme Rate",
          "dayToDay": "10% of contribution to Personal Medical Savings Account",
          "gpVisits": "Paid from savings; Hello Doctor virtual consultations included",
          "chronic": "26 PMB conditions; choice of provider tiers",
          "network": "Open — any healthcare provider"
        },
        {
          "id": "Extender",
          "name": "Extender",
          "category": "Comprehensive",
          "premium": "R6,589",
          "hospital": "Unlimited; in-hospital specialists at 200% Scheme Rate",
          "dayToDay": "25% of contribution to Medical Savings Account + Above Threshold Benefit",
          "gpVisits": "Unlimited network GP visits (visits 11+ require pre-authorisation)",
          "chronic": "26 PMB + 36 additional conditions (R13,700/family/yr for additional)",
          "network": "Open — any healthcare provider"
        },
        {
          "id": "Summit",
          "name": "Summit",
          "category": "Comprehensive",
          "premium": "R13,572",
          "hospital": "Unlimited at any private hospital; specialists up to 300% Scheme Rate",
          "dayToDay": "R34,500 per beneficiary per year (2026)",
          "gpVisits": "Covered from day-to-day benefits (any provider)",
          "chronic": "Comprehensive chronic cover from any provider",
          "network": "Fully open — any healthcare provider"
        }
      ]
    },
    {
      "key": "gems",
      "name": "GEMS",
      "icon": "fas fa-medkit",
      "selectId": "scheme4",
      "plans": [
        {
          "id": "TanzaniteOne",
          "name": "Tanzanite One",
          "category": "Entry-Level",
          "premium": "R1,693 – R2,873 (salary-banded)",
          "hospital": "Comprehensive at GEMS network facilities (public + private)",
          "dayToDay": "Out-of-hospital benefits through GEMS network providers",
          "gpVisits": "Unlimited at nominated network GP; no out-of-pocket",
          "chronic": "26 PMB + 3 additional (Anxiety, ADHD, Depression)",
          "network": "GEMS network (public + private); must nominate GP"
        },
        {
          "id": "Beryl",
          "name": "Beryl",
          "category": "Entry-Level",
          "premium": "R1,910 – R2,873 (salary-banded)",
          "hospital": "In-hospital benefits subject to annual limit; public + private GEMS network",
          "dayToDay": "Scheme funds 70%; member pays 30% co-payment",
          "gpVisits": "Must nominate GP; 3 non-network GP visits per family per year",
          "chronic": "PMB chronic conditions on GEMS formulary",
          "network": "GEMS Beryl network; 30% co-payment structure"
        },
        {
          "id": "EmeraldValue",
          "name": "Emerald Value",
          "category": "Mid-Level",
          "premium": "R3,695 – R4,580 (salary-banded)",
          "hospital": "Comprehensive; GEMS network hospital required",
          "dayToDay": "Day-to-day Block Benefit + Primary Care Extender + Family Practitioner Network Extender",
          "gpVisits": "Must nominate GEMS network GP; 30% co-pay for non-nominated",
          "chronic": "PMB + 3 additional non-PMB conditions",
          "network": "GEMS network; mandatory GP nomination"
        },
        {
          "id": "Ruby",
          "name": "Ruby",
          "category": "Mid-Level",
          "premium": "R3,945 – R4,865 (salary-banded)",
          "hospital": "Comprehensive in-and-out-of-hospital benefits",
          "dayToDay": "20% of contribution to Personal Medical Savings Account; block benefits when depleted",
          "gpVisits": "Encouraged to nominate REO network GP (no penalty if not nominated)",
          "chronic": "PMB + additional non-PMB conditions",
          "network": "REO Network (Ruby, Emerald, Onyx negotiated rates)"
        },
        {
          "id": "Emerald",
          "name": "Emerald",
          "category": "High-Level",
          "premium": "R4,413 – R5,476 (salary-banded)",
          "hospital": "Comprehensive in-and-out-of-hospital cover",
          "dayToDay": "Day-to-day Block Benefit + Primary Care Extender",
          "gpVisits": "Encouraged to nominate REO network GP (optional, no penalty)",
          "chronic": "Comprehensive PMB + additional non-PMB conditions",
          "network": "REO Network — flexible provider choice"
        },
        {
          "id": "Onyx",
          "name": "Onyx",
          "category": "High-Level",
          "premium": "R7,652 – R8,598 (salary-banded)",
          "hospital": "Comprehensive / extensive in-and-out-of-hospital cover (top tier)",
          "dayToDay": "High-value Day-to-day Block Benefit",
          "gpVisits": "Encouraged to nominate REO network GP (optional, no penalty)",
          "chronic": "Comprehensive PMB + additional non-PMB conditions",
          "network": "REO Network — flexible provider choice"
        }
      ]
    }
  ]
};
