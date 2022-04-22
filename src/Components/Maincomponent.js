import React, { useEffect, useState } from "react";
import Card from "./Card";
import NavList from "./NavList";

const data = [
  {
    categoryId: 1,
    categoryName: "Animation",
    courses: [
      {
        id: 11,
        title:
          "Animation Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
        displayImage: "img/1.jpg",
        author: "Emma Gannon",
        tag: "Original",
      },
      {
        id: 12,
        title:
          "Animation Simple Character Animation: Create a Walk Cycle with Duik",
        displayImage: "img/2.jpg",
        author: "Fraser Davidso",
        tag: "Original",
      },
      {
        id: 13,
        title:
          "Animation Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
        displayImage: "img/3.jpg",
        author: "Emma Gannon",
        tag: "Original",
      },
      {
        id: 13,
        title:
          "Animation Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
        displayImage: "img/3.jpg",
        author: "Emma Gannon",
        tag: "Original",
      },
      {
        id: 12,
        title:
          "Animation Simple Character Animation: Create a Walk Cycle with Duik",
        displayImage: "img/2.jpg",
        author: "Fraser Davidso",
        tag: "Original",
      },
      {
        id: 13,
        title:
          "Animation Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
        displayImage: "img/3.jpg",
        author: "Emma Gannon",
        tag: "Original",
      },
      {
        id: 13,
        title:
          "Animation Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
        displayImage: "img/3.jpg",
        author: "Emma Gannon",
        tag: "Original",
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: "Design",
    courses: [
      {
        id: 21,
        title:
          "Design Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/4.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Design Fundamentals of DSLR Photography lorem ipsum in the field of theright",
        displayImage: "img/5.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: "Illustration",
    courses: [
      {
        id: 21,
        title:
          "Illustration Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/6.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Illustration Fundamentals of DSLR Photography in the mountains of the pak",
        displayImage: "img/7.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
      {
        id: 11,
        title:
          "Animation Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
        displayImage: "img/1.jpg",
        author: "Emma Gannon",
        tag: "Original",
      },
      {
        id: 12,
        title:
          "Animation Simple Character Animation: Create a Walk Cycle with Duik",
        displayImage: "img/2.jpg",
        author: "Fraser Davidso",
        tag: "Original",
      },
    ],
  },
  {
    categoryId: 4,
    categoryName: "Lifestyle",
    courses: [
      {
        id: 21,
        title:
          "Lifestyle Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/8.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Lifestyle Fundamentals of DSLR Photography steno graphere here is",
        displayImage: "img/1.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
    ],
  },
  {
    categoryId: 5,
    categoryName: "Photo & Film",
    courses: [
      {
        id: 21,
        title:
          "Photo & Film Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/2.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 21,
        title:
          "Lifestyle Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/8.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Lifestyle Fundamentals of DSLR Photography steno graphere here is",
        displayImage: "img/1.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Photo & Film Fundamentals of DSLR Photography core visual designs",
        displayImage: "img/4.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
    ],
  },
  {
    categoryId: 6,
    categoryName: "Bussiness",
    courses: [
      {
        id: 21,
        title:
          "Bussiness Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/3.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 21,
        title:
          "Lifestyle Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/8.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Lifestyle Fundamentals of DSLR Photography steno graphere here is",
        displayImage: "img/1.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
      {
        id: 22,
        title: "Bussiness  Fundamentals of DSLR Photography for visual designs",
        displayImage: "img/8.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
    ],
  },
  {
    categoryId: 7,
    categoryName: "Writting",
    courses: [
      {
        id: 21,
        title:
          "Writting Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/7.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 21,
        title:
          "Lifestyle Graphic Design Basics: Core Principles for Visual Design",
        displayImage: "img/8.jpg",
        author: "Ellen Lupton",
        tag: "Original",
      },
      {
        id: 22,
        title:
          "Lifestyle Fundamentals of DSLR Photography steno graphere here is",
        displayImage: "img/1.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
      {
        id: 22,
        title: " Writting Fundamentals of DSLR Photography core visual designs",
        displayImage: "img/4.jpg",
        author: "Temi Coker",
        tag: "Original",
      },
    ],
  },
];

export const Maincomponent = () => {
  const [categories, setCategories] = useState([]);
  const [cardData, setcardData] = useState([]);

  const cardClick = (categoryId) => {
    const selectedCategory = data.find(
      (item) => item.categoryId === categoryId
    );
    const final = selectedCategory.courses;
    setcardData(final);
    console.log("ONclick", final);
  };

  useEffect(() => {
    const coursesData = [];
    data.map((item) => {
      coursesData.push(...item.courses);
    });

    //navItems.unshift(0, { categoryId: -1, categoryName: "All Categories" });
    setcardData(coursesData);
    console.log("sell all courses", coursesData);
  }, []);

  useEffect(() => {
    const navItems = data.map((item) => {
      return { categoryId: item.categoryId, categoryName: item.categoryName };
    });

    //navItems.unshift(0, { categoryId: -1, categoryName: "All Categories" });
    setCategories(navItems);
  }, []);

  //const fia = data.find((item) => {
  //return setCardData(item.categoryId === item.categoryId);
  //});

  // const navItem = data.map((item) => {
  //   return { categoryId: item.categoryId, categoryName: item.categoryName };
  // });

  // const newData = data.map();
  // const aquaticCreatures = data.filter(function (data) {
  //   return data.categoryName == "Design";
  // });

  // const showData = console.log(aquaticCreatures);

  return (
    <>
      <div>
        <h1>Discover Lifelong Learning</h1>
      </div>

      {<NavList navlistname={categories} onCardClick={cardClick} />}

      {<Card cardCoursesData={cardData} onDataClick={cardClick} />}
    </>
  );
};
