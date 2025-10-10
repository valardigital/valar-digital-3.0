import type { Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const CaseStudyContent: Block = {
  slug: "caseStudiesContent",
  labels: {
    singular: "Case Study Content",
    plural: "Case Study Contents",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Section Title (left)"
    },
    {
      name: "headingLevel",
      type: "select",
      label: "Heading Level",
      defaultValue: "h2",
      options: [
        {
          label: "Heading 1",
          value: "h1",
        },
        {
          label: "Heading 2",
          value: "h2",
        },
        {
          label: "Heading 3",
          value: "h3",
        },
        {
          label: "Heading 4",
          value: "h4",
        },
        {
          label: "Heading 5",
          value: "h5",
        },
        {
          label: "Heading 6",
          value: "h6",
        },
        {
          label: "No Heading (Plain Text)",
          value: "div",
        },
      ],
    },
    {
      name: "titleStyle",
      type: "select",
      label: "Title Style",
      defaultValue: "default",
      options: [
        {
          label: "Default (Uppercase)",
          value: "default",
        },
        {
          label: "Sentence Case",
          value: "sentence",
        },
        {
          label: "Title Case",
          value: "title",
        },
        {
          label: "Lowercase",
          value: "lowercase",
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Content (right)",
      editor: lexicalEditor(),
    },
    {
      name: "blockquote",
      type: "group",
      label: "Blockquote (optional)",
      fields: [
        {
          name: "quote",
          type: "text",
          label: "Quote Text",
        },
        {
          name: "attribution",
          type: "text",
          label: "Attribution (e.g. name, company)",
        },
      ],
    },
    {
      name: "showDivider",
      type: "checkbox",
      label: "Show Divider Line Below Section",
      defaultValue: true,
    },
  ],
};

export default CaseStudyContent; 