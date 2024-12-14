import { Experience } from './types';
import plant from "../../assets/images/plant.png";
export const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "IIITG",
    location: "Guwahati, Assam",
    period: "Aug 2024 - Nov 2024",
    description: [
      "Automates plant species identification using Vision Transformers and transfer learning",
      "Integrates Google Generative AI for interactive plant information retrieval",
      "High accuracy of 95.97% with precision, recall, and F1-score each at 0.96%",
    ],
    technologies: ["Deep Learning", "Python", "PyTorch", "torch", "torchvision", "transformers", "scikit-learn", "langchain-google-genai", "sentence-transformers", "pickle", "Streamlit"],

    image: plant,
    projectUrl: "https://github.com/manish92596/PlantPedia"
  },
  
];

