// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
      secondary: "secondary",
      info: "blue",
      success: "green",
      warning: "yellow",
      error: "red",
      neutral: "zinc",
    },
    button: {
      slots: {
        base: "group inline-flex items-center gap-2 font-semibold tracking-widest uppercase text-label-caps transition-colors disabled:opacity-60 disabled:cursor-not-allowed rounded-none",
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "bg-primary-900 text-on-primary hover:bg-primary-700 active:bg-primary-800",
        },
        {
          color: "primary",
          variant: "outline",
          class:
            "border border-primary-900 text-primary-800 hover:bg-primary-50 active:bg-primary-100",
        },
        {
          color: "secondary",
          variant: "solid",
          class:
            "bg-secondary-700 text-on-secondary hover:bg-secondary-600 active:bg-secondary-800",
        },
        {
          color: "secondary",
          variant: "outline",
          class:
            "border border-secondary-700 text-secondary-700 hover:bg-secondary-50 active:bg-secondary-100",
        },
        {
          color: "secondary",
          variant: "ghost",
          class: "text-secondary-700 hover:bg-secondary-50",
        },
        {
          color: "primary",
          variant: "ghost",
          class: "text-primary-800 hover:bg-primary-50",
        },
        {
          color: "secondary",
          variant: "link",
          class: "text-secondary-700 hover:opacity-70 p-0",
        },
        {
          color: "primary",
          variant: "link",
          class: "text-primary-800 hover:opacity-70 p-0",
        },
      ],
    },
  },
});
