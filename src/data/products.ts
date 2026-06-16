export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string; // Pexels URL ou "" pour fallback gradient+emoji
  alt: string;
  emoji: string;
};

export type Category = {
  id: string;
  label: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "pains",
    label: "Pains",
    products: [
      {
        id: "tradition",
        name: "Tradition",
        description: "Notre baguette signature, croustillante et dorée, façonnée selon les règles de l'art.",
        price: "1,20 €",
        image: "https://images.pexels.com/photos/28164994/pexels-photo-28164994.jpeg?w=800",
        alt: "Baguette tradition",
        emoji: "🥖",
      },
      {
        id: "campagne",
        name: "Pain de Campagne",
        description: "Levain naturel, mie alvéolée et croûte rustique pour un pain aux saveurs authentiques.",
        price: "2,80 €",
        image: "https://images.pexels.com/photos/8633662/pexels-photo-8633662.jpeg?w=800",
        alt: "Pain de campagne",
        emoji: "🍞",
      },
      {
        id: "seigle",
        name: "Pain de Seigle",
        description: "30% de farine de seigle Label Rouge, légèrement acidulé, idéal avec du fromage.",
        price: "3,20 €",
        image: "https://images.pexels.com/photos/8599723/pexels-photo-8599723.jpeg?w=800",
        alt: "Pain de seigle",
        emoji: "🌾",
      },
      {
        id: "epeautre",
        name: "Pain d'Épeautre",
        description: "Farine d'épeautre bio, riche en protéines, au goût délicat et légèrement noisette.",
        price: "3,50 €",
        image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=800",
        alt: "Pain d'épeautre",
        emoji: "🌾",
      },
      {
        id: "noix",
        name: "Pain aux Noix",
        description: "Généreusement garni de cerneaux de noix, une alliance parfaite avec les fromages affinés.",
        price: "4,00 €",
        image: "https://images.pexels.com/photos/19898674/pexels-photo-19898674.jpeg?w=800",
        alt: "Pain aux noix",
        emoji: "🌰",
      },
    ],
  },
  {
    id: "viennoiseries",
    label: "Viennoiseries",
    products: [
      {
        id: "croissant",
        name: "Croissant au Beurre",
        description: "Feuilleté, doré, fondant — beurre AOP Charentes-Poitou, pliage en 27 couches.",
        price: "1,30 €",
        image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?w=800",
        alt: "Croissant au beurre",
        emoji: "🥐",
      },
      {
        id: "pain-chocolat",
        name: "Pain au Chocolat",
        description: "Deux bâtons de chocolat Valrhona enveloppés dans un feuilletage délicat.",
        price: "1,50 €",
        image: "https://images.pexels.com/photos/32268781/pexels-photo-32268781.jpeg?w=800",
        alt: "Pain au chocolat",
        emoji: "🍫",
      },
      {
        id: "kouign-amann",
        name: "Kouign-Amann",
        description: "La spécialité bretonne dans toute sa splendeur : caramélisé, croustillant, irrésistible.",
        price: "2,20 €",
        image: "https://images.pexels.com/photos/10280008/pexels-photo-10280008.jpeg?w=800",
        alt: "Kouign-amann",
        emoji: "🧈",
      },
      {
        id: "brioche",
        name: "Brioche Vendéenne",
        description: "Tressée à la main, parfumée à la fleur d'oranger, moelleuse comme un nuage.",
        price: "3,80 €",
        image: "https://images.pexels.com/photos/7884507/pexels-photo-7884507.jpeg?w=800",
        alt: "Brioche vendéenne",
        emoji: "🫓",
      },
      {
        id: "chausson",
        name: "Chausson aux Pommes",
        description: "Compote de pommes maison dans un feuilletage doré et croustillant.",
        price: "1,80 €",
        image: "https://images.pexels.com/photos/9368665/pexels-photo-9368665.jpeg?w=800",
        alt: "Chausson aux pommes",
        emoji: "🍎",
      },
    ],
  },
  {
    id: "patisseries",
    label: "Pâtisseries",
    products: [
      {
        id: "eclair-chocolat",
        name: "Éclair au Chocolat",
        description: "Pâte à choux aérienne, crème mousseline chocolat Guanaja, glaçage brillant.",
        price: "3,80 €",
        image: "https://images.pexels.com/photos/30461317/pexels-photo-30461317.jpeg?w=800",
        alt: "Éclair au chocolat",
        emoji: "🍫",
      },
      {
        id: "millefeuille",
        name: "Mille-Feuille Vanille",
        description: "Feuilletage caramélisé, crème pâtissière à la vanille Bourbon de Madagascar.",
        price: "4,20 €",
        image: "https://images.pexels.com/photos/14996842/pexels-photo-14996842.jpeg?w=800",
        alt: "Mille-feuille vanille",
        emoji: "🍰",
      },
      {
        id: "tarte-citron",
        name: "Tarte Citron Meringuée",
        description: "Lemon curd acidulé sur pâte sablée maison, meringuée à la flamme.",
        price: "4,50 €",
        image: "https://images.pexels.com/photos/7451880/pexels-photo-7451880.jpeg?w=800",
        alt: "Tarte citron meringuée",
        emoji: "🍋",
      },
      {
        id: "paris-brest",
        name: "Paris-Brest",
        description: "La grande classique : pâte à choux en couronne, crème pralinée, amandes effilées.",
        price: "4,80 €",
        image: "https://images.pexels.com/photos/34853028/pexels-photo-34853028.jpeg?w=800",
        alt: "Paris-Brest",
        emoji: "🌰",
      },
      {
        id: "tarte-fraise",
        name: "Tarte aux Fraises",
        description: "Fraises de Périgord sur crème pâtissière vanille, pâte sablée noisette.",
        price: "5,00 €",
        image: "https://images.pexels.com/photos/32590853/pexels-photo-32590853.jpeg?w=800",
        alt: "Tarte aux fraises",
        emoji: "🍓",
      },
    ],
  },
  {
    id: "sandwichs",
    label: "Sandwichs",
    products: [
      {
        id: "jambon-beurre",
        name: "Jambon-Beurre",
        description: "Jambon blanc supérieur, beurre demi-sel sur baguette tradition fraîche du matin.",
        price: "5,50 €",
        image: "https://images.pexels.com/photos/5880603/pexels-photo-5880603.jpeg?w=800",
        alt: "Sandwich jambon beurre",
        emoji: "🥖",
      },
      {
        id: "chevre-miel",
        name: "Chèvre & Miel",
        description: "Chèvre frais de Nouvelle-Aquitaine, miel de châtaignier, roquette et noix.",
        price: "6,20 €",
        image: "https://images.pexels.com/photos/19029774/pexels-photo-19029774.jpeg?w=800",
        alt: "Sandwich chèvre miel",
        emoji: "🧀",
      },
      {
        id: "saumon-avocat",
        name: "Saumon & Avocat",
        description: "Saumon fumé Label Rouge, avocat, crème fraîche citronnée, aneth frais.",
        price: "7,00 €",
        image: "https://images.pexels.com/photos/7736773/pexels-photo-7736773.jpeg?w=800",
        alt: "Sandwich saumon avocat",
        emoji: "🐟",
      },
      {
        id: "poulet-crudites",
        name: "Poulet Rôti & Crudités",
        description: "Poulet fermier rôti, crudités croquantes, mayonnaise maison sur pain de campagne.",
        price: "6,50 €",
        image: "https://images.pexels.com/photos/5292918/pexels-photo-5292918.jpeg?w=800",
        alt: "Sandwich poulet crudités",
        emoji: "🥗",
      },
    ],
  },
];
