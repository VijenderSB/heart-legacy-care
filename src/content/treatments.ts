/** Treatment content used by the Home expertise cards and the Treatments page. */

export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  intro: string;
  points: { heading: string; body: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "beating-heart-bypass-surgery",
    name: "Beating Heart Bypass Surgery",
    shortDescription:
      "Coronary bypass performed without intentionally stopping the heart, where clinically appropriate.",
    icon: "HeartPulse",
    intro:
      "Beating heart bypass surgery is an advanced form of coronary artery bypass grafting performed without intentionally stopping the heart or routinely using a heart-lung machine.",
    points: [
      {
        heading: "What beating heart surgery means",
        body: "The surgeon grafts the coronary arteries while the heart continues to beat, using stabilising devices to steady the small area being operated on.",
      },
      {
        heading: "How it differs from conventional bypass surgery",
        body: "Conventional bypass surgery generally uses a heart-lung machine while the heart is stopped. In the beating heart approach the circulation is maintained by the patient's own heart, so routine use of the heart-lung machine may be avoided.",
      },
      {
        heading: "Who may be considered",
        body: "Suitability is decided case by case after reviewing symptoms, angiography, ventricular function and associated medical conditions. Some patients remain better served by conventional bypass surgery.",
      },
      {
        heading: "Potential advantages for appropriately selected patients",
        body: "Where clinically appropriate, avoiding the heart-lung machine may be considered advantageous for selected patients. Individual benefit can only be judged after full clinical assessment.",
      },
      {
        heading: "Why individual assessment is essential",
        body: "The appropriate surgical approach depends on the patient's medical condition, coronary anatomy and individual risk profile.",
      },
    ],
  },
  {
    slug: "coronary-artery-bypass-grafting",
    name: "Coronary Artery Bypass Grafting",
    shortDescription:
      "Restoring blood supply to the heart muscle by grafting around significantly blocked coronary arteries.",
    icon: "Activity",
    intro:
      "Coronary artery bypass grafting (CABG) creates a new route for blood to reach the heart muscle beyond a narrowed or blocked coronary artery.",
    points: [
      {
        heading: "What CABG is",
        body: "Healthy blood vessels taken from the chest wall, arm or leg are used to bypass significant blockages in the coronary arteries.",
      },
      {
        heading: "Why it may be recommended",
        body: "It may be advised when blockages are extensive, involve important segments of the coronary tree, or are not well suited to stenting.",
      },
      {
        heading: "Common patient indications",
        body: "Persistent angina despite medication, multi-vessel coronary artery disease, or specific patterns of disease identified on angiography.",
      },
      {
        heading: "Surgical assessment and planning",
        body: "Assessment includes clinical history, echocardiography, angiography, and evaluation of general fitness for surgery, followed by a patient-specific surgical plan.",
      },
      {
        heading: "Recovery overview",
        body: "Recovery is staged: intensive monitoring immediately after surgery, gradual mobilisation in hospital, then a structured return to daily activity guided by the surgical team.",
      },
    ],
  },
  {
    slug: "minimally-invasive-cardiac-surgery",
    name: "Minimally Invasive Cardiac Surgery",
    shortDescription:
      "Selected cardiac procedures performed through smaller incisions instead of a full sternotomy.",
    icon: "Scissors",
    intro:
      "Minimally invasive cardiac surgery allows selected procedures to be carried out through smaller, carefully placed incisions.",
    points: [
      {
        heading: "Use of smaller surgical incisions",
        body: "Access is gained through limited incisions rather than a full division of the breastbone, using specialised instruments and visualisation.",
      },
      {
        heading: "Conditions that may be treated",
        body: "Certain valve procedures and selected coronary procedures may be suitable, depending on anatomy and disease pattern.",
      },
      {
        heading: "Potential recovery considerations",
        body: "Smaller incisions may influence wound comfort and rehabilitation for suitable patients; the surgical team explains what to expect in each case.",
      },
      {
        heading: "Patient-selection requirements",
        body: "Not every patient or condition is suited to a minimally invasive approach. Selection follows detailed imaging and clinical review.",
      },
    ],
  },
  {
    slug: "heart-valve-repair",
    name: "Heart Valve Repair",
    shortDescription:
      "Reconstructing a diseased valve so the patient's own valve tissue can be preserved.",
    icon: "Wrench",
    intro:
      "Valve repair aims to restore normal valve function while preserving the patient's own valve tissue.",
    points: [
      {
        heading: "Purpose of valve repair",
        body: "Repair corrects leakage or restricted movement so that the valve opens and closes effectively again.",
      },
      {
        heading: "Commonly treated valves",
        body: "The mitral and tricuspid valves are most frequently repaired; aortic valve repair may be considered in selected situations.",
      },
      {
        heading: "When preserving the natural valve may be considered",
        body: "Where the valve structure allows durable reconstruction, repair may be preferred to replacement. The decision is made after echocardiography and intra-operative assessment.",
      },
    ],
  },
  {
    slug: "heart-valve-replacement",
    name: "Heart Valve Replacement",
    shortDescription:
      "Replacing a severely diseased valve with a mechanical or biological prosthesis.",
    icon: "Replace",
    intro:
      "When a valve is too damaged to be repaired reliably, it may be replaced with a prosthetic valve.",
    points: [
      {
        heading: "When replacement may be required",
        body: "Severe calcification, extensive damage or unsuitable valve anatomy may make replacement the more dependable option.",
      },
      {
        heading: "Mechanical and biological valve options",
        body: "Mechanical valves are highly durable and require lifelong anticoagulation. Biological (tissue) valves usually require less long-term anticoagulation but may have a different durability profile.",
      },
      {
        heading: "Importance of personalised valve selection",
        body: "Age, lifestyle, other medical conditions, planned pregnancy and the ability to maintain anticoagulation monitoring all influence the choice, which is discussed with the patient and family.",
      },
    ],
  },
  {
    slug: "double-and-multiple-valve-surgery",
    name: "Double and Multiple Valve Surgery",
    shortDescription:
      "Surgical treatment when disease affects more than one heart valve.",
    icon: "Layers",
    intro:
      "Some patients have significant disease in more than one valve, requiring a combined surgical strategy.",
    points: [
      {
        heading: "Treatment of disease affecting more than one heart valve",
        body: "Each affected valve is assessed individually, and repair or replacement is planned for each in a single operation where appropriate.",
      },
      {
        heading: "Need for advanced surgical planning",
        body: "Combined procedures require careful sequencing, longer operative planning and experienced peri-operative care.",
      },
      {
        heading: "Importance of comprehensive evaluation",
        body: "Detailed echocardiography, assessment of heart muscle function, pulmonary pressures and general fitness guide the operative decision.",
      },
    ],
  },
  {
    slug: "aortic-root-replacement",
    name: "Aortic Root and Complex Aortic Surgery",
    shortDescription:
      "Advanced surgery for the aortic root and the major artery leaving the heart.",
    icon: "GitBranch",
    intro:
      "Aortic root and complex aortic procedures address disease at the junction of the heart and the main artery of the body.",
    points: [
      {
        heading: "What the aortic root is",
        body: "The aortic root is the first segment of the aorta, containing the aortic valve and the origins of the coronary arteries.",
      },
      {
        heading: "Conditions that may require surgery",
        body: "Aneurysm of the aortic root, aortic dissection, connective tissue disorders and combined valve-and-root disease may require operative treatment.",
      },
      {
        heading: "Complexity of the procedure",
        body: "Surgery may involve replacing the root together with the valve and reimplanting the coronary arteries, or preserving the native valve where feasible.",
      },
      {
        heading: "Importance of experienced surgical care",
        body: "These operations demand meticulous planning, an experienced surgical team and close post-operative monitoring.",
      },
    ],
  },
  {
    slug: "redo-cabg",
    name: "Redo CABG and Redo Cardiac Surgery",
    shortDescription:
      "Repeat cardiac surgery for patients who have already undergone a heart operation.",
    icon: "RotateCcw",
    intro:
      "Redo cardiac surgery is performed when a patient who has already had heart surgery requires a further operation.",
    points: [
      {
        heading: "Reasons repeat surgery may be required",
        body: "Progression of coronary disease, graft failure over time, new valve disease or a complication of previous surgery may make a further procedure necessary.",
      },
      {
        heading: "Challenges created by previous surgery",
        body: "Scar tissue from the earlier operation alters normal anatomy and demands a careful, deliberate surgical approach.",
      },
      {
        heading: "Need for detailed investigation and planning",
        body: "Prior operative records, current angiography and cross-sectional imaging are reviewed in detail before a redo procedure is planned.",
      },
    ],
  },
];

export const faqs = [
  {
    question: "How do I know whether bypass surgery is required?",
    answer:
      "The decision follows a clinical review of symptoms, medication response, echocardiography and coronary angiography. A cardiac surgeon assesses the pattern and severity of blockage together with your overall health before advising surgery.",
  },
  {
    question: "Is beating heart bypass suitable for every patient?",
    answer:
      "No. It is one of several valid approaches. Suitability depends on coronary anatomy, heart function and associated conditions, and is determined only after individual assessment.",
  },
  {
    question: "What is the difference between angioplasty and bypass surgery?",
    answer:
      "Angioplasty opens a narrowed artery from within, usually with a stent. Bypass surgery creates a new route around the blockage using a graft. The choice depends on the number, location and complexity of the blockages and on other medical factors.",
  },
  {
    question: "Can a damaged heart valve be repaired?",
    answer:
      "In many cases a valve can be repaired rather than replaced, particularly the mitral and tricuspid valves. Whether repair is durable in a specific patient is judged from echocardiography and assessment during surgery.",
  },
  {
    question: "How long does recovery after heart surgery take?",
    answer:
      "Recovery is individual. It typically begins with monitored care in hospital, followed by supervised mobilisation and a gradual return to routine activity guided by the surgical team and cardiac rehabilitation advice.",
  },
  {
    question: "When is redo bypass surgery required?",
    answer:
      "It may be considered when previous grafts fail, when coronary disease progresses, or when a new cardiac problem develops after earlier surgery. Detailed imaging and review of previous records precede any decision.",
  },
  {
    question: "Can I request a second opinion before surgery?",
    answer:
      "Yes. A second opinion is a normal and appropriate step before major cardiac surgery. You can share your diagnosis, angiography and echocardiography reports for an experienced surgical review.",
  },
];
