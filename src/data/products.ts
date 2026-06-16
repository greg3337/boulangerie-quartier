export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
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
        image: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=800&q=80",
        alt: "Baguette tradition",
      },
      {
        id: "campagne",
        name: "Pain de Campagne",
        description: "Levain naturel, mie alvéolée et croûte rustique pour un pain aux saveurs authentiques.",
        price: "2,80 €",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80",
        alt: "Pain de campagne",
      },
      {
        id: "seigle",
        name: "Pain de Seigle",
        description: "30% de farine de seigle Label Rouge, légèrement acidulé, idéal avec du fromage.",
        price: "3,20 €",
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&q=80",
        alt: "Pain de seigle",
      },
      {
        id: "epeautre",
        name: "Pain d'Épeautre",
        description: "Farine d'épeautre bio, riche en protéines, au goût délicat et légèrement noisette.",
        price: "3,50 €",
        image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&q=80",
        alt: "Pain d'épeautre",
      },
      {
        id: "noix",
        name: "Pain aux Noix",
        description: "Généreusement garni de cerneaux de noix, une alliance parfaite avec les fromages affinés.",
        price: "4,00 €",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80",
        alt: "Pain aux noix",
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
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
        alt: "Croissant au beurre",
      },
      {
        id: "pain-chocolat",
        name: "Pain au Chocolat",
        description: "Deux bâtons de chocolat Valrhona enveloppés dans un feuilletage délicat.",
        price: "1,50 €",
        image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80",
        alt: "Pain au chocolat",
      },
      {
        id: "kouign-amann",
        name: "Kouign-Amann",
        description: "La spécialité bretonne dans toute sa splendeur : caramélisé, croustillant, irrésistible.",
        price: "2,20 €",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        alt: "Kouign-amann",
      },
      {
        id: "brioche",
        name: "Brioche Vendéenne",
        description: "Tressée à la main, parfumée à la fleur d'oranger, moelleuse comme un nuage.",
        price: "3,80 €",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
        alt: "Brioche vendéenne",
      },
      {
        id: "chausson",
        name: "Chausson aux Pommes",
        description: "Compote de pommes maison dans un feuilletage doré et croustillant.",
        price: "1,80 €",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
        alt: "Chausson aux pommes",
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
        image: "https://images.unsplash.com/photo-1612203985729-442fbb12a740?w=800&q=80",
        alt: "Éclair au chocolat",
      },
      {
        id: "millefeuille",
        name: "Mille-Feuille Vanille",
        description: "Feuilletage caramélisé, crème pâtissière à la vanille Bourbon de Madagascar.",
        price: "4,20 €",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
        alt: "Mille-feuille vanille",
      },
      {
        id: "tarte-citron",
        name: "Tarte Citron Meringuée",
        description: "Lemon curd acidulé sur pâte sablée maison, meringuée à la flamme.",
        price: "4,50 €",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
        alt: "Tarte citron meringuée",
      },
      {
        id: "paris-brest",
        name: "Paris-Brest",
        description: "La grande classique : pâte à choux en couronne, crème pralinée, amandes effilées.",
        price: "4,80 €",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
        alt: "Paris-Brest",
      },
      {
        id: "tarte-fraise",
        name: "Tarte aux Fraises",
        description: "Fraises de Périgord sur crème pâtissière vanille, pâte sablée noisette.",
        price: "5,00 €",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
        alt: "Tarte aux fraises",
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
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        alt: "Sandwich jambon beurre",
      },
      {
        id: "chevre-miel",
        name: "Chèvre & Miel",
        description: "Chèvre frais de Nouvelle-Aquitaine, miel de châtaignier, roquette et noix.",
        price: "6,20 €",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80",
        alt: "Sandwich chèvre miel",
      },
      {
        id: "saumon-avocat",
        name: "Saumon & Avocat",
        description: "Saumon fumé Label Rouge, avocat, crème fraîche citronnée, aneth frais.",
        price: "7,00 €",
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&q=80",
        alt: "Sandwich saumon avocat",
      },
      {
        id: "poulet-crudites",
        name: "Poulet Rôti & Crudités",
        description: "Poulet fermier rôti, crudités croquantes, mayonnaise maison sur pain de campagne.",
        price: "6,50 €",
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=800&q=80",
        alt: "Sandwich poulet crudités",
      },
    ],
  },
];
