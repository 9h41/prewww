import React from "react";
import type { Template } from "tinacms";
import { PageBlocksTestimonial } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";

export const Testimonial = ({ data }: { data: PageBlocksTestimonial }) => {
  const textColors = {
    default:
      "text-white",
    tint: "text-gray-700 dark:text-gray-50",
    primary: {
      black: "text-black",
      blue: "text-blue-500",
      teal: "text-teal-500",
      green:
        "text-green-500",
      red: "text-red-500",
      pink: "text-ping-500",
      purple:
        "text-purple-500",
      orange:
        "text-orange-500",
      yellow:
        "text-yellow-500",
    },
  };
  const textColorCss = (textColor: string) => {
    return textColor === "primary"
      ? textColors.primary[textColor]
      : textColors.primary[textColor]
      ? textColors.primary[textColor]
      : textColors.default;
  }
  return (
    <Section color={data.color}>
      <Container size="large">
        <blockquote>
          <div
            className={`relative z-10 max-w-3xl mx-auto text-4xl lg:text-5xl font-bold tracking-normal text-center title-font ${
              textColorCss(data.textColor)
            }`}
          >
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1`}
            >
              &ldquo;
            </span>
            <p
              data-tina-field={tinaField(data, `quote`)}
              className="relative opacity-95"
            >
              {data.quote}
            </p>
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1`}
            >
              &rdquo;
            </span>
          </div>
          <div className={`my-8 flex-grow-0`}>
            <span
              className={`block mx-auto h-0.5 w-1/6 ${
                data.color === "primary"
                  ? `bg-blue-600`
                  : `bg-gray-200 dark:bg-gray-700`
              }`}
            ></span>
          </div>
          <footer className="text-center">
            <p
              data-tina-field={tinaField(data, `author`)}
              className={`tracking-wide title-font font-bold text-lg ${
                textColorCss(data.authorColor)
              }`}
            >
              {data.author}
            </p>
          </footer>
        </blockquote>
      </Container>
    </Section>
  );
};

export const testimonialBlockSchema: Template = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
      color: "primary",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "Orange", value: "orange" },
        { label: "Black", value: "black" },
        { label: "Teal", value: "teal" },
        { label: "Green", value: "green" },
        { label: "Red", value: "red" },
        { label: "Pink", value: "pink" },
        { label: "Purple", value: "purple" },
        { label: "Yellow", value: "yellow" },
      ],
    },
    {
      type: "string",
      label: "Text Color",
      name: "textColor",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "Orange", value: "orange" },
        { label: "Black", value: "black" },
        { label: "Teal", value: "teal" },
        { label: "Green", value: "green" },
        { label: "Red", value: "red" },
        { label: "Pink", value: "pink" },
        { label: "Purple", value: "purple" },
        { label: "Yellow", value: "yellow" },
      ],
    },
    {
      type: "string",
      label: "Author Color",
      name: "authorColor",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "Orange", value: "orange" },
        { label: "Black", value: "black" },
        { label: "Teal", value: "teal" },
        { label: "Green", value: "green" },
        { label: "Red", value: "red" },
        { label: "Pink", value: "pink" },
        { label: "Purple", value: "purple" },
        { label: "Yellow", value: "yellow" },
      ],
    },
  ],
};
