import { Food, Meal, FoodCategory, Nutrient } from '@/types';

export const mockCategories: FoodCategory[] = [
  {
    id: 'category-1',
    name: 'Protein',
    image: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/11/shutterstock_723278326.jpg'
  },
  {
    id: 'category-2',
    name: 'Vegetables',
    image: 'https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg'
  },
  {
    id: 'category-3',
    name: 'Fruits',
    image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg?sfvrsn=7abe71fe_4'
  },
  {
    id: 'category-4',
    name: 'Dairy',
    image: 'https://www.datocms-assets.com/20941/1665663448-what-are-dairy-foods.png?w=1000&fit=max&fm=jpg'
  },
  {
    id: 'category-5',
    name: 'Grains',
    image: 'https://swolverine.com/cdn/shop/articles/What_Are_Whole_Grains_And_Why_Are_They_Important_-_Swolverine_600x.jpg?v=1600716204'
  },
  {
    id: 'category-6',
    name: 'Snacks',
    image: 'https://assets.sweat.com/html_body_blocks/images/000/013/890/original/EasyHealthySnacks_en65ab5213130c9862172ac11435f055d9_en38b28edc7b2830a46f6e00bfeceeb1b6.jpg?1596090039'
  }
];

export const mockFoods: Food[] = [
  {
    id: 'food-1',
    name: 'Grilled Chicken Breast',
    image: 'https://img.pikbest.com/origin/09/18/14/377pIkbEsTwkf.png!sw800',
    category: 'Protein',
    calories: 165,
    carbs: 0,
    protein: 31,
    fat: 3.6,
    nutrients: [
      { name: 'Vitamin B6', amount: 0.6, unit: 'mg' },
      { name: 'Niacin', amount: 13.7, unit: 'mg' },
      { name: 'Phosphorus', amount: 196, unit: 'mg' }
    ]
  },
  {
    id: 'food-2',
    name: 'Salmon Fillet',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/034/763/849/small/ai-generated-raw-salmon-fillet-free-png.png',
    category: 'Protein',
    calories: 208,
    carbs: 0,
    protein: 20,
    fat: 13,
    nutrients: [
      { name: 'Vitamin B12', amount: 2.6, unit: 'μg' },
      { name: 'Vitamin D', amount: 13.7, unit: 'μg' },
      { name: 'Omega-3', amount: 2.3, unit: 'g' }
    ]
  },
  {
    id: 'food-3',
    name: 'Broccoli',
    image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Broccoli_PNG_Picture.png?m=1629833782',
    category: 'Vegetables',
    calories: 55,
    carbs: 11,
    protein: 3.7,
    fat: 0.6,
    nutrients: [
      { name: 'Vitamin C', amount: 89.2, unit: 'mg' },
      { name: 'Vitamin K', amount: 102, unit: 'μg' },
      { name: 'Folate', amount: 63, unit: 'μg' }
    ]
  },
  {
    id: 'food-4',
    name: 'Spinach',
    image: 'https://pngimg.com/d/spinach_PNG33.png',
    category: 'Vegetables',
    calories: 23,
    carbs: 3.6,
    protein: 2.9,
    fat: 0.4,
    nutrients: [
      { name: 'Vitamin A', amount: 469, unit: 'μg' },
      { name: 'Vitamin K', amount: 483, unit: 'μg' },
      { name: 'Magnesium', amount: 79, unit: 'mg' }
    ]
  },
  {
    id: 'food-5',
    name: 'Banana',
    image: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png',
    category: 'Fruits',
    calories: 105,
    carbs: 27,
    protein: 1.3,
    fat: 0.4,
    nutrients: [
      { name: 'Vitamin B6', amount: 0.4, unit: 'mg' },
      { name: 'Vitamin C', amount: 10.3, unit: 'mg' },
      { name: 'Potassium', amount: 422, unit: 'mg' }
    ]
  },
  {
    id: 'food-6',
    name: 'Apple',
    image: 'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png',
    category: 'Fruits',
    calories: 95,
    carbs: 25,
    protein: 0.5,
    fat: 0.3,
    nutrients: [
      { name: 'Vitamin C', amount: 8.4, unit: 'mg' },
      { name: 'Fiber', amount: 4.4, unit: 'g' },
      { name: 'Potassium', amount: 195, unit: 'mg' }
    ]
  },
  {
    id: 'food-7',
    name: 'Greek Yogurt',
    image: 'https://static.vecteezy.com/system/resources/previews/027/291/697/non_2x/healthy-breakfast-with-fresh-greek-yogurt-free-png.png',
    category: 'Dairy',
    calories: 100,
    carbs: 3.6,
    protein: 17,
    fat: 1.7,
    nutrients: [
      { name: 'Calcium', amount: 187, unit: 'mg' },
      { name: 'Vitamin B12', amount: 0.8, unit: 'μg' },
      { name: 'Probiotics', amount: 100, unit: 'million CFU' }
    ]
  },
  {
    id: 'food-8',
    name: 'Cheddar Cheese',
    image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-vegan-cheddar-cheese-from-coconut-oil-or-soy-bean-organic-png-image_10270097.png',
    category: 'Dairy',
    calories: 113,
    carbs: 0.4,
    protein: 7,
    fat: 9.3,
    nutrients: [
      { name: 'Calcium', amount: 204, unit: 'mg' },
      { name: 'Vitamin A', amount: 79, unit: 'μg' },
      { name: 'Vitamin B12', amount: 0.2, unit: 'μg' }
    ]
  },
  {
    id: 'food-9',
    name: 'Brown Rice',
    image: 'https://img.pikbest.com/png-images/20241022/brown-rice-png-isolated-on-transparent-background-high-resolution_10991102.png!sw800',
    category: 'Grains',
    calories: 112,
    carbs: 23.5,
    protein: 2.6,
    fat: 0.9,
    nutrients: [
      { name: 'Magnesium', amount: 42, unit: 'mg' },
      { name: 'Phosphorus', amount: 83, unit: 'mg' },
      { name: 'Manganese', amount: 0.9, unit: 'mg' }
    ]
  },
  {
    id: 'food-10',
    name: 'Quinoa',
    image: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-cooking-with-white-quinoa-png-image_13039794.png',
    category: 'Grains',
    calories: 120,
    carbs: 21.3,
    protein: 4.4,
    fat: 1.9,
    nutrients: [
      { name: 'Magnesium', amount: 64, unit: 'mg' },
      { name: 'Phosphorus', amount: 152, unit: 'mg' },
      { name: 'Folate', amount: 42, unit: 'μg' }
    ]
  },
  {
    id: 'food-11',
    name: 'Almonds',
    image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Nuts-PNG/Almonds_PNG_Image.png?m=1629832603',
    category: 'Snacks',
    calories: 164,
    carbs: 6.1,
    protein: 6,
    fat: 14.2,
    nutrients: [
      { name: 'Vitamin E', amount: 7.3, unit: 'mg' },
      { name: 'Magnesium', amount: 76, unit: 'mg' },
      { name: 'Fiber', amount: 3.5, unit: 'g' }
    ]
  },
  {
    id: 'food-12',
    name: 'Dark Chocolate',
    image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-dark-chocolate-wrapped-png-image_10221443.png',
    category: 'Snacks',
    calories: 155,
    carbs: 13.6,
    protein: 1.5,
    fat: 10.9,
    nutrients: [
      { name: 'Iron', amount: 3.3, unit: 'mg' },
      { name: 'Magnesium', amount: 64, unit: 'mg' },
      { name: 'Antioxidants', amount: 15, unit: 'mg' }
    ]
  },
    {
    id: 'food-13',
    name: 'Egg',
    image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
    category: 'Protein',
    calories: 70,
    carbs: 0.6,
    protein: 6,
    fat: 5,
    nutrients: [
      { name: 'Iron', amount: 3.3, unit: 'mg' },
      { name: 'Magnesium', amount: 64, unit: 'mg' },
      { name: 'Antioxidants', amount: 15, unit: 'mg' }
    ]
  },
      {
    id: 'food-14',
    name: 'Steak',
    image: 'https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg',
    category: 'Protein',
    calories: 250,
    carbs: 0,
    protein: 26,
    fat: 17,
    nutrients: [
      { name: 'Iron', amount: 3.3, unit: 'mg' },
      { name: 'Magnesium', amount: 64, unit: 'mg' },
      { name: 'Antioxidants', amount: 15, unit: 'mg' }
    ]
  },
    {
    id: 'food-15',
    name: 'Oats',
    image: 'https://hodmedods.co.uk/cdn/shop/files/Naked-Oat-Flakes-GF-2400x1600_2048x.jpg?v=1682434036',
    category: 'Grains',
    calories: 380,
    carbs: 66,
    protein: 13,
    fat: 6,
    nutrients: [
      { name: 'Iron', amount: 3.3, unit: 'mg' },
      { name: 'Magnesium', amount: 64, unit: 'mg' },
      { name: 'Antioxidants', amount: 15, unit: 'mg' }
    ]
  },
    {
    id: 'food-16',
    name: 'Pasta',
    image: 'https://media.istockphoto.com/id/185065945/photo/pasta-variation.jpg?s=612x612&w=0&k=20&c=MQEjU7uAnvTISNoI78MpCdum7sjN93tjeED3rFqjdHw=',
    category: 'Grains',
    calories: 210,
    carbs: 42,
    protein: 7,
    fat: 1,
    nutrients: [
      { name: 'Iron', amount: 5, unit: 'mg' },
      { name: 'Magnesium', amount: 4, unit: 'mg' },
      { name: 'Antioxidants', amount: 2, unit: 'mg' }
    ]
  },
      {
    id: 'food-17',
    name: 'Blueberries',
    image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/blueberries_fresh_fullframe_732x549_thumb-732x549.jpg',
    category: 'Fruits',
    calories: 57,
    carbs: 14,
    protein: 0.7,
    fat: 0.3,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
        {
    id: 'food-18',
    name: 'Pears',
    image: 'https://snaped.fns.usda.gov/sites/default/files/seasonal-produce/2018-05/pears.jpg',
    category: 'Fruits',
    calories: 102,
    carbs: 27,
    protein: 0.6,
    fat: 0.2,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
          {
    id: 'food-19',
    name: 'Tomatoes',
    image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528',
    category: 'Vegetables',
    calories: 22,
    carbs: 4.8,
    protein: 1.1,
    fat: 0.2,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
  {
    id: 'food-20',
    name: 'Cucumber',
    image: 'https://www.bpmcdn.com/f/files/chilliwack/2025-chilliwack-progress-photos/may-2025-chilliwack-progress/cucumber.jpg;w=1178;h=785;mode=crop',
    category: 'Vegetables',
    calories: 16,
    carbs: 3.6,
    protein: 0.7,
    fat: 0.1,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
  {
    id: 'food-21',
    name: 'Butter',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-07/healthiest-butter-jp-240709-8ce75e.jpg',
    category: 'Dairy',
    calories: 102,
    carbs: 0.1,
    protein: 0.1,
    fat: 11.5,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
    {
    id: 'food-22',
    name: 'Cottage Cheese',
    image: 'https://cheesemaking.com/cdn/shop/products/cottage-cheese-recipe-266121.jpg?v=1739766325&width=1200',
    category: 'Dairy',
    calories: 200,
    carbs: 2.3,
    protein: 13,
    fat: 35,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
      {
    id: 'food-23',
    name: 'Peanut Butter',
    image: 'https://images.getrecipekit.com/20230102102018-peanut_butter_01_520x500.webp?aspect_ratio=1:1&quality=90&',
    category: 'Snacks',
    calories: 200,
    carbs: 6.1,
    protein: 7,
    fat: 16,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
     {
    id: 'food-24',
    name: 'Chocolate Milk',
    image: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/chocolate-milk-1296x728-feature.jpg',
    category: 'Snacks',
    calories: 190,
    carbs: 30,
    protein: 8,
    fat: 5,
    nutrients: [
      { name: 'Iron', amount: 10, unit: 'mg' },
      { name: 'Magnesium', amount: 5, unit: 'mg' },
      { name: 'Antioxidants', amount: 20, unit: 'mg' }
    ]
  },
];

// here are the meals
export const mockMeals: Meal[] = [
  {
    id: 'meal-1',
    name: 'Protein-Packed Breakfast Bowl',
    image: 'https://www.vmcdn.ca/f/files/villagelife/images/food-and-drink/breakfast/acai-bowl.png;w=960',
    foods: [
      mockFoods.find(f => f.id === 'food-7')!, // Greek Yogurt
      mockFoods.find(f => f.id === 'food-5')!, // Banana
      mockFoods.find(f => f.id === 'food-11')! // Almonds
    ],
    description: 'Start your day with this protein-rich breakfast bowl featuring creamy Greek yogurt, sliced banana, and crunchy almonds for sustained energy.',
    totalCalories: 369,
    totalCarbs: 36.7,
    totalProtein: 24.3,
    totalFat: 16.3
  },
  {
    id: 'meal-2',
    name: 'Salmon & Veggie Dinner',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/041/486/690/small_2x/grilled-salmon-with-vegetables-png.png',
    foods: [
      mockFoods.find(f => f.id === 'food-2')!, // Salmon
      mockFoods.find(f => f.id === 'food-3')!, // Broccoli
      mockFoods.find(f => f.id === 'food-9')! // Brown Rice
    ],
    description: 'A perfectly balanced dinner with omega-3 rich salmon, steamed broccoli, and a side of brown rice.',
    totalCalories: 375,
    totalCarbs: 34.5,
    totalProtein: 25.6,
    totalFat: 15.5
  },
  {
    id: 'meal-3',
    name: 'Chicken & Quinoa Bowl',
    image: 'https://static.jow.fr/880x880/recipes/kn9M0t08nuxO3w.png',
    foods: [
      mockFoods.find(f => f.id === 'food-1')!, // Chicken
      mockFoods.find(f => f.id === 'food-4')!, // Spinach
      mockFoods.find(f => f.id === 'food-10')! // Quinoa
    ],
    description: 'A nutrient-dense bowl featuring grilled chicken breast, sautéed spinach, and protein-rich quinoa.',
    totalCalories: 308,
    totalCarbs: 24.9,
    totalProtein: 37.3,
    totalFat: 6.4
  },
  {
    id: 'meal-4',
    name: 'Vegetarian Power Plate',
    image: 'https://healthyhappylife.com/wp-content/uploads/2013/07/lentils_8506lentil-plate_edited-1lentil-power-plate.jpg',
    foods: [
      mockFoods.find(f => f.id === 'food-3')!, // Broccoli
      mockFoods.find(f => f.id === 'food-4')!, // Spinach
      mockFoods.find(f => f.id === 'food-10')!, // Quinoa
      mockFoods.find(f => f.id === 'food-11')! // Almonds
    ],
    description: 'A plant-based meal with steamed broccoli, wilted spinach, fluffy quinoa, and a sprinkle of almonds for healthy fats.',
    totalCalories: 362,
    totalCarbs: 42,
    totalProtein: 16.6,
    totalFat: 17.1
  },
  {
    id: 'meal-5',
    name: 'Balanced Lunch Box',
    image: 'https://successrice.com/wp-content/uploads/2020/01/Herbed_Basmati_Rice_with_Grilled_Tndoori_Chicken-011.jpg',
    foods: [
      mockFoods.find(f => f.id === 'food-1')!, // Chicken
      mockFoods.find(f => f.id === 'food-9')!, // Brown Rice
      mockFoods.find(f => f.id === 'food-6')! // Apple
    ],
    description: 'A perfectly portioned lunch with lean protein from grilled chicken, complex carbs from brown rice, and natural sweetness from an apple.',
    totalCalories: 372,
    totalCarbs: 48.5,
    totalProtein: 33.6,
    totalFat: 4.8
  },
  {
    id: 'meal-6',
    name: 'Healthy Snack Plate',
    image: 'https://www.elizabethrider.com/wp-content/uploads/2017/12/Healthy-Cheese-Tray-Elizabeth-Rider-6.jpg',
    foods: [
      mockFoods.find(f => f.id === 'food-8')!, // Cheddar
      mockFoods.find(f => f.id === 'food-6')!, // Apple
      mockFoods.find(f => f.id === 'food-11')! // Almonds
    ],
    description: 'A satisfying snack plate with a perfect balance of protein, healthy fats, and natural sweetness to keep you energized between meals.',
    totalCalories: 372,
    totalCarbs: 31.5,
    totalProtein: 13.5,
    totalFat: 23.8
  },
{
  id: 'meal-7',
  name: 'Veggie & Cheese Lunch',
  image: 'https://theclevermeal.com/wp-content/uploads/2021/06/pasta-with-tomatoes-and-spinach.jpg',
  foods: [
    mockFoods.find(f => f.id === 'food-4')!,  // Spinach
    mockFoods.find(f => f.id === 'food-8')!,  // Cheddar Cheese
    mockFoods.find(f => f.id === 'food-16')!, // Pasta
    mockFoods.find(f => f.id === 'food-19')!  // Tomatoes
  ],
  description: 'A light lunch with sautéed spinach, cheddar cheese, pasta, and fresh tomatoes.',
  totalCalories: 370,
  totalCarbs: 60.4,
  totalProtein: 14.7,
  totalFat: 10.9
},
  {
  id: 'meal-8',
  name: 'Mediterranean Power Bowl',
  image: 'https://twocloveskitchen.com/wp-content/uploads/2023/07/salmon-quinoa-salad-hero.jpg',
  foods: [
    mockFoods.find(f => f.id === 'food-2')!,  // Salmon Fillet
    mockFoods.find(f => f.id === 'food-10')!, // Quinoa
    mockFoods.find(f => f.id === 'food-19')!, // Tomatoes
    mockFoods.find(f => f.id === 'food-20')!  // Cucumber
  ],
  description: 'A fresh and nutritious bowl with salmon, quinoa, tomatoes, and cucumber.',
  totalCalories: 406,
  totalCarbs: 39.7,
  totalProtein: 26.8,
  totalFat: 15.2
},
{
  id: 'meal-9',
  name: 'Sweet & Crunchy Snack',
  image: 'https://lh3.googleusercontent.com/proxy/G-8zJ8QjmSJGZ2BiayR_XpqHGEBUliSWSrxutqrQ6I-5au2RY2kydNwDpnXOZjyFm40ELu9vYH34Gf7f86RuV-F6SFcWeDFqLVQjapH5vJdBPZZV3WAcchP8HZQzKkwAV9-kS7D7pmc_juAiSM3H',
  foods: [
    mockFoods.find(f => f.id === 'food-6')!,  // Apple
    mockFoods.find(f => f.id === 'food-23')!, // Peanut Butter
    mockFoods.find(f => f.id === 'food-12')!  // Dark Chocolate
  ],
  description: 'Crisp apple slices with creamy peanut butter and a touch of dark chocolate.',
  totalCalories: 445,
  totalCarbs: 44.7,
  totalProtein: 9,
  totalFat: 27.2
},
  {
    id: 'meal-10',
    name: 'Veggie Delight Wrap',
    image: 'https://i0.wp.com/s.lightorangebean.com/media/20240914152454/Fresh-Veggie-Hummus-Wrap_-done-800x530.png?resize=800%2C530&quality=80&ssl=1',
    foods: [
      mockFoods.find(f => f.id === 'food-3')!,  // Broccoli
      mockFoods.find(f => f.id === 'food-4')!, // Spinach
      mockFoods.find(f => f.id === 'food-20')!  // Cucumber
    ],
    description: 'A refreshing wrap filled with broccoli, spinach, and cucumber.',
    totalCalories: 120,
    totalCarbs: 15.6,
    totalProtein: 5.6,
    totalFat: 3.2
  }
];
