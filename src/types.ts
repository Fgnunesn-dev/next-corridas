/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AthleteStatistic {
  value: string;
  label: string;
}

export interface Achievement {
  id: string;
  title: string;
  athlete: string;
  value: string;
  description: string;
  category: "pace" | "distancia" | "peso" | "medalha";
}

export interface TrainingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  photoUrl: string;
  role: string;
  result: string;
  text: string;
}

export interface TeamEvent {
  id: string;
  title: string;
  type: "treino" | "prova" | "social" | "simulado";
  date: string;
  time: string;
  location: string;
  spots: number;
  spotsLeft: number;
  level: "Iniciante" | "Intermediário" | "Avançado" | "Todos";
}

export interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
